// seeder.js
// Este script lee los datos de smartphones.js y los inserta de forma inteligente
// en la base de datos relacional de MySQL.

const mysql = require('mysql2/promise');
const smartphones = require('./smartphones.js'); // Importamos los datos

// --- CONFIGURACIÓN DE LA BASE DE DATOS ---
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'phonemath'
};

// Función auxiliar para insertar un componente si no existe y devolver su ID.
// Esta es la clave de la automatización.
async function getOrInsert(connection, tableName, data, uniqueColumns) {
    // Construir la cláusula WHERE para buscar si ya existe
    const whereClauses = uniqueColumns.map(col => `${col} = ?`).join(' AND ');
    const whereValues = uniqueColumns.map(col => data[col]);

    // 1. Buscar si ya existe
    let [rows] = await connection.execute(`SELECT id FROM ${tableName} WHERE ${whereClauses}`, whereValues);
    
    if (rows.length > 0) {
        // Ya existe, devolvemos su ID
        return rows[0].id;
    } else {
        // No existe, lo insertamos
        const columns = Object.keys(data).join(', ');
        const placeholders = Object.keys(data).map(() => '?').join(', ');
        const values = Object.values(data);
        
        const [result] = await connection.execute(`INSERT INTO ${tableName} (${columns}) VALUES (${placeholders})`, values);
        // Devolvemos el ID del nuevo registro insertado
        return result.insertId;
    }
}

// --- FUNCIÓN PRINCIPAL DEL SCRIPT ---
async function seedDatabase() {
    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        console.log('✅ Conexión a la base de datos establecida.');

        // Usamos una transacción para asegurar que todo se inserte correctamente
        await connection.beginTransaction();

        for (const phone of smartphones) {
            console.log(`\nProcessing: ${phone.name}...`);
            const details = phone.details;

            // 1. Insertar componentes y obtener sus IDs
            const brandId = await getOrInsert(connection, 'brands', { name: phone.name.split(' ')[0] }, ['name']);
            
            const processorId = await getOrInsert(connection, 'processors', { name: `${phone.name} Processor`, ram: details.performance.ram, cpu_score: details.performance.cpu, gpu_score: details.performance.gpu }, ['name']);
            
            const screenId = await getOrInsert(connection, 'screens', { size: details.screen.size, resolution: details.screen.resolution, refresh_rate: details.screen.refresh_rate, brightness: details.screen.brightness, color_score: details.screen.color, is_oled: details.screen.oled, has_hdr: details.screen.hdr }, ['resolution', 'size']);

            const batteryId = await getOrInsert(connection, 'batteries', { capacity: details.battery.capacity, fast_charge: details.battery.fast_charge, energy_consumption: details.battery.energy_concumption || details.battery.energy_consumption, has_wireless_charge: details.battery.wireless_charge }, ['capacity', 'fast_charge']);
            
            const designId = await getOrInsert(connection, 'designs', { material_score: details.design.material_score, water_resistance: details.design.water_resistance, dust_resistance: details.design.dust_resistance, drop_resistance: details.design.drop_resistance }, ['material_score', 'water_resistance']);

            const connectivityId = await getOrInsert(connection, 'connectivities', { has_nfc: details.connectivity.nfc, has_5g: details.connectivity.data5g, precision_gps: details.connectivity.precision_gps, wifi_speed: details.connectivity.wifi_speed, usb_version: details.connectivity.usb_version, bluetooth_version: details.connectivity.bluetooth_version }, ['bluetooth_version', 'usb_version']);

            const audiovisualId = await getOrInsert(connection, 'audiovisuals', { has_jack: details.audiovisual.jack, audio_score: details.audiovisual.audio_score, video_score: details.audiovisual.video_score, photo_score: details.audiovisual.photo_score, zoom_level: details.audiovisual.zoom, has_ois: details.audiovisual.ois, has_eis: details.audiovisual.eis, has_pro_video: details.audiovisual.pro_video }, ['photo_score', 'video_score', 'audio_score']);
            
            const softwareId = await getOrInsert(connection, 'softwares', { compatibility: details.software.compatibility, design_score: details.software.design, efficiency: details.software.efficiency, security: details.software.security, features: details.software.features, updates: details.software.updates }, ['compatibility', 'efficiency']);

            // 2. Insertar el smartphone principal con las claves foráneas
            const smartphoneData = {
                name: phone.name,
                price: phone.price,
                image: phone.image,
                brand_id: brandId,
                processor_id: processorId,
                screen_id: screenId,
                battery_id: batteryId,
                design_id: designId,
                connectivity_id: connectivityId,
                audiovisual_id: audiovisualId,
                software_id: softwareId
            };
            const smartphoneId = await getOrInsert(connection, 'smartphones', smartphoneData, ['name']);

            // 3. Insertar las relaciones en la tabla de unión smartphone_extras
            for (const extraName in details.extras) {
                if (extraName !== 'number_of_extras' && details.extras[extraName] === true) {
                    const extraId = await getOrInsert(connection, 'extras', { name: extraName }, ['name']);
                    await connection.execute('INSERT IGNORE INTO smartphone_extras (smartphone_id, extra_id) VALUES (?, ?)', [smartphoneId, extraId]);
                }
            }
            console.log(`✅ ${phone.name} insertado/actualizado correctamente.`);
        }

        // Si todo ha ido bien, guardamos los cambios
        await connection.commit();
        console.log('\n🎉 ¡Proceso completado! Todos los smartphones han sido añadidos a la base de datos.');

    } catch (error) {
        console.error('❌ Error durante el proceso de siembra:', error);
        // Si algo falla, deshacemos todos los cambios de esta ejecución
        if (connection) await connection.rollback();
    } finally {
        // Cerramos la conexión
        if (connection) await connection.end();
    }
}

// Ejecutar el script
seedDatabase();
