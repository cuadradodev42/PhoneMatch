// --- MOTOR DE RECOMENDACIÓN DE PHONEMATH ---

/**
 * Función para normalizar valores de especificaciones a una escala de 0-10.
 */
function normalizeValue(key, value) {
    if (typeof value === 'boolean') {
        return value ? 10 : 0;
    }
    
    if (typeof value !== 'number') {
        return 0;
    }
    
    switch (key) {
        case 'capacity':
            // 3200mAh = 0, 6000mAh = 10
            return Math.min(10, Math.max(0, (value - 3200) / 280));
            
        case 'fast_charge':
            // 18W = 0, 240W = 10  
            return Math.min(10, Math.max(0, (value - 18) / 22.2));
            
        case 'ram':
            // 6GB = 0, 16GB = 10
            return Math.min(10, Math.max(0, (value - 6)));
            
        case 'size':
            // Óptimo entre 6.4-6.7", penalizar extremos
            if (value >= 6.4 && value <= 6.7) return 10;
            return Math.max(0, 10 - Math.abs(value - 6.55) * 5);
            
        case 'refresh_rate':
            // 90Hz = 0, 165Hz = 10
            return Math.min(10, Math.max(0, (value - 90) / 7.5));
            
        case 'bluetooth_version':
            // 5.0 = 0, 5.3+ = 10
            return Math.min(10, Math.max(0, (value - 5.0) * 33.33));
            
        case 'usb_version':
            // 2.0 = 0, 3.2+ = 10
            return Math.min(10, Math.max(0, (value - 2.0) * 8.33));
            
        default:
            // Valores que ya están en 0-10 o necesitan limitarse
            return Math.min(10, Math.max(0, value));
    }
}

/**
 * Función auxiliar para obtener de forma segura el valor de una propiedad anidada y normalizarla.
 */
function getDetailValue(phone, key) {
    if (!phone.details) return 0;
    const d = phone.details;
    
    const keyMap = {
        'capacity': d.battery, 'fast_charge': d.battery, 'energy_consumption': d.battery, 'wireless_charge': d.battery,
        'ram': d.performance, 'cpu': d.performance, 'gpu': d.performance,
        'material_score': d.design, 'water_resistance': d.design, 'dust_resistance': d.design, 'drop_resistance': d.design,
        'nfc': d.connectivity, 'data5g': d.connectivity, 'lte': d.connectivity, 'jack': d.connectivity, 'precision_gps': d.connectivity, 'wifi_speed': d.connectivity, 'bluetooth_version': d.connectivity, 'usb_version': d.connectivity,
        'audio_score': d.audiovisual, 'video_score': d.audiovisual, 'photo_score': d.audiovisual, 'zoom': d.audiovisual, 'ois': d.audiovisual, 'eis': d.audiovisual, 'pro_video': d.audiovisual,
        'software_compatibility': d.software, 'software_design': d.software, 'software_efficiency': d.software, 'software_updates': d.software, 'software_features': d.software, 'software_security': d.software,
        'number_of_extras': d.extras, 'dual_sim': d.extras, 'expandable_storage': d.extras, 'fingerprint': d.extras, 'face_unlock': d.extras, 'ir_blaster': d.extras, 'stereo_speakers': d.extras,
        'color': d.screen, 'size': d.screen, 'brightness': d.screen, 'oled': d.screen, 'refresh_rate': d.screen, 'hdr': d.screen, 'resolution': d.screen, 'protection': d.screen,
    };

    let rawValue;
    if (key.startsWith('software_')) {
        const softwareProperty = key.replace('software_', '');
        rawValue = keyMap[key]?.[softwareProperty] ?? 0;
    } else {
        rawValue = keyMap[key]?.[key] ?? 0;
    }

    return normalizeValue(key, rawValue);
}

/**
 * La función principal del motor. Recibe las selecciones del usuario y la base de datos,
 * y devuelve el mejor smartphone o null si no hay resultados.
 */
