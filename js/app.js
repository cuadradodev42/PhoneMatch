// --- LÓGICA DE LA INTERFAZ DE USUARIO (UI) ---

let currentLang = 'es';
let lastRecommendation = null;

// El evento DOMContentLoaded se asegura de que todo el HTML esté cargado
document.addEventListener('DOMContentLoaded', initializeApp);

/**
 * Función principal que se ejecuta al cargar la página.
 */
function initializeApp() {
    const useCaseContainer = document.getElementById('use-case-container');
    const priceRangeContainer = document.getElementById('price-range-container');
    const recommendBtn = document.getElementById('recommend-btn');

    populateUI();
    addEventListeners();
    setLanguage('es');
    
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

    /**
     * Esta función ahora es asíncrona y solo pide el resultado al servidor.
     */
    async function runRecommendation() {
        const resultsSection = document.getElementById('results-section');
        
        // 1. Mostrar un indicador de carga
        resultsSection.classList.remove('hidden');
        resultsSection.innerHTML = `
            <div class="text-center py-8">
                <svg class="animate-spin h-8 w-8 text-white mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p>${translations[currentLang]['searching']}</p>
            </div>`;
        resultsSection.scrollIntoView({ behavior: 'smooth' });

        // 2. Obtener las selecciones del usuario
        const selectedUseKeys = Array.from(document.querySelectorAll('.use-card.selected')).map(c => c.dataset.use);
        const selectedPriceId = document.querySelector('.price-card.selected').dataset.priceId;

        try {
            // 3. Construir la URL y llamar al nuevo endpoint del servidor
            const backendUrl = `https://phonematch.onrender.com/api/recommend?uses=${selectedUseKeys.join(',')}&priceId=${selectedPriceId}`;
            const response = await fetch(backendUrl);

            if (!response.ok) {
                // Si la respuesta es un 404 (no encontrado) o un 500 (error del servidor)
                displayNoResults();
                return;
            }
            
            // La respuesta ya es el mejor móvil, calculado en el servidor
            const bestPhone = await response.json();
            
            lastRecommendation = { phone: bestPhone, uses: selectedUseKeys };

            // 4. Mostrar el resultado directamente
            displayResult(bestPhone, selectedUseKeys);

        } catch (error) {
            console.error("No se pudo obtener la recomendación:", error);
            resultsSection.innerHTML = `<p class="text-red-500 text-center">Error al conectar con el servidor.</p>`;
        }
    }

    function generateReasoningText(phone, selectedUseKeys) {
        const lang = currentLang;
        const useNames = selectedUseKeys.map(key => translations[lang][key] || key).join(', ');
        let intro = translations[lang].reason_intro
            .replace('{uses}', `<strong>${useNames}</strong>`)
            .replace('{phoneName}', `<strong>${phone.name}</strong>`);
        const reasonsList = phone.reasoningPoints
            .filter(param => translations[lang].reasons[param])
            .map(param => `<li>- ${translations[lang].reasons[param]}</li>`)
            .join('');
        return `${intro}<ul class="list-disc list-inside mt-2 space-y-1">${reasonsList}</ul>`;
    }

    function displayResult(phone, selectedUseKeys) {
        let buttonsHTML = '';
        if (phone.purchase_links && Object.keys(phone.purchase_links).length > 0) {
            buttonsHTML = `...`; // Tu código para los botones
        }
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
        const reasoningText = generateReasoningText(phone, selectedUseKeys);
        resultsSection.innerHTML = `
            <h2 class="text-3xl font-bold text-center mb-6" data-translate-key="result_title">${translations[currentLang]['result_title']}</h2>
            <div class="flex flex-col md:flex-row gap-8 items-start">
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
                    <div class="text-gray-300 mb-6 bg-gray-800/50 p-4 rounded-lg text-left">${reasoningText}</div>
                    <h4 class="text-xl font-semibold mb-2" data-translate-key="scores_title">${translations[currentLang]['scores_title']}</h4>
                    <div class="bg-gray-800/60 p-4 rounded-lg">${scoresHTML}</div>
                </div>
            </div>
            ${buttonsHTML}`;
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    function displayNoResults() {
        lastRecommendation = null;
        const resultsSection = document.getElementById('results-section');
        resultsSection.innerHTML = `
            <div class="text-center py-8">
                <h2 class="text-3xl font-bold mb-2" data-translate-key="no_results_title">${translations[currentLang]['no_results_title']}</h2>
                <p class="text-gray-400" data-translate-key="no_results_text">${translations[currentLang]['no_results_text']}</p>
            </div>`;
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

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

    const resultsSection = document.getElementById('results-section');
    if (!resultsSection.classList.contains('hidden') && lastRecommendation && lastRecommendation.phone) {
        const recommendBtn = document.getElementById('recommend-btn');
        if(recommendBtn) recommendBtn.click();
    }
}