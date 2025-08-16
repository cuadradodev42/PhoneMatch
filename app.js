// --- LÓGICA DE LA APLICACIÓN ---

// Variable global para el idioma actual
let currentLang = 'es';

/**
 * Calcula las puntuaciones principales (0-10) para un smartphone basándose en sus datos detallados.
 * Esta función actúa como "traductor" entre los datos brutos del móvil y las categorías que usamos para puntuar.
 * @param {object} details - Las especificaciones detalladas del smartphone.
 * @returns {object} - Un objeto que contiene las puntuaciones principales calculadas.
 */
function calculateMainScores(details) {
    const scores = {};

    // --- Puntuación de Batería ---
    const capacityScore = Math.min(10, (details.battery.capacity / 5000) * 10);
    const chargeScore = Math.min(10, (details.battery.fast_charge / 100) * 10);
    const consumptionScore = 10 - details.battery.energy_consumption;
    const wirelessScore = details.battery.wireless_charge ? 8 : 2;
    scores.battery = (capacityScore * 0.4) + (chargeScore * 0.3) + (consumptionScore * 0.2) + (wirelessScore * 0.1);

    // --- Puntuación de Rendimiento ---
    const ramScore = Math.min(10, (details.performance.ram / 12) * 10);
    scores.performance = (details.performance.cpu * 0.4) + (details.performance.gpu * 0.4) + (ramScore * 0.2);

    // --- Puntuación de Diseño ---
    scores.design = (details.design.material_score * 0.3) + (details.design.water_resistance * 0.3) + (details.design.dust_resistance * 0.2) + (details.design.drop_resistance * 0.2);

    // --- Puntuación de Conectividad ---
    const features = [details.connectivity.nfc, details.connectivity.data5g, details.connectivity.lte, details.connectivity.jack];
    const featureScore = (features.filter(Boolean).length / features.length) * 10;
    const numericScores = [details.connectivity.precision_gps, details.connectivity.wifi_speed, (details.connectivity.bluetooth_version * 2), (details.connectivity.usb_version * 3)];
    const numericAvg = numericScores.reduce((a, b) => a + b, 0) / numericScores.length;
    scores.connectivity = (featureScore * 0.4) + (numericAvg * 0.6);

    // --- Puntuaciones Audiovisuales ---
    scores.sound = details.audiovisual.audio_score;
    const oisEisScore = (details.audiovisual.ois ? 5 : 0) + (details.audiovisual.eis ? 5 : 0);
    scores.camera_photo = (details.audiovisual.photo_score * 0.7) + (oisEisScore * 0.3);
    scores.camera_video = (details.audiovisual.video_score * 0.7) + (oisEisScore * 0.3);

    // --- Puntuación de Software ---
    scores.software = (details.software.compatibility + details.software.design + details.software.efficiency) / 3;

    // --- Puntuación de Extras ---
    scores.extras = Math.min(10, details.extras.number_of_extras * 2 + (details.extras.dual_sim ? 2 : 0));
    
    // --- Puntuación de Pantalla ---
    scores.screen = (details.screen.color * 0.4) + (details.screen.brightness * 0.4) + ((details.screen.oled ? 10 : 6) * 0.2);

    // Se asegura de que ninguna puntuación supere el 10
    for(const key in scores) {
        scores[key] = Math.min(10, scores[key]);
    }

    return scores;
}