function calculateRecommendation(selectedUseKeys, selectedPriceId, allSmartphones, allUseCases, allPriceRanges) {
    const priceRange = allPriceRanges.find(p => p.id === selectedPriceId);

    // 1. Construir el "Mapa de Requisitos Maestro"
    const masterWeights = {};
    selectedUseKeys.forEach(useKey => {
        const currentWeights = allUseCases[useKey].weights;
        for (const param in currentWeights) {
            if (!masterWeights[param] || currentWeights[param] > masterWeights[param]) {
                masterWeights[param] = currentWeights[param];
            }
        }
    });

    // 2. Calcular la puntuación máxima teórica posible para el uso seleccionado
    let maxPossibleScore = 0;
    for (const param in masterWeights) {
        maxPossibleScore += masterWeights[param] * 10;
    }

    // 3. Pre-procesar TODOS los móviles para calcular sus puntuaciones clave
    const allPhonesProcessed = allSmartphones.map(phone => {
        if (!phone.details) {
            return { ...phone, useCaseQualityScore: 0, totalQuality: 0, scores: {} };
        }

        // a) Calidad específica para el uso seleccionado
        let rawUseCaseScore = 0;
        for (const param in masterWeights) {
            rawUseCaseScore += getDetailValue(phone, param) * masterWeights[param];
        }
        const useCaseQualityScore = maxPossibleScore > 0 ? (rawUseCaseScore / maxPossibleScore) : 0; // Normalizada 0-1

        // b) Puntuaciones para mostrar en la UI
        const displayScores = {
            performance: (getDetailValue(phone, 'cpu') + getDetailValue(phone, 'gpu')) / 2,
            battery: getDetailValue(phone, 'capacity'),
            design: getDetailValue(phone, 'material_score'),
            screen: (getDetailValue(phone, 'color') + getDetailValue(phone, 'brightness')) / 2,
            camera_photo: getDetailValue(phone, 'photo_score'),
            camera_video: getDetailValue(phone, 'video_score'),
        };

        // c) Calidad total (independiente del uso) para el cálculo de QP absoluta
        const scoreValues = Object.values(displayScores);
        const totalQuality = scoreValues.length > 0 ? scoreValues.reduce((sum, val) => sum + val, 0) / scoreValues.length : 0;

        return { ...phone, useCaseQualityScore, totalQuality, scores: displayScores };
    });

    // 4. Calcular la calidad-precio absoluta para TODOS los móviles
    let maxAbsoluteValue = 0;
    const phonesWithAbsoluteQP = allPhonesProcessed.map(phone => {
        // Se suma 1 para evitar división por cero en móviles gratuitos (si los hubiera)
        const absoluteQP = phone.totalQuality / (phone.price + 1);
        if (absoluteQP > maxAbsoluteValue) {
            maxAbsoluteValue = absoluteQP;
        }
        return { ...phone, absoluteQP };
    });

    // 5. Filtrar por precio
    const filteredPhones = phonesWithAbsoluteQP.filter(phone => phone.price >= priceRange.min && phone.price <= priceRange.max);

    if (filteredPhones.length === 0) {
        return null;
    }

    // 6. Calcular la puntuación final para los móviles filtrados
    const scoredPhones = filteredPhones.map(phone => {
        // a) Puntuación de precio relativa al rango (0-1)
        const PRACTICAL_MAX_PRICE = 2000;
        const rangeMin = priceRange.min;
        const rangeMax = priceRange.max === Infinity ? PRACTICAL_MAX_PRICE : priceRange.max;
        const priceInRangeScore = (rangeMax - rangeMin > 0) ? Math.max(0, 1 - ((phone.price - rangeMin) / (rangeMax - rangeMin))) : 1;

        // b) Calidad-precio absoluta (normalizada a 0-1)
        const absoluteQPScore = maxAbsoluteValue > 0 ? (phone.absoluteQP / maxAbsoluteValue) : 0;

        // c) Puntuación final combinada (ponderada) y escalada a 10
        const finalScore = (
            (phone.useCaseQualityScore * 0.60) + // 60% peso a la calidad para el uso
            (absoluteQPScore * 0.25) +           // 25% peso a si es una "ganga" en general
            (priceInRangeScore * 0.15)           // 15% peso a lo barato que es dentro del presupuesto
        ) * 10;

        return { ...phone, finalScore };
    });

    // 7. Ordenar y devolver el mejor resultado
    scoredPhones.sort((a, b) => b.finalScore - a.finalScore);
    return scoredPhones[0];
}
