// database.js

const useCases = {
    gaming: { 
        icon: '🎮', 
        weights: { 
            performance: 10,      // CPU/GPU críticos para FPS y gráficos complejos
            screen: 9,            // Refresh rate, resolución, tactil responsivo
            battery: 8,           // Alto consumo energético en gaming intensivo
            sound: 7,             // Audio inmersivo importante para experiencia
            software: 6,          // Optimización del OS y drivers GPU
            connectivity: 5,      // Para gaming online, pero no siempre necesario
            design: 4,            // Disipación de calor importante, pero no crítica
            extras: 6,            // Sensores giroscopio para juegos de movimiento
            camera_photo: 2,      // Irrelevante para gaming principal
            camera_video: 2       // Solo relevante para streaming ocasional
        } 
    },
    
    photo: { 
        icon: '📸', 
        weights: { 
            camera_photo: 10,     // Sensor, lentes, procesamiento de imagen críticos
            screen: 8,            // Para ver fotos con precisión de color
            software: 8,          // Algoritmos de procesamiento computational photography
            battery: 6,           // Fotografía consume batería moderadamente
            design: 5,            // Ergonomía para sostener cámara estable
            extras: 7,            // OIS, flash, sensores de proximidad/luz
            performance: 7,       // CPU para procesamiento rápido de imágenes RAW
            camera_video: 4,      // Relacionado pero no el foco principal
            sound: 2,             // Irrelevante para fotografía estática
            connectivity: 4       // Para subir fotos, pero no crítico
        } 
    },
    
    video: { 
        icon: '🎬', 
        weights: { 
            camera_video: 10,     // Calidad de grabación, estabilización crítica
            screen: 8,            // Para monitorear grabación y edición
            battery: 8,           // Grabación de video consume mucha energía
            sound: 8,             // Micrófonos de calidad esenciales
            software: 8,          // Codecs, procesamiento en tiempo real
            performance: 9,       // CPU/GPU para procesamiento 4K/8K intensivo
            extras: 8,            // Estabilización, flash LED, múltiples micrófonos
            camera_photo: 6,      // Relacionado pero no el foco
            design: 6,            // Ergonomía para grabación estable
            connectivity: 5       // Para streaming/upload, no siempre necesario
        } 
    },
    
    social_network: { 
        icon: '❤️', 
        weights: { 
            camera_photo: 9,      // Selfies y fotos para compartir son esenciales
            battery: 8,           // Uso constante durante el día
            screen: 8,            // Navegación constante, lectura de contenido
            software: 7,          // Apps optimizadas, multitarea fluida
            connectivity: 9,      // Internet constante es fundamental
            design: 6,            // Estética del dispositivo para mostrar
            performance: 6,       // Suficiente para apps sociales, no gaming
            camera_video: 7,      // Stories, TikTok, Instagram Reels importantes
            sound: 5,             // Para videos y llamadas ocasionales
            extras: 5             // Notificaciones, sensores básicos
        } 
    },
    
    productivity: { 
        icon: '📈', 
        weights: { 
            screen: 9,            // Pantalla grande, nítida para leer/escribir extenso
            battery: 9,           // Jornada laboral completa sin cargar
            software: 9,          // Suite ofimática, sincronización, multitarea
            performance: 8,       // Múltiples apps, documentos pesados, Excel complejo
            connectivity: 8,      // Email, cloud, videoconferencias constantes
            design: 6,            // Profesional pero no crítico
            extras: 6,            // Sensores para auto-rotación, stylus support
            sound: 6,             // Llamadas profesionales, conferencias
            camera_photo: 4,      // Documentar ocasionalmente
            camera_video: 5       // Videoconferencias requieren cámara decente
        } 
    },
    
    travel: { 
        icon: '✈️', 
        weights: { 
            battery: 10,          // Crítico estar sin cargador durante viajes largos
            camera_photo: 9,      // Capturar momentos del viaje es esencial
            connectivity: 8,      // GPS, mapas, comunicación en el extranjero
            design: 8,            // Resistente, portable, no se rompa fácilmente
            screen: 7,            // Mapas, itinerarios, lectura al sol
            software: 7,          // Apps de viaje, mapas offline, traducción
            extras: 8,            // GPS preciso, brújula, altímetro, NFC pagos
            performance: 5,       // No necesita alto rendimiento
            camera_video: 6,      // Capturar videos de lugares visitados
            sound: 3              // No prioritario en viajes
        } 
    },
    
    business: { 
        icon: '💼', 
        weights: { 
            software: 10,         // Aplicaciones empresariales, seguridad, productividad
            battery: 9,           // Reuniones todo el día sin interrupciones
            connectivity: 9,      // Llamadas, emails, internet corporativo críticos
            screen: 8,            // Presentaciones, documentos, lectura prolongada
            performance: 8,       // Multitarea con apps pesadas corporativas
            design: 8,            // Imagen profesional, durabilidad ejecutiva
            extras: 7,            // Sensores biométricos, NFC para pagos
            sound: 7,             // Llamadas profesionales de calidad
            camera_photo: 5,      // Documentos ocasionales, tarjetas de visita
            camera_video: 6       // Videoconferencias profesionales
        } 
    },
    
    fitness: { 
        icon: '🏃', 
        weights: { 
            battery: 9,           // Entrenamientos largos sin perder seguimiento
            design: 9,            // Resistente al agua/sudor, ergonómico durante ejercicio
            connectivity: 8,      // GPS para rutas, sincronización con wearables
            extras: 9,            // Acelerómetro, giroscopio, pulsómetro, barómetro
            software: 7,          // Apps fitness especializadas, métricas avanzadas
            screen: 6,            // Ver métricas durante ejercicio, no crítica resolución
            sound: 5,             // Música durante entrenamiento, no crítico
            performance: 5,       // Apps fitness no son muy demandantes
            camera_photo: 3,      // Fotos de progreso ocasionales
            camera_video: 3       // No prioritario para fitness básico
        } 
    },
    
    vr: { 
        icon: '🕶️', 
        weights: { 
            performance: 10,      // CPU/GPU extremos para renderizado VR fluido
            screen: 10,           // Resolución ultra alta, refresh rate crítico para VR
            sound: 8,             // Audio espacial inmersivo fundamental
            connectivity: 7,      // Para VR en la nube o multiplayer
            extras: 8,            // Giroscopio, acelerómetro precisos para tracking
            software: 7,          // Drivers VR, optimización específica
            battery: 6,           // VR consume mucho pero sesiones suelen ser cortas
            design: 6,            // Disipación calor importante
            camera_photo: 2,      // Irrelevante para VR típico
            camera_video: 3       // Solo para AR/VR híbrido
        } 
    },
    
    xtreme_sport: { 
        icon: '🧗', 
        weights: { 
            design: 10,           // Resistencia extrema a impactos, agua, polvo crítica
            battery: 8,           // Actividades largas sin acceso a carga
            camera_video: 9,      // Capturar acción en movimiento esencial
            extras: 9,            // GPS robusto, altímetro, barómetro, brújula
            connectivity: 6,      // GPS funciona sin data, pero útil para emergencias
            screen: 6,            // Visible bajo sol intenso, no resolución crítica
            performance: 5,       // No necesita alto rendimiento
            software: 6,          // Apps especializadas deportes extremos
            sound: 3,             // No prioritario durante actividad extrema
            camera_photo: 7       // Capturar momentos épicos importantes
        } 
    },
    
    diving: { 
        icon: '🐠', 
        weights: { 
            design: 10,           // Resistencia al agua extrema absolutamente crítica
            extras: 10,           // Presión, profundidad, brújula submarina críticos
            camera_photo: 9,      // Fotografía submarina es uso principal
            camera_video: 9,      // Video submarino igualmente importante
            battery: 8,           // Inmersiones largas sin posibilidad de carga
            screen: 7,            // Visible bajo agua, pero no resolución crítica
            software: 6,          // Apps diving especializadas útiles
            connectivity: 1,      // Completamente inútil bajo el agua
            performance: 3,       // No se necesita alto rendimiento bajo agua
            sound: 1              // Inútil bajo el agua
        } 
    }
};

const priceRanges = [
    { id: 'p1', label: '<200€', min: 0, max: 199.99 },
    { id: 'p2', label: '200-400€', min: 200, max: 400 },
    { id: 'p3', label: '400-600€', min: 400.01, max: 600 },
    { id: 'p4', label: '600-800€', min: 600.01, max: 800 },
    { id: 'p5', label: '800-1000€', min: 800.01, max: 1000 },
    { id: 'p6', label: '>1000€', min: 1000.01, max: Infinity }
];