// El evento DOMContentLoaded se asegura de que todo el HTML esté cargado antes de ejecutar el script.
document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los elementos del DOM
    const useCaseContainer = document.getElementById('use-case-container');
    const priceRangeContainer = document.getElementById('price-range-container');
    const recommendBtn = document.getElementById('recommend-btn');

    // Función inicial para construir la interfaz de usuario
    function initializeApp() {
        populateUI();
        addEventListeners();
        setLanguage('es'); // Establecer idioma inicial
    }

    function populateUI() {
        useCaseContainer.innerHTML = '';
        for (const key in useCases) {
            const card = document.createElement('div');
            card.className = 'use-card cursor-pointer bg-gray-800 p-4 rounded-lg border-2 border-gray-700 hover:border-blue-500 flex flex-col items-center justify-center text-center';
            card.dataset.use = key;
            card.innerHTML = `<span class="text-4xl mb-2">${useCases[key].icon}</span><span class="font-medium" data-translate-key="${key}"></span>`;
            useCaseContainer.appendChild(card);
        }

        priceRangeContainer.innerHTML = '';
        priceRanges.forEach(range => {
            const card = document.createElement('div');
            card.className = 'price-card cursor-pointer bg-gray-800 p-4 rounded-lg border-2 border-gray-700 hover:border-green-500 flex items-center justify-center';
            card.dataset.priceId = range.id;
            card.innerHTML = `<span class="font-semibold text-lg">${range.label}</span>`;
            priceRangeContainer.appendChild(card);
        });
    }

    function checkButtonState() {
        const selectedUses = document.querySelectorAll('.use-card.selected').length > 0;
        const selectedPrice = document.querySelector('.price-card.selected') !== null;
        recommendBtn.disabled = !(selectedUses && selectedPrice);
    }

    function addEventListeners() {
        document.querySelectorAll('.use-card').forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('selected');
                card.classList.toggle('border-blue-500');
                card.classList.toggle('border-gray-700');
                checkButtonState();
            });
        });

        document.querySelectorAll('.price-card').forEach(card => {
            card.addEventListener('click', () => {
                document.querySelectorAll('.price-card').forEach(c => {
                    c.classList.remove('selected', 'border-green-500');
                    c.classList.add('border-gray-700');
                });
                card.classList.add('selected', 'border-green-500');
                card.classList.remove('border-gray-700');
                checkButtonState();
            });
        });

        recommendBtn.addEventListener('click', runRecommendation);
    }

    function runRecommendation() {
        const selectedUseKeys = Array.from(document.querySelectorAll('.use-card.selected')).map(c => c.dataset.use);
        const selectedPriceId = document.querySelector('.price-card.selected').dataset.priceId;
        const priceRange = priceRanges.find(p => p.id === selectedPriceId);

        // 1. Procesar todos los móviles para calcular sus puntuaciones de alto nivel
        const phonesToProcess = smartphones.map(phone => {
            const scores = phone.details ? calculateMainScores(phone.details) : (phone.scores || {});
            return { ...phone, scores };
        });

        // 2. Filtrar los móviles por el rango de precio seleccionado
        const filteredPhones = phonesToProcess.filter(phone => phone.price >= priceRange.min && phone.price <= priceRange.max);

        if (filteredPhones.length === 0) {
            displayNoResults();
            return;
        }

        // 3. Calcular la puntuación final para cada móvil filtrado
        const scoredPhones = filteredPhones.map(phone => {
            let totalWeightedScore = 0;
            let totalWeight = 0;

            selectedUseKeys.forEach(useKey => {
                for (const param in useCases[useKey].weights) {
                    const weight = useCases[useKey].weights[param];
                    const score = phone.scores[param] || 0;
                    totalWeightedScore += score * weight;
                    totalWeight += weight;
                }
            });
            
            const qualityScore = totalWeight > 0 ? (totalWeightedScore / totalWeight) : 0;

            const PRACTICAL_MAX_PRICE = 2000;
            const rangeMin = priceRange.min;
            const rangeMax = priceRange.max === Infinity ? PRACTICAL_MAX_PRICE : priceRange.max;
            const priceScore = (rangeMax - rangeMin > 0) ? Math.max(0, 1 - ((phone.price - rangeMin) / (rangeMax - rangeMin))) : 1;
            
            // Puntuación final: 70% calidad, 30% precio (ajustado a una escala de 10)
            const finalScore = (qualityScore * 0.7) + (priceScore * 3);

            return { ...phone, finalScore };
        });

        scoredPhones.sort((a, b) => b.finalScore - a.finalScore);
        const bestPhone = scoredPhones[0];
        displayResult(bestPhone);
    }

    function displayResult(phone) {
        const resultsSection = document.getElementById('results-section');
        const scoresHTML = Object.entries(phone.scores).map(([key, value]) => {
            if (!value || value <= 0) return '';
            return `
            <div class="flex justify-between items-center py-2 border-b border-gray-700/50 last:border-b-0">
                <span class="text-gray-300 capitalize" data-translate-key="${key}">${translations[currentLang][key] || key}</span>
                <div class="flex items-center">
                    <span class="font-bold text-lg mr-2 text-emerald-400">${value.toFixed(1)}</span>
                    <div class="w-24 bg-gray-600 rounded-full h-2.5"><div class="bg-emerald-500 h-2.5 rounded-full" style="width: ${value * 10}%"></div></div>
                </div>
            </div>`;
        }).join('');

        resultsSection.innerHTML = `
            <h2 class="text-3xl font-bold text-center mb-6" data-translate-key="result_title">${translations[currentLang]['result_title']}</h2>
            <div class="flex flex-col md:flex-row gap-6 items-center">
                <div class="md:w-1/3 text-center">
                    <img src="${phone.image}" alt="${phone.name}" class="rounded-2xl mx-auto shadow-2xl mb-4">
                    <h3 class="text-2xl font-bold">${phone.name}</h3>
                    <p class="text-xl text-gray-300">${phone.price}€</p>
                    <div class="mt-4 bg-gray-900/70 p-3 rounded-lg">
                        <p class="text-sm text-gray-400 uppercase" data-translate-key="quality_price_score">${translations[currentLang]['quality_price_score']}</p>
                        <p class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500">
                            ${Math.min(10, phone.finalScore).toFixed(1)}<span class="text-2xl text-gray-400">/10</span>
                        </p>
                    </div>
                </div>
                <div class="md:w-2/3">
                    <h4 class="text-xl font-semibold mb-2" data-translate-key="result_reason">${translations[currentLang]['result_reason']}</h4>
                    <p class="text-gray-400 mb-6" data-translate-key="result_reason_text">${translations[currentLang]['result_reason_text'].replace('{phoneName}', phone.name)}</p>
                    <h4 class="text-xl font-semibold mb-2" data-translate-key="scores_title">${translations[currentLang]['scores_title']}</h4>
                    <div class="bg-gray-800/60 p-4 rounded-lg">${scoresHTML}</div>
                </div>
            </div>`;
        resultsSection.classList.remove('hidden');
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    function displayNoResults() {
        const resultsSection = document.getElementById('results-section');
        resultsSection.innerHTML = `
            <div class="text-center py-8">
                <h2 class="text-3xl font-bold mb-2" data-translate-key="no_results_title">${translations[currentLang]['no_results_title']}</h2>
                <p class="text-gray-400" data-translate-key="no_results_text">${translations[currentLang]['no_results_text']}</p>
            </div>`;
        resultsSection.classList.remove('hidden');
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Iniciar la aplicación
    initializeApp();
});

// Función global para cambiar el idioma
window.setLanguage = function(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('border-blue-500', 'text-blue-400');
        btn.classList.add('border-transparent', 'text-gray-500');
    });
    const activeBtn = document.querySelector(`.lang-btn.${lang}`);
    activeBtn.classList.add('border-blue-500', 'text-blue-400');
    activeBtn.classList.remove('border-transparent', 'text-gray-500');

    document.querySelectorAll('[data-translate-key]').forEach(el => {
        const key = el.dataset.translateKey;
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}