// --- MOTOR DE RECOMENDACIÓN DE PHONEMATH ---

/**
 * Función auxiliar para obtener de forma segura el valor de una propiedad anidada.
 */
/**
 * Función para normalizar valores a escala 0-10
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
            // 4300mAh = 0, 6000mAh = 10
            return Math.min(10, Math.max(0, (value - 3200) / 200));
            
        case 'fast_charge':
            // 18W = 0, 240W = 10  
            return Math.min(10, Math.max(0, (value - 18) / 22.2));
            
        case 'ram':
            // 6GB = 0, 16GB = 10
            return Math.min(10, Math.max(0, (value - 6) / 1));
            
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
 * Función auxiliar para obtener de forma segura el valor de una propiedad anidada.
 */
function getDetailValue(phone, key) {
    if (!phone.details) return 0;
    const d = phone.details;
    
    // Mapeo corregido
    const keyMap = {
        // Battery
        'capacity': d.battery, 'fast_charge': d.battery, 'energy_consumption': d.battery, 'wireless_charge': d.battery,
        // Performance  
        'ram': d.performance, 'cpu': d.performance, 'gpu': d.performance,
        // Design
        'material_score': d.design, 'water_resistance': d.design, 'dust_resistance': d.design, 'drop_resistance': d.design,
        // Connectivity
        'nfc': d.connectivity, 'data5g': d.connectivity, 'lte': d.connectivity, 'jack': d.connectivity, 'precision_gps': d.connectivity, 'wifi_speed': d.connectivity, 'bluetooth_version': d.connectivity, 'usb_version': d.connectivity,
        // Audiovisual
        'audio_score': d.audiovisual, 'video_score': d.audiovisual, 'photo_score': d.audiovisual, 'zoom': d.audiovisual, 'ois': d.audiovisual, 'eis': d.audiovisual, 'pro_video': d.audiovisual,
        // Software - CORREGIDO
        'software_compatibility': d.software, 'software_design': d.software, 'software_efficiency': d.software, 'software_updates': d.software, 'software_features': d.software, 'software_security': d.software,
        // Extras
        'number_of_extras': d.extras, 'dual_sim': d.extras, 'expandable_storage': d.extras, 'fingerprint': d.extras, 'face_unlock': d.extras, 'ir_blaster': d.extras, 'stereo_speakers': d.extras,
        // Screen
        'color': d.screen, 'size': d.screen, 'brightness': d.screen, 'oled': d.screen, 'refresh_rate': d.screen, 'hdr': d.screen, 'resolution': d.screen, 'protection': d.screen,
    };

    // Obtener valor base
    let rawValue;
    if (key.startsWith('software_')) {
        const softwareProperty = key.replace('software_', '');
        rawValue = keyMap[key]?.[softwareProperty] ?? 0;
    } else {
        rawValue = keyMap[key]?.[key] ?? 0;
    }

    // APLICAR NORMALIZACIÓN
    return normalizeValue(key, rawValue);
}

/**
 * La función principal del motor. Recibe las selecciones del usuario y la base de datos,
 * y devuelve el mejor smartphone o null si no hay resultados.
 * @param {Array<string>} selectedUseKeys - Array con los usos seleccionados (ej. ['gaming', 'photo']).
 * @param {string} selectedPriceId - El ID del rango de precio seleccionado (ej. 'p3').
 * @param {Array<object>} allSmartphones - La lista completa de smartphones.
 * @param {object} allUseCases - El objeto completo con los casos de uso y sus pesos.
 * @param {Array<object>} allPriceRanges - La lista completa de rangos de precio.
 * @returns {object|null} - El objeto del smartphone recomendado o null.
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

    // 2. Calcular la puntuación máxima teórica posible
    let maxPossibleScore = 0;
    for (const param in masterWeights) {
        maxPossibleScore += masterWeights[param] * 10;
    }

    // 3. Procesar todos los móviles para obtener su puntuación de calidad
    const allPhonesProcessed = allSmartphones.map(phone => {
        if (!phone.details) {
            return { ...phone, qualityScore: 0, scores: {} };
        }
        let rawScore = 0;
        for (const param in masterWeights) {
            let value = getDetailValue(phone, param);
            if (typeof value === 'boolean') value = value ? 10 : 0;
            rawScore += value * masterWeights[param];
        }
        const qualityScore = maxPossibleScore > 0 ? (rawScore / maxPossibleScore) : 0;
        const displayScores = {
            performance: (getDetailValue(phone, 'cpu') + getDetailValue(phone, 'gpu')) / 2,
            battery: getDetailValue(phone, 'capacity'),
            design: getDetailValue(phone, 'material_score'),
            screen: (getDetailValue(phone, 'color') + getDetailValue(phone, 'brightness')) / 2,
            camera_photo: getDetailValue(phone, 'photo_score'),
            camera_video: getDetailValue(phone, 'video_score'),
        };
        return { ...phone, qualityScore, scores: displayScores };
    });

    // 4. Filtrar por precio y calcular puntuación final
    const filteredPhones = allPhonesProcessed.filter(phone => phone.price >= priceRange.min && phone.price <= priceRange.max);

    if (filteredPhones.length === 0) {
        return null; // No se encontraron resultados
    }

    const scoredPhones = filteredPhones.map(phone => {
        const PRACTICAL_MAX_PRICE = 2000;
        const rangeMin = priceRange.min;
        const rangeMax = priceRange.max === Infinity ? PRACTICAL_MAX_PRICE : priceRange.max;
        const priceScore = (rangeMax - rangeMin > 0) ? Math.max(0, 1 - ((phone.price - rangeMin) / (rangeMax - rangeMin))) : 1;
        const finalScore = ((phone.qualityScore * 0.5) + (priceScore * 0.5)) * 10;
        return { ...phone, finalScore };
    });

    // 5. Ordenar y devolver el mejor resultado
    scoredPhones.sort((a, b) => b.finalScore - a.finalScore);
    return scoredPhones[0];
}
