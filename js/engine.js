// --- MOTOR DE RECOMENDACIÓN DE PHONEMATH ---

// ... (las funciones normalizeValue y getDetailValue no cambian) ...
function normalizeValue(key, value) {
    if (typeof value === 'boolean') return value ? 10 : 0;
    if (typeof value !== 'number') return 0;
    switch (key) {
        case 'capacity': return Math.min(10, Math.max(0, (value - 3200) / 280));
        case 'fast_charge': return Math.min(10, Math.max(0, (value - 18) / 22.2));
        case 'ram': return Math.min(10, Math.max(0, (value - 6)));
        case 'size': if (value >= 6.4 && value <= 6.7) return 10; return Math.max(0, 10 - Math.abs(value - 6.55) * 5);
        case 'refresh_rate': return Math.min(10, Math.max(0, (value - 90) / 7.5));
        case 'bluetooth_version': return Math.min(10, Math.max(0, (value - 5.0) * 33.33));
        case 'usb_version': return Math.min(10, Math.max(0, (value - 2.0) * 8.33));
        default: return Math.min(10, Math.max(0, value));
    }
}
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
    if (key === 'energy_consumption' && d.battery && d.battery.energy_concumption) {
        return normalizeValue(key, d.battery.energy_concumption);
    }
    let rawValue;
    if (key.startsWith('software_')) {
        const softwareProperty = key.replace('software_', '');
        rawValue = keyMap[key]?.[softwareProperty] ?? 0;
    } else {
        rawValue = keyMap[key]?.[key] ?? 0;
    }
    return normalizeValue(key, rawValue);
}

function calculateRecommendation(selectedUseKeys, selectedPriceId, allSmartphones, allUseCases, allPriceRanges) {
    const priceRange = allPriceRanges.find(p => p.id === selectedPriceId);

    const masterWeights = {};
    // --- NUEVO: Guardar los parámetros de razonamiento ---
    const reasoningParams = new Set();
    selectedUseKeys.forEach(useKey => {
        const currentUseCase = allUseCases[useKey];
        for (const param in currentUseCase.weights) {
            if (!masterWeights[param] || currentUseCase.weights[param] > masterWeights[param]) {
                masterWeights[param] = currentUseCase.weights[param];
            }
        }
        // Añadimos los parámetros de razonamiento de este uso a un Set para evitar duplicados
        currentUseCase.reasoningParams.forEach(p => reasoningParams.add(p));
    });

    let maxPossibleScore = 0;
    for (const param in masterWeights) {
        maxPossibleScore += masterWeights[param] * 10;
    }

    const allPhonesProcessed = allSmartphones.map(phone => {
        if (!phone.details) {
            return { ...phone, useCaseQualityScore: 0, totalQuality: 0, scores: {} };
        }
        let rawUseCaseScore = 0;
        for (const param in masterWeights) {
            rawUseCaseScore += getDetailValue(phone, param) * masterWeights[param];
        }
        const useCaseQualityScore = maxPossibleScore > 0 ? (rawUseCaseScore / maxPossibleScore) : 0;
        const displayScores = {
            performance: (getDetailValue(phone, 'cpu') + getDetailValue(phone, 'gpu')) / 2,
            battery: getDetailValue(phone, 'capacity'),
            design: getDetailValue(phone, 'material_score'),
            screen: (getDetailValue(phone, 'color') + getDetailValue(phone, 'brightness')) / 2,
            camera_photo: getDetailValue(phone, 'photo_score'),
            camera_video: getDetailValue(phone, 'video_score'),
        };
        const scoreValues = Object.values(displayScores);
        const totalQuality = scoreValues.length > 0 ? scoreValues.reduce((sum, val) => sum + val, 0) / scoreValues.length : 0;
        return { ...phone, useCaseQualityScore, totalQuality, scores: displayScores };
    });

    let maxAbsoluteValue = 0;
    const phonesWithAbsoluteQP = allPhonesProcessed.map(phone => {
        const absoluteQP = phone.totalQuality / (phone.price + 1);
        if (absoluteQP > maxAbsoluteValue) {
            maxAbsoluteValue = absoluteQP;
        }
        return { ...phone, absoluteQP };
    });

    const filteredPhones = phonesWithAbsoluteQP.filter(phone => phone.price >= priceRange.min && phone.price <= priceRange.max);
    if (filteredPhones.length === 0) {
        return null;
    }

    const scoredPhones = filteredPhones.map(phone => {
        const PRACTICAL_MAX_PRICE = 2000;
        const rangeMin = priceRange.min;
        const rangeMax = priceRange.max === Infinity ? PRACTICAL_MAX_PRICE : priceRange.max;
        const priceInRangeScore = (rangeMax - rangeMin > 0) ? Math.max(0, 1 - ((phone.price - rangeMin) / (rangeMax - rangeMin))) : 1;
        const absoluteQPScore = maxAbsoluteValue > 0 ? (phone.absoluteQP / maxAbsoluteValue) : 0;
        const finalScore = ((phone.useCaseQualityScore * 0.60) + (absoluteQPScore * 0.25) + (priceInRangeScore * 0.15)) * 10;
        return { ...phone, finalScore };
    });

    scoredPhones.sort((a, b) => b.finalScore - a.finalScore);
    
    const bestPhone = scoredPhones[0];
    // --- NUEVO: Añadimos los puntos de razonamiento al resultado final ---
    bestPhone.reasoningPoints = Array.from(reasoningParams);
    
    return bestPhone;
}
