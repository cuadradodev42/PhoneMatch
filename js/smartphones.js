const smartphones = [
  {
    "name": "Samsung Galaxy S24 Ultra",
    "price": 1299,
    "image": "https://placehold.co/300x300/333333/ffffff?text=S24+Ultra",
    "purchase_links": {
        "Amazon.es": "https://www.amazon.es/s?k=Samsung+Galaxy+S24+Ultra",
        "PcComponentes": "https://www.pccomponentes.com/buscar?query=Samsung+Galaxy+S24+Ultra"
    },
    "details": {
      "battery": { "capacity": 5000, "fast_charge": 45, "energy_consumption": 9, "wireless_charge": true },
      "performance": { "ram": 12, "cpu": 10, "gpu": 10 },
      "design": { "material_score": 10, "water_resistance": 8, "dust_resistance": 8, "drop_resistance": 9 },
      "connectivity": { "nfc": true, "data5g": true, "precision_gps": 10, "wifi_speed": 9, "usb_version": 3.2, "bluetooth_version": 5.3 },
      "audiovisual": { "jack": false, "audio_score": 9, "video_score": 10, "photo_score": 10, "zoom": 10, "ois": true, "eis": true, "pro_video": true },
      "software": { "compatibility": 10, "design": 9, "efficiency": 9, "security": 10, "features": 10, "updates": 10 },
      "extras": { "number_of_extras": 5, "dual_sim": true, "expandable_storage": false, "fingerprint": true, "face_unlock": true, "ir_blaster": false, "stereo_speakers": true },
      "screen": { "color": 10, "size": 6.8, "brightness": 10, "oled": true, "refresh_rate": 120, "hdr": true, "resolution": "3120x1440" }
    }
  },
  {
    "name": "Google Pixel 8 Pro",
    "price": 999,
    "image": "https://placehold.co/300x300/4A90E2/ffffff?text=Pixel+8+Pro",
    "purchase_links": {
        "Amazon.es": "https://www.amazon.es/s?k=Google+Pixel+8+Pro",
        "Google Store": "https://store.google.com/es/product/pixel_8_pro"
    },
    "details": {
      "battery": { "capacity": 5050, "fast_charge": 30, "energy_consumption": 8, "wireless_charge": true },
      "performance": { "ram": 12, "cpu": 9, "gpu": 8 },
      "design": { "material_score": 9, "water_resistance": 8, "dust_resistance": 8, "drop_resistance": 8 },
      "connectivity": { "nfc": true, "data5g": true, "precision_gps": 9, "wifi_speed": 8, "usb_version": 3.2, "bluetooth_version": 5.3 },
      "audiovisual": { "jack": false, "audio_score": 8, "video_score": 9, "photo_score": 10, "zoom": 8, "ois": true, "eis": true, "pro_video": true },
      "software": { "compatibility": 10, "design": 10, "efficiency": 10, "security": 10, "features": 10, "updates": 10 },
      "extras": { "number_of_extras": 6, "dual_sim": true, "expandable_storage": false, "fingerprint": true, "face_unlock": true, "ir_blaster": false, "stereo_speakers": true },
      "screen": { "color": 10, "size": 6.7, "brightness": 10, "oled": true, "refresh_rate": 120, "hdr": true, "resolution": "2992x1344" }
    }
  },
  {
    "name": "Xiaomi 13T Pro",
    "price": 799,
    "image": "https://placehold.co/300x300/757575/ffffff?text=Xiaomi+13T+Pro",
    "purchase_links": {
        "Amazon.es": "https://www.amazon.es/s?k=Xiaomi+13T+Pro",
        "PcComponentes": "https://www.pccomponentes.com/buscar?query=Xiaomi+13T+Pro"
    },
    "details": {
      "battery": { "capacity": 5000, "fast_charge": 120, "energy_consumption": 7, "wireless_charge": false },
      "performance": { "ram": 12, "cpu": 9, "gpu": 9 },
      "design": { "material_score": 8, "water_resistance": 8, "dust_resistance": 8, "drop_resistance": 7 },
      "connectivity": { "nfc": true, "data5g": true, "precision_gps": 9, "wifi_speed": 8, "usb_version": 2.0, "bluetooth_version": 5.4 },
      "audiovisual": { "jack": false, "audio_score": 8, "video_score": 8, "photo_score": 9, "zoom": 5, "ois": true, "eis": true, "pro_video": true },
      "software": { "compatibility": 8, "design": 8, "efficiency": 8, "security": 8, "features": 8, "updates": 7 },
      "extras": { "number_of_extras": 4, "dual_sim": true, "expandable_storage": false, "fingerprint": true, "face_unlock": true, "ir_blaster": true, "stereo_speakers": true },
      "screen": { "color": 9, "size": 6.67, "brightness": 10, "oled": true, "refresh_rate": 144, "hdr": true, "resolution": "2712x1220" }
    }
  },
  {
    "name": "Samsung Galaxy A54",
    "price": 399,
    "image": "https://placehold.co/300x300/9370DB/ffffff?text=Galaxy+A54",
    "purchase_links": {
        "Amazon.es": "https://www.amazon.es/s?k=Samsung+Galaxy+A54",
        "PcComponentes": "https://www.pccomponentes.com/buscar?query=Samsung+Galaxy+A54"
    },
    "details": {
      "battery": { "capacity": 5000, "fast_charge": 25, "energy_consumption": 7, "wireless_charge": false },
      "performance": { "ram": 8, "cpu": 7, "gpu": 6 },
      "design": { "material_score": 7, "water_resistance": 8, "dust_resistance": 8, "drop_resistance": 6 },
      "connectivity": { "nfc": true, "data5g": true, "precision_gps": 8, "wifi_speed": 6, "usb_version": 2.0, "bluetooth_version": 5.3 },
      "audiovisual": { "jack": false, "audio_score": 7, "video_score": 7, "photo_score": 8, "zoom": 2, "ois": true, "eis": true, "pro_video": false },
      "software": { "compatibility": 9, "design": 8, "efficiency": 8, "security": 9, "features": 8, "updates": 9 },
      "extras": { "number_of_extras": 4, "dual_sim": true, "expandable_storage": true, "fingerprint": true, "face_unlock": true, "ir_blaster": false, "stereo_speakers": true },
      "screen": { "color": 9, "size": 6.4, "brightness": 8, "oled": true, "refresh_rate": 120, "hdr": true, "resolution": "2340x1080" }
    }
  },
  {
    "name": "Xiaomi Redmi Note 13",
    "price": 199,
    "image": "https://placehold.co/300x300/4682B4/ffffff?text=Redmi+Note+13",
    "purchase_links": {
        "Amazon.es": "https://www.amazon.es/s?k=Xiaomi+Redmi+Note+13",
        "PcComponentes": "https://www.pccomponentes.com/buscar?query=Xiaomi+Redmi+Note+13"
    },
    "details": {
      "battery": { "capacity": 5000, "fast_charge": 33, "energy_consumption": 6, "wireless_charge": false },
      "performance": { "ram": 6, "cpu": 5, "gpu": 4 },
      "design": { "material_score": 6, "water_resistance": 4, "dust_resistance": 5, "drop_resistance": 5 },
      "connectivity": { "nfc": true, "data5g": false, "precision_gps": 7, "wifi_speed": 5, "usb_version": 2.0, "bluetooth_version": 5.1 },
      "audiovisual": { "jack": true, "audio_score": 6, "video_score": 5, "photo_score": 6, "zoom": 1, "ois": false, "eis": true, "pro_video": false },
      "software": { "compatibility": 8, "design": 7, "efficiency": 7, "security": 7, "features": 7, "updates": 6 },
      "extras": { "number_of_extras": 4, "dual_sim": true, "expandable_storage": true, "fingerprint": true, "face_unlock": true, "ir_blaster": true, "stereo_speakers": true },
      "screen": { "color": 8, "size": 6.67, "brightness": 8, "oled": true, "refresh_rate": 120, "hdr": false, "resolution": "2400x1080" }
    }
  }
];

// Línea crucial para que el seeder.js pueda importar los datos
module.exports = smartphones;