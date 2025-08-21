const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 10000;

// --- CONFIGURACIÓN DE CORS ---
app.use(cors());

// --- CONFIGURACIÓN DE LA BASE DE DATOS ---
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

// --- ENDPOINTS DE LA API ---

// Endpoint raíz para comprobar si el servidor está vivo
app.get('/', (req, res) => {
    res.send('El backend de PhoneMath está funcionando correctamente!');
});

// Endpoint para obtener todos los smartphones
app.get('/api/smartphones', async (req, res) => {
    try {
        console.log("-> Petición recibida en /api/smartphones");

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
                soft.compatibility, soft.design_score, soft.efficiency, soft.security, soft.features, soft.updates,
                (
                    SELECT jsonb_object_agg(pl.store_name, pl.url)
                    FROM purchase_links pl
                    WHERE pl.smartphone_id = s.id
                ) as purchase_links
            FROM smartphones s
            LEFT JOIN brands b ON s.brand_id = b.id
            LEFT JOIN processors p ON s.processor_id = p.id
            LEFT JOIN screens sc ON s.screen_id = sc.id
            LEFT JOIN batteries bat ON s.battery_id = bat.id
            LEFT JOIN designs d ON s.design_id = d.id
            LEFT JOIN connectivities c ON s.connectivity_id = c.id
            LEFT JOIN audiovisuals a ON s.audiovisual_id = a.id
            LEFT JOIN softwares soft ON s.software_id = soft.id
            GROUP BY s.id, b.name, p.name, p.ram, p.cpu_score, p.gpu_score, sc.id, bat.id, d.id, c.id, a.id, soft.id;
        `;
        
        const result = await pool.query(sqlQuery);
        const rows = result.rows;

        console.log(`--> La consulta a la base de datos ha devuelto ${rows.length} filas.`);

        if (rows.length === 0) {
            console.warn("!!! ADVERTENCIA: La base de datos no ha devuelto ningún smartphone. ¿Se ejecutó el seeder.js correctamente?");
        }

        // Reconstrucción del objeto 'details' de forma defensiva
        const smartphonesFormatted = rows.map(phone => {
            return {
                name: phone.name,
                price: phone.price,
                image: phone.image,
                purchase_links: phone.purchase_links || {},
                details: {
                    battery: { capacity: phone.capacity || 0, fast_charge: phone.fast_charge || 0, energy_consumption: phone.energy_consumption || 0, wireless_charge: phone.has_wireless_charge || false },
                    performance: { ram: phone.ram || 0, cpu: phone.cpu_score || 0, gpu: phone.gpu_score || 0 },
                    design: { material_score: phone.material_score || 0, water_resistance: phone.water_resistance || 0, dust_resistance: phone.dust_resistance || 0, drop_resistance: phone.drop_resistance || 0 },
                    connectivity: { nfc: phone.has_nfc || false, data5g: phone.has_5g || false, precision_gps: phone.precision_gps || 0, wifi_speed: phone.wifi_speed || 0, usb_version: phone.usb_version || 0, bluetooth_version: phone.bluetooth_version || 0 },
                    audiovisual: { jack: phone.has_jack || false, audio_score: phone.audio_score || 0, video_score: phone.video_score || 0, photo_score: phone.photo_score || 0, zoom: phone.zoom_level || 0, ois: phone.has_ois || false, eis: phone.has_eis || false, pro_video: phone.has_pro_video || false },
                    software: { compatibility: phone.compatibility || 0, design: phone.design_score || 0, efficiency: phone.efficiency || 0, security: phone.security || 0, features: phone.features || 0, updates: phone.updates || 0 },
                    screen: { color: phone.color_score || 0, size: phone.size || 0, brightness: phone.brightness || 0, oled: phone.is_oled || false, refresh_rate: phone.refresh_rate || 0, hdr: phone.has_hdr || false, resolution: phone.resolution || 'N/A' }
                }
            };
        });

        console.log(`<-- Enviando ${smartphonesFormatted.length} smartphones al frontend.`);
        res.json(smartphonesFormatted);
    } catch (error) {
        console.error('💥 ERROR en el endpoint /api/smartphones:', error);
        res.status(500).json({ error: 'Error interno del servidor', details: error.message });
    }
});

app.listen(port, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${port}`);
});