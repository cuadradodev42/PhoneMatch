-- =================================================================
-- Script de Creación de Tablas para PostgreSQL
-- Base de Datos: `phonemath`
-- Versión: 1.1
-- Este script crea la estructura relacional completa compatible
-- con el seeder.js y los datos de smartphones.js.
-- =================================================================

-- NOTA: La creación de la base de datos se debe hacer manualmente en pgAdmin.
-- Este script asume que ya has creado la base de datos 'phonemath' y estás conectado a ella.


-- Eliminar tablas existentes en el orden correcto para una instalación limpia
DROP TABLE IF EXISTS smartphone_extras;
DROP TABLE IF EXISTS smartphones;
DROP TABLE IF EXISTS brands;
DROP TABLE IF EXISTS processors;
DROP TABLE IF EXISTS screens;
DROP TABLE IF EXISTS batteries;
DROP TABLE IF EXISTS designs;
DROP TABLE IF EXISTS connectivities;
DROP TABLE IF EXISTS audiovisuals;
DROP TABLE IF EXISTS softwares;
DROP TABLE IF EXISTS extras;

-- -----------------------------------------------------
-- Tabla: brands
-- -----------------------------------------------------
CREATE TABLE brands (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE
);

-- -----------------------------------------------------
-- Tabla: processors
-- -----------------------------------------------------
CREATE TABLE processors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  ram INT NOT NULL,
  cpu_score INT NOT NULL,
  gpu_score INT NOT NULL
);

-- -----------------------------------------------------
-- Tabla: screens
-- -----------------------------------------------------
CREATE TABLE screens (
  id SERIAL PRIMARY KEY,
  size DECIMAL(3,2) NOT NULL,
  resolution VARCHAR(50) NOT NULL,
  refresh_rate INT NOT NULL,
  brightness INT NOT NULL,
  color_score INT NOT NULL,
  is_oled BOOLEAN NOT NULL,
  has_hdr BOOLEAN NOT NULL
);

-- -----------------------------------------------------
-- Tabla: batteries
-- -----------------------------------------------------
CREATE TABLE batteries (
  id SERIAL PRIMARY KEY,
  capacity INT NOT NULL,
  fast_charge INT NOT NULL,
  energy_consumption INT NOT NULL,
  has_wireless_charge BOOLEAN NOT NULL
);

-- -----------------------------------------------------
-- Tabla: designs
-- -----------------------------------------------------
CREATE TABLE designs (
  id SERIAL PRIMARY KEY,
  material_score INT NOT NULL,
  water_resistance INT NOT NULL,
  dust_resistance INT NOT NULL,
  drop_resistance INT NOT NULL
);

-- -----------------------------------------------------
-- Tabla: connectivities
-- -----------------------------------------------------
CREATE TABLE connectivities (
  id SERIAL PRIMARY KEY,
  has_nfc BOOLEAN NOT NULL,
  has_5g BOOLEAN NOT NULL,
  precision_gps INT NOT NULL,
  wifi_speed INT NOT NULL,
  usb_version DECIMAL(2,1) NOT NULL,
  bluetooth_version DECIMAL(2,1) NOT NULL
);

-- -----------------------------------------------------
-- Tabla: audiovisuals
-- -----------------------------------------------------
CREATE TABLE audiovisuals (
  id SERIAL PRIMARY KEY,
  has_jack BOOLEAN NOT NULL,
  audio_score INT NOT NULL,
  video_score INT NOT NULL,
  photo_score INT NOT NULL,
  zoom_level INT NOT NULL,
  has_ois BOOLEAN NOT NULL,
  has_eis BOOLEAN NOT NULL,
  has_pro_video BOOLEAN NOT NULL
);

-- -----------------------------------------------------
-- Tabla: softwares
-- -----------------------------------------------------
CREATE TABLE softwares (
  id SERIAL PRIMARY KEY,
  compatibility INT NOT NULL,
  design_score INT NOT NULL,
  efficiency INT NOT NULL,
  security INT NOT NULL,
  features INT NOT NULL,
  updates INT NOT NULL
);

-- -----------------------------------------------------
-- Tabla: extras
-- -----------------------------------------------------
CREATE TABLE extras (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE
);

-- -----------------------------------------------------
-- Tabla Principal: smartphones
-- -----------------------------------------------------
CREATE TABLE smartphones (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  price INT NOT NULL,
  image VARCHAR(255),
  brand_id INT REFERENCES brands(id) ON DELETE SET NULL,
  processor_id INT REFERENCES processors(id) ON DELETE SET NULL,
  screen_id INT REFERENCES screens(id) ON DELETE SET NULL,
  battery_id INT REFERENCES batteries(id) ON DELETE SET NULL,
  design_id INT REFERENCES designs(id) ON DELETE SET NULL,
  connectivity_id INT REFERENCES connectivities(id) ON DELETE SET NULL,
  audiovisual_id INT REFERENCES audiovisuals(id) ON DELETE SET NULL,
  software_id INT REFERENCES softwares(id) ON DELETE SET NULL
);

-- -----------------------------------------------------
-- Tabla de Unión (Muchos a Muchos): smartphone_extras
-- -----------------------------------------------------
CREATE TABLE smartphone_extras (
  smartphone_id INT NOT NULL REFERENCES smartphones(id) ON DELETE CASCADE,
  extra_id INT NOT NULL REFERENCES extras(id) ON DELETE CASCADE,
  PRIMARY KEY (smartphone_id, extra_id)
);

-- -----------------------------------------------------
-- INSERCIÓN DE DATOS INICIALES (EJEMPLO)
-- Esto pre-carga los tipos de 'extras' que el seeder buscará.
-- -----------------------------------------------------
INSERT INTO extras (name) VALUES 
('dual_sim'), ('expandable_storage'), ('fingerprint'), 
('face_unlock'), ('ir_blaster'), ('stereo_speakers')
ON CONFLICT (name) DO NOTHING;


-- --- Mensaje de finalización ---
-- (Este es un comentario, pero si lo ejecutas en pgAdmin, sabrás que todo ha terminado)
-- SCRIPT COMPLETADO: La estructura de la base de datos 'phonemath' ha sido creada.
-- Ya puedes ejecutar el script 'seeder.js' para poblar las tablas.
