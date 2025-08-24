// server.js (adaptado para PostgreSQL y producción en Render)

const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

// IMPORTAMOS NUESTRA LÓGICA Y DATOS
const { useCases, priceRanges } = require('./logic/database.js');
const { calculateRecommendation } = require('./logic/engine.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

// Endpoint antiguo para obtener todos los móviles. Lo mantenemos por si es útil para depurar.
app.get('/api/smartphones', async (req, res) => {
    try {
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


// NUEVO ENDPOINT PARA LAS RECOMENDACIONES
app.get('/api/recommend', async (req, res) => {
    const { uses, priceId } = req.query;

    if (!uses || !priceId) {
        return res.status(400).json({ error: 'Faltan los parámetros "uses" y "priceId"' });
    }

    const selectedUseKeys = uses.split(',');

    try {
        // Obtenemos todos los móviles de la BBDD
        const sqlQuery = `SELECT s.id, s.name, s.price, s.image, b.name AS brand_name, p.name AS processor_name, p.ram, p.cpu_score, p.gpu_score, sc.size, sc.resolution, sc.refresh_rate, sc.brightness, sc.color_score, sc.is_oled, sc.has_hdr, bat.capacity, bat.fast_charge, bat.energy_consumption, bat.has_wireless_charge, d.material_score, d.water_resistance, d.dust_resistance, d.drop_resistance, c.has_nfc, c.has_5g, c.precision_gps, c.wifi_speed, c.usb_version, c.bluetooth_version, a.has_jack, a.audio_score, a.video_score, a.photo_score, a.zoom_level, a.has_ois, a.has_eis, a.has_pro_video, soft.compatibility, soft.design_score, soft.efficiency, soft.security, soft.features, soft.updates FROM smartphones s LEFT JOIN brands b ON s.brand_id = b.id LEFT JOIN processors p ON s.processor_id = p.id LEFT JOIN screens sc ON s.screen_id = sc.id LEFT JOIN batteries bat ON s.battery_id = bat.id LEFT JOIN designs d ON s.design_id = d.id LEFT JOIN connectivities c ON s.connectivity_id = c.id LEFT JOIN audiovisuals a ON s.audiovisual_id = a.id LEFT JOIN softwares soft ON s.software_id = soft.id;`;
        const result = await pool.query(sqlQuery);
        const rows = result.rows;
        const smartphonesFormatted = rows.map(phone => ({ name: phone.name, price: phone.price, image: phone.image, details: { battery: { capacity: phone.capacity, fast_charge: phone.fast_charge, energy_consumption: phone.energy_consumption, wireless_charge: phone.has_wireless_charge }, performance: { ram: phone.ram, cpu: phone.cpu_score, gpu: phone.gpu_score }, design: { material_score: phone.material_score, water_resistance: phone.water_resistance, dust_resistance: phone.dust_resistance, drop_resistance: phone.drop_resistance }, connectivity: { nfc: phone.has_nfc, data5g: phone.has_5g, precision_gps: phone.precision_gps, wifi_speed: phone.wifi_speed, usb_version: phone.usb_version, bluetooth_version: phone.bluetooth_version }, audiovisual: { jack: phone.has_jack, audio_score: phone.audio_score, video_score: phone.video_score, photo_score: phone.photo_score, zoom: phone.zoom_level, ois: phone.has_ois, eis: phone.has_eis, pro_video: phone.has_pro_video }, software: { compatibility: phone.compatibility, design: phone.design_score, efficiency: phone.efficiency, security: phone.security, features: phone.features, updates: phone.updates }, screen: { color: phone.color_score, size: phone.size, brightness: phone.brightness, oled: phone.is_oled, refresh_rate: phone.refresh_rate, hdr: phone.has_hdr, resolution: phone.resolution } } }));
        
        // Ejecutamos el motor de recomendación en el servidor
        const bestPhone = calculateRecommendation(
            selectedUseKeys,
            priceId,
            smartphonesFormatted,
            useCases,
            priceRanges
        );

        // Devolvemos el resultado
        if (bestPhone) {
            res.json(bestPhone);
        } else {
            res.status(404).json({ message: 'No se encontraron resultados' });
        }

    } catch (error) {
        console.error('Error durante la recomendación:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

app.listen(port, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${port}`);
});