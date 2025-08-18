// --- LÓGICA DE LA INTERFAZ DE USUARIO (UI) ---

// Variable global para el idioma actual
let currentLang = 'es';

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

    // --- FUNCIÓN INTERMEDIARIA ---
    // Esta función ahora solo recoge los datos y llama al motor.
    function runRecommendation() {
        // 1. Recoger selecciones del usuario desde el HTML
        const selectedUseKeys = Array.from(document.querySelectorAll('.use-card.selected')).map(c => c.dataset.use);
        const selectedPriceId = document.querySelector('.price-card.selected').dataset.priceId;

        // 2. Llamar al motor de recomendación con todos los datos necesarios
        // (asume que calculateRecommendation está disponible globalmente desde engine.js)
        const bestPhone = calculateRecommendation(selectedUseKeys, selectedPriceId, smartphones, useCases, priceRanges);

        // 3. Mostrar el resultado que nos ha devuelto el motor
        if (bestPhone) {
            displayResult(bestPhone);
        } else {
            displayNoResults();
        }
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
                            ${phone.finalScore.toFixed(1)}<span class="text-2xl text-gray-400">/10</span>
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
