// seeder.js
// Este script lee los datos de smartphones.js y los inserta de forma inteligente
// en la base de datos relacional de PostgreSQL.

const { Pool } = require('pg');
const smartphones = require('./smartphones.js'); // Importamos los datos

// --- CONFIGURACIÓN DE LA BASE DE DATOS ---
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'phonematch',
    password: '1234', // <-- ¡CAMBIA ESTO!
    port: 5432,
});

/**
 * Función auxiliar para insertar un componente si no existe y devolver su ID.
 * Esta es la clave de la automatización.
 * @param {object} client - El cliente de la base de datos.
 * @param {string} tableName - El nombre de la tabla.
 * @param {object} data - El objeto con los datos a insertar.
 * @param {Array<string>} uniqueColumns - Las columnas que definen si un registro es único.
 * @returns {Promise<number>} - El ID del registro (existente o nuevo).
 */
async function getOrInsert(client, tableName, data, uniqueColumns) {
    // Construir la cláusula WHERE para buscar si ya existe
    const whereClauses = uniqueColumns.map((col, index) => `"${col}" = $${index + 1}`).join(' AND ');
    const whereValues = uniqueColumns.map(col => data[col]);

    // 1. Buscar si ya existe
    const findRes = await client.query(`SELECT id FROM ${tableName} WHERE ${whereClauses}`, whereValues);

    if (findRes.rows.length > 0) {
        // Ya existe, devolvemos su ID
        return findRes.rows[0].id;
    } else {
        // No existe, lo insertamos
        const columns = Object.keys(data).map(c => `"${c}"`).join(', ');
        const valuePlaceholders = Object.keys(data).map((_, index) => `$${index + 1}`).join(', ');
        const values = Object.values(data);
        
        const insertRes = await client.query(`INSERT INTO ${tableName} (${columns}) VALUES (${valuePlaceholders}) RETURNING id`, values);
        // Devolvemos el ID del nuevo registro insertado
        return insertRes.rows[0].id;
    }
}

// --- FUNCIÓN PRINCIPAL DEL SCRIPT ---
async function seedDatabase() {
    const client = await pool.connect();
    try {
        console.log('✅ Conexión a la base de datos establecida.');

        // Usamos una transacción para asegurar que todo se inserte correctamente
        await client.query('BEGIN');

        for (const phone of smartphones) {
            console.log(`\n🔄 Procesando: ${phone.name}...`);
            const d = phone.details;

            // 1. Insertar componentes y obtener sus IDs
            const brandId = await getOrInsert(client, 'brands', { name: phone.name.split(' ')[0] }, ['name']);
            
            const processorId = await getOrInsert(client, 'processors', { name: `${phone.name} Processor`, ram: d.performance.ram, cpu_score: d.performance.cpu, gpu_score: d.performance.gpu }, ['name']);
            
            const screenId = await getOrInsert(client, 'screens', { size: d.screen.size, resolution: d.screen.resolution, refresh_rate: d.screen.refresh_rate, brightness: d.screen.brightness, color_score: d.screen.color, is_oled: d.screen.oled, has_hdr: d.screen.hdr }, ['resolution', 'size']);

            const batteryId = await getOrInsert(client, 'batteries', { capacity: d.battery.capacity, fast_charge: d.battery.fast_charge, energy_consumption: d.battery.energy_concumption || d.battery.energy_consumption, has_wireless_charge: d.battery.wireless_charge }, ['capacity', 'fast_charge']);
            
            const designId = await getOrInsert(client, 'designs', { material_score: d.design.material_score, water_resistance: d.design.water_resistance, dust_resistance: d.design.dust_resistance, drop_resistance: d.design.drop_resistance }, ['material_score', 'water_resistance']);

            const connectivityId = await getOrInsert(client, 'connectivities', { has_nfc: d.connectivity.nfc, has_5g: d.connectivity.data5g, precision_gps: d.connectivity.precision_gps, wifi_speed: d.connectivity.wifi_speed, usb_version: d.connectivity.usb_version, bluetooth_version: d.connectivity.bluetooth_version }, ['bluetooth_version', 'usb_version']);

            const audiovisualId = await getOrInsert(client, 'audiovisuals', { has_jack: d.audiovisual.jack, audio_score: d.audiovisual.audio_score, video_score: d.audiovisual.video_score, photo_score: d.audiovisual.photo_score, zoom_level: d.audiovisual.zoom, has_ois: d.audiovisual.ois, has_eis: d.audiovisual.eis, has_pro_video: d.audiovisual.pro_video }, ['photo_score', 'video_score', 'audio_score']);
            
            const softwareId = await getOrInsert(client, 'softwares', { compatibility: d.software.compatibility, design_score: d.software.design, efficiency: d.software.efficiency, security: d.software.security, features: d.software.features, updates: d.software.updates }, ['compatibility', 'efficiency']);

            // 2. Insertar el smartphone principal (si no existe)
            const smartphoneData = { name: phone.name, price: phone.price, image: phone.image, brand_id: brandId, processor_id: processorId, screen_id: screenId, battery_id: batteryId, design_id: designId, connectivity_id: connectivityId, audiovisual_id: audiovisualId, software_id: softwareId };
            const smartphoneId = await getOrInsert(client, 'smartphones', smartphoneData, ['name']);

            // 3. Insertar las relaciones en la tabla de unión smartphone_extras
            for (const extraName in d.extras) {
                if (extraName !== 'number_of_extras' && d.extras[extraName] === true) {
                    const extraId = await getOrInsert(client, 'extras', { name: extraName }, ['name']);
                    // Usamos ON CONFLICT DO NOTHING para evitar errores si la relación ya existe
                    await client.query('INSERT INTO smartphone_extras (smartphone_id, extra_id) VALUES ($1, $2) ON CONFLICT DO NOTHING', [smartphoneId, extraId]);
                }
            }
            console.log(`✔️ ${phone.name} insertado/actualizado correctamente.`);
        }

        // Si todo ha ido bien, guardamos los cambios
        await client.query('COMMIT');
        console.log('\n🎉 ¡Proceso completado! Todos los smartphones han sido añadidos a la base de datos.');

    } catch (error) {
        console.error('❌ Error durante el proceso de siembra:', error);
        // Si algo falla, deshacemos todos los cambios de esta ejecución
        await client.query('ROLLBACK');
    } finally {
        // Cerramos la conexión
        client.release();
        pool.end();
        console.log('🔚 Conexión a la base de datos cerrada.');
    }
}

// Ejecutar el script
seedDatabase();