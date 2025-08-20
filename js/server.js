// server.js (adaptado para PostgreSQL)

const express = require('express');
const { Pool } = require('pg'); // Importamos el Pool de pg
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Configuración de la conexión a PostgreSQL
// Usa el usuario y contraseña que creaste durante la instalación
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'phonematch',
    password: '1234', // <-- ¡CAMBIA ESTO!
    port: 5432, // Puerto por defecto de PostgreSQL
});

app.get('/api/smartphones', async (req, res) => {
    try {
        // La consulta SQL es prácticamente idéntica
        const sqlQuery = `
            SELECT 
                s.id, s.name, s.price, s.image,
                b.name AS brand_name,
                p.name AS processor_name, p.ram, p.cpu_score, p.gpu_score,
                sc.size, sc.resolution, sc.refresh_rate, sc.brightness, sc.color_score, sc.is_oled, sc.has_hdr,
                bat.capacity, bat.fast_charge, bat.energy_consumption, bat.has_wireless_charge,
                d.material_score, d.water_resistance, d.dust_resistance, d.drop_resistance,
                c.has_nfc, c.has_5g, c.precision_gps, c.wifi_speed, c.usb_version, c.bluetooth_version,
                a.has_jack, a.audio_score, a.video_score, a.photo_score, a.zoom_level, a.has_ois, a.has_eis, a.has_pro_video,
                soft.compatibility, soft.design_score, soft.efficiency, soft.security, soft.features, soft.updates
            FROM smartphones s
            LEFT JOIN brands b ON s.brand_id = b.id
            LEFT JOIN processors p ON s.processor_id = p.id
            LEFT JOIN screens sc ON s.screen_id = sc.id
            LEFT JOIN batteries bat ON s.battery_id = bat.id
            LEFT JOIN designs d ON s.design_id = d.id
            LEFT JOIN connectivities c ON s.connectivity_id = c.id
            LEFT JOIN audiovisuals a ON s.audiovisual_id = a.id
            LEFT JOIN softwares soft ON s.software_id = soft.id;
        `;
        
        const result = await pool.query(sqlQuery);
        const rows = result.rows;

        // Reconstruir el objeto 'details' para que el frontend no tenga que cambiar
        const smartphonesFormatted = rows.map(phone => ({
            name: phone.name,
            price: phone.price,
            image: phone.image,
            details: {
                battery: { capacity: phone.capacity, fast_charge: phone.fast_charge, energy_consumption: phone.energy_consumption, wireless_charge: phone.has_wireless_charge },
                performance: { ram: phone.ram, cpu: phone.cpu_score, gpu: phone.gpu_score },
                design: { material_score: phone.material_score, water_resistance: phone.water_resistance, dust_resistance: phone.dust_resistance, drop_resistance: phone.drop_resistance },
                connectivity: { nfc: phone.has_nfc, data5g: phone.has_5g, precision_gps: phone.precision_gps, wifi_speed: phone.wifi_speed, usb_version: phone.usb_version, bluetooth_version: phone.bluetooth_version },
                audiovisual: { jack: phone.has_jack, audio_score: phone.audio_score, video_score: phone.video_score, photo_score: phone.photo_score, zoom: phone.zoom_level, ois: phone.has_ois, eis: phone.has_eis, pro_video: phone.has_pro_video },
                software: { compatibility: phone.compatibility, design: phone.design_score, efficiency: phone.efficiency, security: phone.security, features: phone.features, updates: phone.updates },
                screen: { color: phone.color_score, size: phone.size, brightness: phone.brightness, oled: phone.is_oled, refresh_rate: phone.refresh_rate, hdr: phone.has_hdr, resolution: phone.resolution }
            }
        }));

        res.json(smartphonesFormatted);
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

app.listen(port, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
/*
```

### Flujo de Trabajo Final

1.  **Ejecuta el script `.sql`** en pgAdmin para crear las tablas.
2.  **Adapta y ejecuta tu `seeder.js`** para PostgreSQL si quieres cargar los datos automáticamente (requerirá cambios similares a los del `server.js`).
3.  **Arranca tu servidor:** `node server.js`.
4.  **Abre tu `index.html`** en el navegador.

¡Listo! Ahora tu aplicación está funcionando localmente con PostgreSQL, exactamente igual que lo hará en Rend
*/