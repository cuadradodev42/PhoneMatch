// database.js

const useCases = {
    gaming: { icon: '🎮', weights: { cpu: 10, gpu: 10, ram: 8, brightness: 9, oled: 5, capacity: 8, fast_charge: 6, audio_score: 5 } },
    photo: { icon: '📸', weights: { photo_score: 10, ois: 9, zoom: 7, color: 8, software_efficiency: 6 } },
    video: { icon: '🎬', weights: { video_score: 10, ois: 10, eis: 9, pro_video: 8, audio_score: 8, color: 7, capacity: 6 } },
    social_network: { icon: '❤️', weights: { photo_score: 8, capacity: 9, brightness: 7, software_design: 6, data5g: 6, video_score: 7, capacity: 7, fast_charge: 6 } },
    productivity: { icon: '📈', weights: { size: 8, capacity: 10, software_efficiency: 9, cpu: 7, ram: 7, nfc: 6, dual_sim: 6, fast_charge: 7 } },
    travel: { icon: '✈️', weights: { capacity: 10, precision_gps: 9, photo_score: 7, data5g: 7, drop_resistance: 6, material_score: 5, fast_charge: 6 } },
    business: { icon: '💼', weights: { software_compatibility: 10, capacity: 9, nfc: 8, dual_sim: 8, material_score: 6, fast_charge: 7, software_security: 7 } },
    fitness: { icon: '🏃', weights: { capacity: 9, drop_resistance: 8, water_resistance: 7, precision_gps: 8, bluetooth_version: 6 } },
    vr: { icon: '🕶️', weights: { cpu: 10, gpu: 10, oled: 9, brightness: 8, audio_score: 7, color: 8 } },
    xtreme_sport: { icon: '🧗', weights: { drop_resistance: 10, water_resistance: 9, dust_resistance: 8, video_score: 9, eis: 9, capacity: 8 } },
    diving: { icon: '🐠', weights: { water_resistance: 10, dust_resistance: 9, brightness: 8, capacity: 8, photo_score: 7, video_score: 7 } }
};

const priceRanges = [
    { id: 'p1', label: '<200€', min: 0, max: 199.99 },
    { id: 'p2', label: '200-400€', min: 200, max: 400 },
    { id: 'p3', label: '400-600€', min: 400.01, max: 600 },
    { id: 'p4', label: '600-800€', min: 600.01, max: 800 },
    { id: 'p5', label: '800-1000€', min: 800.01, max: 1000 },
    { id: 'p6', label: '>1000€', min: 1000.01, max: Infinity }
];
