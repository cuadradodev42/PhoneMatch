// seeder.js
// Este script lee los datos de smartphones.js y los inserta de forma inteligente
// en la base de datos relacional de PostgreSQL, adaptado para Render.

const { Pool } = require('pg');
const smartphones = require('./smartphones.js'); // Importamos los datos locales

// --- CONFIGURACIÓN DE LA BASE DE DATOS PARA RENDER ---

// Comprobamos si la variable de entorno DATABASE_URL existe.
if (!process.env.DATABASE_URL) {
    console.error('❌ Error: La variable de entorno DATABASE_URL no está definida.');
    console.error('Asegúrate de que estás ejecutando este script en un entorno donde esta variable esté configurada (como la shell de Render).');
    process.exit(1); // Detiene la ejecución si no hay URL de conexión.
}

const pool = new Pool({
    // Lee la URL de conexión directamente de las variables de entorno de Render.
    connectionString: process.env.DATABASE_URL,
    // Render requiere una conexión SSL.
    ssl: {
        rejectUnauthorized: false
    }
});

/**
 * Función auxiliar para insertar un componente si no existe y devolver su ID.
 */
async function getOrInsert(client, tableName, data, uniqueColumns) {
    const whereClauses = uniqueColumns.map((col, index) => `"${col}" = $${index + 1}`).join(' AND ');
    const whereValues = uniqueColumns.map(col => data[col]);

    const findRes = await client.query(`SELECT id FROM ${tableName} WHERE ${whereClauses}`, whereValues);

    if (findRes.rows.length > 0) {
        return findRes.rows[0].id;
    } else {
        const columns = Object.keys(data).map(c => `"${c}"`).join(', ');
        const valuePlaceholders = Object.keys(data).map((_, index) => `$${index + 1}`).join(', ');
        const values = Object.values(data);
        
        const insertRes = await client.query(`INSERT INTO ${tableName} (${columns}) VALUES (${valuePlaceholders}) RETURNING id`, values);
        return insertRes.rows[0].id;
    }
}

// --- FUNCIÓN PRINCIPAL DEL SCRIPT ---
async function seedDatabase() {
    const client = await pool.connect();
    try {
        console.log('✅ Conexión a la base de datos de Render establecida.');

        await client.query('BEGIN');

        for (const phone of smartphones) {
            console.log(`\n🔄 Procesando: ${phone.name}...`);
            const d = phone.details;

            // 1. Insertar componentes y obtener sus IDs
            const brandName = phone.name.split(' ')[0];
            const brandId = await getOrInsert(client, 'brands', { name: brandName }, ['name']);
            
            const processorId = await getOrInsert(client, 'processors', { name: `${phone.name} Processor`, ram: d.performance.ram, cpu_score: d.performance.cpu, gpu_score: d.performance.gpu }, ['name']);
            
            const screenId = await getOrInsert(client, 'screens', { size: d.screen.size, resolution: d.screen.resolution, refresh_rate: d.screen.refresh_rate, brightness: d.screen.brightness, color_score: d.screen.color, is_oled: d.screen.oled, has_hdr: d.screen.hdr }, ['resolution', 'size']);

            const batteryId = await getOrInsert(client, 'batteries', { capacity: d.battery.capacity, fast_charge: d.battery.fast_charge, energy_consumption: d.battery.energy_concumption || d.battery.energy_consumption, has_wireless_charge: d.battery.wireless_charge }, ['capacity', 'fast_charge']);
            
            const designId = await getOrInsert(client, 'designs', { material_score: d.design.material_score, water_resistance: d.design.water_resistance, dust_resistance: d.design.dust_resistance, drop_resistance: d.design.drop_resistance }, ['material_score', 'water_resistance']);

            const connectivityId = await getOrInsert(client, 'connectivities', { has_nfc: d.connectivity.nfc, has_5g: d.connectivity.data5g, precision_gps: d.connectivity.precision_gps, wifi_speed: d.connectivity.wifi_speed, usb_version: d.connectivity.usb_version, bluetooth_version: d.connectivity.bluetooth_version }, ['bluetooth_version', 'usb_version']);

            const audiovisualId = await getOrInsert(client, 'audiovisuals', { has_jack: d.audiovisual.jack, audio_score: d.audiovisual.audio_score, video_score: d.audiovisual.video_score, photo_score: d.audiovisual.photo_score, zoom_level: d.audiovisual.zoom, has_ois: d.audiovisual.ois, has_eis: d.audiovisual.eis, has_pro_video: d.audiovisual.pro_video }, ['photo_score', 'video_score', 'audio_score']);
            
            const softwareId = await getOrInsert(client, 'softwares', { compatibility: d.software.compatibility, design_score: d.software.design, efficiency: d.software.efficiency, security: d.software.security, features: d.software.features, updates: d.software.updates }, ['compatibility', 'efficiency']);

            // 2. Insertar el smartphone principal
            const smartphoneData = { name: phone.name, price: phone.price, image: phone.image, brand_id: brandId, processor_id: processorId, screen_id: screenId, battery_id: batteryId, design_id: designId, connectivity_id: connectivityId, audiovisual_id: audiovisualId, software_id: softwareId };
            const smartphoneId = await getOrInsert(client, 'smartphones', smartphoneData, ['name']);

            // 3. Insertar las relaciones en la tabla de unión smartphone_extras
            for (const extraName in d.extras) {
                if (extraName !== 'number_of_extras' && d.extras[extraName] === true) {
                    const extraId = await getOrInsert(client, 'extras', { name: extraName }, ['name']);
                    await client.query('INSERT INTO smartphone_extras (smartphone_id, extra_id) VALUES ($1, $2) ON CONFLICT DO NOTHING', [smartphoneId, extraId]);
                }
            }

            // 4. --- NUEVO: Insertar los enlaces de compra ---
            if (phone.purchase_links) {
                for (const storeName in phone.purchase_links) {
                    const url = phone.purchase_links[storeName];
                    const linkData = {
                        smartphone_id: smartphoneId,
                        store_name: storeName,
                        url: url
                    };
                    // Insertamos el enlace, si ya existe no hacemos nada gracias a ON CONFLICT
                    await client.query('INSERT INTO purchase_links (smartphone_id, store_name, url) VALUES ($1, $2, $3) ON CONFLICT (smartphone_id, store_name) DO NOTHING', [linkData.smartphone_id, linkData.store_name, linkData.url]);
                }
            }

            console.log(`✔️ ${phone.name} insertado/actualizado correctamente.`);
        }

        await client.query('COMMIT');
        console.log('\n🎉 ¡Proceso completado! Todos los smartphones han sido añadidos a la base de datos.');

    } catch (error) {
        console.error('❌ Error durante el proceso de siembra:', error);
        await client.query('ROLLBACK');
    } finally {
        client.release();
        pool.end();
        console.log('🔚 Conexión a la base de datos cerrada.');
    }
}

// Ejecutar el script
seedDatabase();
