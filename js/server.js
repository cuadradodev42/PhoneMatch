// server.js - Tu nuevo backend

const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const port = 3000;

// Habilitar CORS para permitir peticiones desde tu frontend
app.use(cors());

// Configuración de la conexión a la base de datos (la misma que en tu seeder)
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'phonemath'
};

// Crear el "endpoint" de la API para obtener los móviles
app.get('/api/smartphones', async (req, res) => {
    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);

        // Consulta SQL para unir todas las tablas y obtener los datos
        const [rows] = await connection.execute(`
            SELECT 
                s.name, s.price, s.image,
                b.name AS brand_name,
                p.*, sc.*, bat.*, d.*, c.*, a.*, soft.*
            FROM smartphones s
            LEFT JOIN brands b ON s.brand_id = b.id
            LEFT JOIN processors p ON s.processor_id = p.id
            LEFT JOIN screens sc ON s.screen_id = sc.id
            LEFT JOIN batteries bat ON s.battery_id = bat.id
            LEFT JOIN designs d ON s.design_id = d.id
            LEFT JOIN connectivities c ON s.connectivity_id = c.id
            LEFT JOIN audiovisuals a ON s.audiovisual_id = a.id
            LEFT JOIN softwares soft ON s.software_id = soft.id
        `);

        // Reconstruir el objeto 'details' para que el frontend no tenga que cambiar
        const smartphonesFormatted = rows.map(phone => {
            return {
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
            };
        });

        res.json(smartphonesFormatted);

    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    } finally {
        if (connection) await connection.end();
    }
});

app.listen(port, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
    console.log('Ahora puedes abrir tu archivo index.html en el navegador.');
});