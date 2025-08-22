const smartphones = [
  // --- GAMA PREMIUM / BUQUE INSIGNIA ---
  {
    "name": "Samsung Galaxy S24 Ultra",
    "price": 1299,
    "image": "https://placehold.co/300x300/333333/ffffff?text=S24+Ultra",
    "purchase_links": { "Amazon.es": "https://www.amazon.es/s?k=Samsung+Galaxy+S24+Ultra", "PcComponentes": "https://www.pccomponentes.com/buscar?query=Samsung+Galaxy+S24+Ultra" },
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
    "name": "iPhone 15 Pro Max",
    "price": 1399,
    "image": "https://placehold.co/300x300/607B8B/ffffff?text=iPhone+15+Pro+Max",
    "purchase_links": { "Apple Store": "https://www.apple.com/es/shop/buy-iphone/iphone-15-pro", "Amazon.es": "https://www.amazon.es/s?k=iPhone+15+Pro+Max" },
    "details": {
      "battery": { "capacity": 4422, "fast_charge": 27, "energy_consumption": 10, "wireless_charge": true },
      "performance": { "ram": 8, "cpu": 10, "gpu": 10 },
      "design": { "material_score": 10, "water_resistance": 8, "dust_resistance": 8, "drop_resistance": 8 },
      "connectivity": { "nfc": true, "data5g": true, "precision_gps": 10, "wifi_speed": 8, "usb_version": 3.0, "bluetooth_version": 5.3 },
      "audiovisual": { "jack": false, "audio_score": 9, "video_score": 10, "photo_score": 10, "zoom": 8, "ois": true, "eis": true, "pro_video": true },
      "software": { "compatibility": 10, "design": 10, "efficiency": 10, "security": 10, "features": 9, "updates": 10 },
      "extras": { "number_of_extras": 4, "dual_sim": false, "expandable_storage": false, "fingerprint": false, "face_unlock": true, "ir_blaster": false, "stereo_speakers": true },
      "screen": { "color": 10, "size": 6.7, "brightness": 10, "oled": true, "refresh_rate": 120, "hdr": true, "resolution": "2796x1290" }
    }
  },
  {
    "name": "Google Pixel 8 Pro",
    "price": 999,
    "image": "https://placehold.co/300x300/4A90E2/ffffff?text=Pixel+8+Pro",
    "purchase_links": { "Google Store": "https://store.google.com/es/product/pixel_8_pro", "Amazon.es": "https://www.amazon.es/s?k=Google+Pixel+8+Pro" },
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
    "name": "Xiaomi 14 Ultra",
    "price": 1499,
    "image": "https://placehold.co/300x300/757575/ffffff?text=Xiaomi+14+Ultra",
    "purchase_links": { "Amazon.es": "https://www.amazon.es/s?k=Xiaomi+14+Ultra", "PcComponentes": "https://www.pccomponentes.com/buscar?query=Xiaomi+14+Ultra" },
    "details": {
      "battery": { "capacity": 5000, "fast_charge": 90, "energy_consumption": 8, "wireless_charge": true },
      "performance": { "ram": 16, "cpu": 10, "gpu": 10 },
      "design": { "material_score": 9, "water_resistance": 8, "dust_resistance": 8, "drop_resistance": 8 },
      "connectivity": { "nfc": true, "data5g": true, "precision_gps": 10, "wifi_speed": 9, "usb_version": 3.2, "bluetooth_version": 5.4 },
      "audiovisual": { "jack": false, "audio_score": 9, "video_score": 10, "photo_score": 10, "zoom": 9, "ois": true, "eis": true, "pro_video": true },
      "software": { "compatibility": 8, "design": 8, "efficiency": 9, "security": 8, "features": 9, "updates": 7 },
      "extras": { "number_of_extras": 5, "dual_sim": true, "expandable_storage": false, "fingerprint": true, "face_unlock": true, "ir_blaster": true, "stereo_speakers": true },
      "screen": { "color": 10, "size": 6.73, "brightness": 10, "oled": true, "refresh_rate": 120, "hdr": true, "resolution": "3200x1440" }
    }
  },
  {
    "name": "OnePlus 12",
    "price": 949,
    "image": "https://placehold.co/300x300/E62E2D/ffffff?text=OnePlus+12",
    "purchase_links": { "Amazon.es": "https://www.amazon.es/s?k=OnePlus+12", "PcComponentes": "https://www.pccomponentes.com/buscar?query=OnePlus+12" },
    "details": {
      "battery": { "capacity": 5400, "fast_charge": 100, "energy_consumption": 8, "wireless_charge": true },
      "performance": { "ram": 12, "cpu": 10, "gpu": 10 },
      "design": { "material_score": 9, "water_resistance": 7, "dust_resistance": 7, "drop_resistance": 8 },
      "connectivity": { "nfc": true, "data5g": true, "precision_gps": 10, "wifi_speed": 9, "usb_version": 3.2, "bluetooth_version": 5.4 },
      "audiovisual": { "jack": false, "audio_score": 9, "video_score": 9, "photo_score": 9, "zoom": 7, "ois": true, "eis": true, "pro_video": true },
      "software": { "compatibility": 9, "design": 9, "efficiency": 9, "security": 8, "features": 8, "updates": 8 },
      "extras": { "number_of_extras": 4, "dual_sim": true, "expandable_storage": false, "fingerprint": true, "face_unlock": true, "ir_blaster": true, "stereo_speakers": true },
      "screen": { "color": 10, "size": 6.82, "brightness": 10, "oled": true, "refresh_rate": 120, "hdr": true, "resolution": "3168x1440" }
    }
  },

  // --- GAMA ALTA ---
  {
    "name": "Nothing Phone (2)",
    "price": 649,
    "image": "https://placehold.co/300x300/111111/ffffff?text=Nothing+(2)",
    "purchase_links": { "Amazon.es": "https://www.amazon.es/s?k=Nothing+Phone+(2)", "PcComponentes": "https://www.pccomponentes.com/buscar?query=Nothing+Phone+(2)" },
    "details": {
      "battery": { "capacity": 4700, "fast_charge": 45, "energy_consumption": 7, "wireless_charge": true },
      "performance": { "ram": 8, "cpu": 9, "gpu": 8 },
      "design": { "material_score": 9, "water_resistance": 4, "dust_resistance": 5, "drop_resistance": 7 },
      "connectivity": { "nfc": true, "data5g": true, "precision_gps": 9, "wifi_speed": 8, "usb_version": 2.0, "bluetooth_version": 5.3 },
      "audiovisual": { "jack": false, "audio_score": 8, "video_score": 8, "photo_score": 8, "zoom": 2, "ois": true, "eis": true, "pro_video": false },
      "software": { "compatibility": 10, "design": 10, "efficiency": 9, "security": 8, "features": 7, "updates": 8 },
      "extras": { "number_of_extras": 3, "dual_sim": true, "expandable_storage": false, "fingerprint": true, "face_unlock": true, "ir_blaster": false, "stereo_speakers": true },
      "screen": { "color": 9, "size": 6.7, "brightness": 9, "oled": true, "refresh_rate": 120, "hdr": true, "resolution": "2412x1080" }
    }
  },
  {
    "name": "Xiaomi 13T Pro",
    "price": 799,
    "image": "https://placehold.co/300x300/757575/ffffff?text=Xiaomi+13T+Pro",
    "purchase_links": { "Amazon.es": "https://www.amazon.es/s?k=Xiaomi+13T+Pro", "PcComponentes": "https://www.pccomponentes.com/buscar?query=Xiaomi+13T+Pro" },
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
    "name": "Asus ROG Phone 8",
    "price": 1099,
    "image": "https://placehold.co/300x300/222222/ffffff?text=ROG+Phone+8",
    "purchase_links": { "Amazon.es": "https://www.amazon.es/s?k=Asus+ROG+Phone+8", "PcComponentes": "https://www.pccomponentes.com/buscar?query=Asus+ROG+Phone+8" },
    "details": {
      "battery": { "capacity": 5500, "fast_charge": 65, "energy_consumption": 8, "wireless_charge": true },
      "performance": { "ram": 16, "cpu": 10, "gpu": 10 },
      "design": { "material_score": 8, "water_resistance": 8, "dust_resistance": 8, "drop_resistance": 8 },
      "connectivity": { "nfc": true, "data5g": true, "precision_gps": 9, "wifi_speed": 9, "usb_version": 3.1, "bluetooth_version": 5.3 },
      "audiovisual": { "jack": true, "audio_score": 9, "video_score": 8, "photo_score": 8, "zoom": 3, "ois": true, "eis": true, "pro_video": false },
      "software": { "compatibility": 9, "design": 8, "efficiency": 9, "security": 8, "features": 9, "updates": 7 },
      "extras": { "number_of_extras": 6, "dual_sim": true, "expandable_storage": false, "fingerprint": true, "face_unlock": true, "ir_blaster": false, "stereo_speakers": true },
      "screen": { "color": 10, "size": 6.78, "brightness": 10, "oled": true, "refresh_rate": 165, "hdr": true, "resolution": "2400x1080" }
    }
  },

  // --- GAMA MEDIA-ALTA ---
  {
    "name": "Google Pixel 8a",
    "price": 549,
    "image": "https://placehold.co/300x300/4682B4/ffffff?text=Pixel+8a",
    "purchase_links": { "Google Store": "https://store.google.com/es/product/pixel_8a", "Amazon.es": "https://www.amazon.es/s?k=Google+Pixel+8a" },
    "details": {
      "battery": { "capacity": 4492, "fast_charge": 18, "energy_consumption": 8, "wireless_charge": true },
      "performance": { "ram": 8, "cpu": 8, "gpu": 7 },
      "design": { "material_score": 7, "water_resistance": 7, "dust_resistance": 7, "drop_resistance": 6 },
      "connectivity": { "nfc": true, "data5g": true, "precision_gps": 9, "wifi_speed": 8, "usb_version": 3.2, "bluetooth_version": 5.3 },
      "audiovisual": { "jack": false, "audio_score": 8, "video_score": 9, "photo_score": 10, "zoom": 2, "ois": true, "eis": true, "pro_video": false },
      "software": { "compatibility": 10, "design": 9, "efficiency": 10, "security": 10, "features": 10, "updates": 10 },
      "extras": { "number_of_extras": 7, "dual_sim": true, "expandable_storage": false, "fingerprint": true, "face_unlock": true, "ir_blaster": false, "stereo_speakers": true },
      "screen": { "color": 9, "size": 6.1, "brightness": 9, "oled": true, "refresh_rate": 120, "hdr": true, "resolution": "2400x1080" }
    }
  },
  {
    "name": "POCO F6 Pro",
    "price": 579,
    "image": "https://placehold.co/300x300/1C1C1C/ffffff?text=POCO+F6+Pro",
    "purchase_links": { "Amazon.es": "https://www.amazon.es/s?k=POCO+F6+Pro", "PcComponentes": "https://www.pccomponentes.com/buscar?query=POCO+F6+Pro" },
    "details": {
      "battery": { "capacity": 5000, "fast_charge": 120, "energy_consumption": 7, "wireless_charge": false },
      "performance": { "ram": 12, "cpu": 9, "gpu": 9 },
      "design": { "material_score": 8, "water_resistance": 4, "dust_resistance": 5, "drop_resistance": 7 },
      "connectivity": { "nfc": true, "data5g": true, "precision_gps": 8, "wifi_speed": 7, "usb_version": 2.0, "bluetooth_version": 5.3 },
      "audiovisual": { "jack": false, "audio_score": 8, "video_score": 7, "photo_score": 7, "zoom": 2, "ois": true, "eis": true, "pro_video": false },
      "software": { "compatibility": 8, "design": 7, "efficiency": 8, "security": 8, "features": 8, "updates": 7 },
      "extras": { "number_of_extras": 3, "dual_sim": true, "expandable_storage": false, "fingerprint": true, "face_unlock": true, "ir_blaster": true, "stereo_speakers": true },
      "screen": { "color": 9, "size": 6.67, "brightness": 10, "oled": true, "refresh_rate": 120, "hdr": true, "resolution": "3200x1440" }
    }
  },
  {
    "name": "Realme GT 6",
    "price": 699,
    "image": "https://placehold.co/300x300/FFD700/000000?text=Realme+GT+6",
    "purchase_links": { "Amazon.es": "https://www.amazon.es/s?k=Realme+GT+6", "PcComponentes": "https://www.pccomponentes.com/buscar?query=Realme+GT+6" },
    "details": {
      "battery": { "capacity": 5500, "fast_charge": 120, "energy_consumption": 8, "wireless_charge": false },
      "performance": { "ram": 12, "cpu": 9, "gpu": 9 },
      "design": { "material_score": 8, "water_resistance": 7, "dust_resistance": 7, "drop_resistance": 7 },
      "connectivity": { "nfc": true, "data5g": true, "precision_gps": 9, "wifi_speed": 7, "usb_version": 2.0, "bluetooth_version": 5.4 },
      "audiovisual": { "jack": false, "audio_score": 8, "video_score": 8, "photo_score": 8, "zoom": 2, "ois": true, "eis": true, "pro_video": true },
      "software": { "compatibility": 8, "design": 8, "efficiency": 9, "security": 8, "features": 9, "updates": 7 },
      "extras": { "number_of_extras": 3, "dual_sim": true, "expandable_storage": false, "fingerprint": true, "face_unlock": true, "ir_blaster": true, "stereo_speakers": true },
      "screen": { "color": 10, "size": 6.78, "brightness": 10, "oled": true, "refresh_rate": 120, "hdr": true, "resolution": "2780x1264" }
    }
  },
  {
    "name": "Honor 200 Pro",
    "price": 799,
    "image": "https://placehold.co/300x300/00FFFF/000000?text=Honor+200+Pro",
    "purchase_links": { "Amazon.es": "https://www.amazon.es/s?k=Honor+200+Pro", "PcComponentes": "https://www.pccomponentes.com/buscar?query=Honor+200+Pro" },
    "details": {
      "battery": { "capacity": 5200, "fast_charge": 100, "energy_consumption": 7, "wireless_charge": true },
      "performance": { "ram": 12, "cpu": 9, "gpu": 8 },
      "design": { "material_score": 8, "water_resistance": 5, "dust_resistance": 6, "drop_resistance": 7 },
      "connectivity": { "nfc": true, "data5g": true, "precision_gps": 9, "wifi_speed": 8, "usb_version": 2.0, "bluetooth_version": 5.3 },
      "audiovisual": { "jack": false, "audio_score": 8, "video_score": 8, "photo_score": 9, "zoom": 6, "ois": true, "eis": true, "pro_video": false },
      "software": { "compatibility": 8, "design": 9, "efficiency": 8, "security": 8, "features": 8, "updates": 7 },
      "extras": { "number_of_extras": 3, "dual_sim": true, "expandable_storage": false, "fingerprint": true, "face_unlock": true, "ir_blaster": false, "stereo_speakers": true },
      "screen": { "color": 10, "size": 6.78, "brightness": 10, "oled": true, "refresh_rate": 120, "hdr": true, "resolution": "2700x1224" }
    }
  },

  // --- GAMA MEDIA ---
  {
    "name": "Samsung Galaxy A55",
    "price": 429,
    "image": "https://placehold.co/300x300/4A90E2/ffffff?text=Galaxy+A55",
    "purchase_links": { "Amazon.es": "https://www.amazon.es/s?k=Samsung+Galaxy+A55", "PcComponentes": "https://www.pccomponentes.com/buscar?query=Samsung+Galaxy+A55" },
    "details": {
      "battery": { "capacity": 5000, "fast_charge": 25, "energy_consumption": 7, "wireless_charge": false },
      "performance": { "ram": 8, "cpu": 7, "gpu": 6 },
      "design": { "material_score": 8, "water_resistance": 7, "dust_resistance": 7, "drop_resistance": 6 },
      "connectivity": { "nfc": true, "data5g": true, "precision_gps": 8, "wifi_speed": 6, "usb_version": 2.0, "bluetooth_version": 5.3 },
      "audiovisual": { "jack": false, "audio_score": 7, "video_score": 7, "photo_score": 8, "zoom": 2, "ois": true, "eis": true, "pro_video": false },
      "software": { "compatibility": 9, "design": 8, "efficiency": 8, "security": 9, "features": 8, "updates": 9 },
      "extras": { "number_of_extras": 4, "dual_sim": true, "expandable_storage": true, "fingerprint": true, "face_unlock": true, "ir_blaster": false, "stereo_speakers": true },
      "screen": { "color": 9, "size": 6.6, "brightness": 9, "oled": true, "refresh_rate": 120, "hdr": true, "resolution": "2340x1080" }
    }
  },
  {
    "name": "Redmi Note 13 Pro+",
    "price": 449,
    "image": "https://placehold.co/300x300/8E44AD/ffffff?text=Redmi+Note+13+Pro+",
    "purchase_links": { "Amazon.es": "https://www.amazon.es/s?k=Redmi+Note+13+Pro+", "PcComponentes": "https://www.pccomponentes.com/buscar?query=Redmi+Note+13+Pro+" },
    "details": {
      "battery": { "capacity": 5000, "fast_charge": 120, "energy_consumption": 7, "wireless_charge": false },
      "performance": { "ram": 8, "cpu": 8, "gpu": 7 },
      "design": { "material_score": 7, "water_resistance": 8, "dust_resistance": 8, "drop_resistance": 7 },
      "connectivity": { "nfc": true, "data5g": true, "precision_gps": 8, "wifi_speed": 6, "usb_version": 2.0, "bluetooth_version": 5.3 },
      "audiovisual": { "jack": false, "audio_score": 8, "video_score": 7, "photo_score": 8, "zoom": 2, "ois": true, "eis": true, "pro_video": false },
      "software": { "compatibility": 8, "design": 7, "efficiency": 8, "security": 8, "features": 8, "updates": 7 },
      "extras": { "number_of_extras": 4, "dual_sim": true, "expandable_storage": false, "fingerprint": true, "face_unlock": true, "ir_blaster": true, "stereo_speakers": true },
      "screen": { "color": 9, "size": 6.67, "brightness": 9, "oled": true, "refresh_rate": 120, "hdr": true, "resolution": "2712x1220" }
    }
  },
  {
    "name": "POCO X6 Pro",
    "price": 349,
    "image": "https://placehold.co/300x300/F1C40F/000000?text=POCO+X6+Pro",
    "purchase_links": { "Amazon.es": "https://www.amazon.es/s?k=POCO+X6+Pro", "PcComponentes": "https://www.pccomponentes.com/buscar?query=POCO+X6+Pro" },
    "details": {
      "battery": { "capacity": 5000, "fast_charge": 67, "energy_consumption": 7, "wireless_charge": false },
      "performance": { "ram": 8, "cpu": 8, "gpu": 8 },
      "design": { "material_score": 7, "water_resistance": 5, "dust_resistance": 6, "drop_resistance": 6 },
      "connectivity": { "nfc": true, "data5g": true, "precision_gps": 8, "wifi_speed": 6, "usb_version": 2.0, "bluetooth_version": 5.4 },
      "audiovisual": { "jack": false, "audio_score": 8, "video_score": 7, "photo_score": 7, "zoom": 2, "ois": true, "eis": true, "pro_video": false },
      "software": { "compatibility": 8, "design": 7, "efficiency": 8, "security": 7, "features": 7, "updates": 7 },
      "extras": { "number_of_extras": 4, "dual_sim": true, "expandable_storage": false, "fingerprint": true, "face_unlock": true, "ir_blaster": true, "stereo_speakers": true },
      "screen": { "color": 9, "size": 6.67, "brightness": 9, "oled": true, "refresh_rate": 120, "hdr": true, "resolution": "2712x1220" }
    }
  },
  {
    "name": "Motorola Edge 50 Fusion",
    "price": 349,
    "image": "https://placehold.co/300x300/3498DB/ffffff?text=Edge+50+Fusion",
    "purchase_links": { "Amazon.es": "https://www.amazon.es/s?k=Motorola+Edge+50+Fusion", "PcComponentes": "https://www.pccomponentes.com/buscar?query=Motorola+Edge+50+Fusion" },
    "details": {
      "battery": { "capacity": 5000, "fast_charge": 68, "energy_consumption": 7, "wireless_charge": false },
      "performance": { "ram": 8, "cpu": 7, "gpu": 6 },
      "design": { "material_score": 8, "water_resistance": 8, "dust_resistance": 8, "drop_resistance": 7 },
      "connectivity": { "nfc": true, "data5g": true, "precision_gps": 8, "wifi_speed": 6, "usb_version": 2.0, "bluetooth_version": 5.2 },
      "audiovisual": { "jack": false, "audio_score": 8, "video_score": 7, "photo_score": 8, "zoom": 2, "ois": true, "eis": true, "pro_video": false },
      "software": { "compatibility": 9, "design": 9, "efficiency": 8, "security": 8, "features": 7, "updates": 8 },
      "extras": { "number_of_extras": 3, "dual_sim": true, "expandable_storage": false, "fingerprint": true, "face_unlock": true, "ir_blaster": false, "stereo_speakers": true },
      "screen": { "color": 9, "size": 6.7, "brightness": 9, "oled": true, "refresh_rate": 144, "hdr": true, "resolution": "2400x1080" }
    }
  },
  {
    "name": "Nothing Phone (2a)",
    "price": 379,
    "image": "https://placehold.co/300x300/333333/ffffff?text=Nothing+(2a)",
    "purchase_links": { "Amazon.es": "https://www.amazon.es/s?k=Nothing+Phone+(2a)", "PcComponentes": "https://www.pccomponentes.com/buscar?query=Nothing+Phone+(2a)" },
    "details": {
      "battery": { "capacity": 5000, "fast_charge": 45, "energy_consumption": 7, "wireless_charge": false },
      "performance": { "ram": 8, "cpu": 7, "gpu": 6 },
      "design": { "material_score": 7, "water_resistance": 4, "dust_resistance": 5, "drop_resistance": 6 },
      "connectivity": { "nfc": true, "data5g": true, "precision_gps": 8, "wifi_speed": 6, "usb_version": 2.0, "bluetooth_version": 5.3 },
      "audiovisual": { "jack": false, "audio_score": 8, "video_score": 7, "photo_score": 7, "zoom": 2, "ois": true, "eis": true, "pro_video": false },
      "software": { "compatibility": 10, "design": 10, "efficiency": 9, "security": 8, "features": 7, "updates": 8 },
      "extras": { "number_of_extras": 3, "dual_sim": true, "expandable_storage": false, "fingerprint": true, "face_unlock": true, "ir_blaster": false, "stereo_speakers": true },
      "screen": { "color": 9, "size": 6.7, "brightness": 9, "oled": true, "refresh_rate": 120, "hdr": true, "resolution": "2412x1084" }
    }
  },

  // --- GAMA DE ENTRADA / ECONÓMICA ---
  {
    "name": "Xiaomi Redmi Note 13",
    "price": 199,
    "image": "https://placehold.co/300x300/4682B4/ffffff?text=Redmi+Note+13",
    "purchase_links": { "Amazon.es": "https://www.amazon.es/s?k=Xiaomi+Redmi+Note+13", "PcComponentes": "https://www.pccomponentes.com/buscar?query=Xiaomi+Redmi+Note+13" },
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
  },
  {
    "name": "Samsung Galaxy A25",
    "price": 269,
    "image": "https://placehold.co/300x300/9370DB/ffffff?text=Galaxy+A25",
    "purchase_links": { "Amazon.es": "https://www.amazon.es/s?k=Samsung+Galaxy+A25", "PcComponentes": "https://www.pccomponentes.com/buscar?query=Samsung+Galaxy+A25" },
    "details": {
      "battery": { "capacity": 5000, "fast_charge": 25, "energy_consumption": 7, "wireless_charge": false },
      "performance": { "ram": 6, "cpu": 6, "gpu": 5 },
      "design": { "material_score": 6, "water_resistance": 2, "dust_resistance": 3, "drop_resistance": 5 },
      "connectivity": { "nfc": true, "data5g": true, "precision_gps": 8, "wifi_speed": 5, "usb_version": 2.0, "bluetooth_version": 5.3 },
      "audiovisual": { "jack": true, "audio_score": 7, "video_score": 6, "photo_score": 7, "zoom": 1, "ois": true, "eis": true, "pro_video": false },
      "software": { "compatibility": 9, "design": 8, "efficiency": 8, "security": 9, "features": 8, "updates": 9 },
      "extras": { "number_of_extras": 3, "dual_sim": true, "expandable_storage": true, "fingerprint": true, "face_unlock": true, "ir_blaster": false, "stereo_speakers": true },
      "screen": { "color": 8, "size": 6.5, "brightness": 8, "oled": true, "refresh_rate": 120, "hdr": false, "resolution": "2340x1080" }
    }
  },
  {
    "name": "Motorola Moto G84",
    "price": 249,
    "image": "https://placehold.co/300x300/C71585/ffffff?text=Moto+G84",
    "purchase_links": { "Amazon.es": "https://www.amazon.es/s?k=Motorola+Moto+G84", "PcComponentes": "https://www.pccomponentes.com/buscar?query=Motorola+Moto+G84" },
    "details": {
      "battery": { "capacity": 5000, "fast_charge": 30, "energy_consumption": 7, "wireless_charge": false },
      "performance": { "ram": 12, "cpu": 6, "gpu": 5 },
      "design": { "material_score": 7, "water_resistance": 5, "dust_resistance": 6, "drop_resistance": 6 },
      "connectivity": { "nfc": true, "data5g": true, "precision_gps": 8, "wifi_speed": 5, "usb_version": 2.0, "bluetooth_version": 5.1 },
      "audiovisual": { "jack": true, "audio_score": 7, "video_score": 6, "photo_score": 7, "zoom": 1, "ois": true, "eis": true, "pro_video": false },
      "software": { "compatibility": 9, "design": 9, "efficiency": 8, "security": 8, "features": 7, "updates": 8 },
      "extras": { "number_of_extras": 3, "dual_sim": true, "expandable_storage": true, "fingerprint": true, "face_unlock": true, "ir_blaster": false, "stereo_speakers": true },
      "screen": { "color": 9, "size": 6.5, "brightness": 9, "oled": true, "refresh_rate": 120, "hdr": true, "resolution": "2400x1080" }
    }
  },
  {
    "name": "Realme C67",
    "price": 219,
    "image": "https://placehold.co/300x300/2E8B57/ffffff?text=Realme+C67",
    "purchase_links": { "Amazon.es": "https://www.amazon.es/s?k=Realme+C67", "PcComponentes": "https://www.pccomponentes.com/buscar?query=Realme+C67" },
    "details": {
      "battery": { "capacity": 5000, "fast_charge": 33, "energy_consumption": 6, "wireless_charge": false },
      "performance": { "ram": 8, "cpu": 5, "gpu": 4 },
      "design": { "material_score": 6, "water_resistance": 5, "dust_resistance": 6, "drop_resistance": 5 },
      "connectivity": { "nfc": true, "data5g": false, "precision_gps": 7, "wifi_speed": 5, "usb_version": 2.0, "bluetooth_version": 5.0 },
      "audiovisual": { "jack": true, "audio_score": 6, "video_score": 5, "photo_score": 6, "zoom": 1, "ois": false, "eis": true, "pro_video": false },
      "software": { "compatibility": 8, "design": 7, "efficiency": 7, "security": 7, "features": 7, "updates": 6 },
      "extras": { "number_of_extras": 3, "dual_sim": true, "expandable_storage": true, "fingerprint": true, "face_unlock": true, "ir_blaster": false, "stereo_speakers": true },
      "screen": { "color": 7, "size": 6.72, "brightness": 8, "oled": false, "refresh_rate": 90, "hdr": false, "resolution": "2400x1080" }
    }
  },
  {
    "name": "TCL 40 NxtPaper",
    "price": 179,
    "image": "https://placehold.co/300x300/B0E0E6/000000?text=TCL+40+NxtPaper",
    "purchase_links": { "Amazon.es": "https://www.amazon.es/s?k=TCL+40+NxtPaper", "PcComponentes": "https://www.pccomponentes.com/buscar?query=TCL+40+NxtPaper" },
    "details": {
      "battery": { "capacity": 5010, "fast_charge": 33, "energy_consumption": 6, "wireless_charge": false },
      "performance": { "ram": 8, "cpu": 5, "gpu": 4 },
      "design": { "material_score": 6, "water_resistance": 2, "dust_resistance": 3, "drop_resistance": 5 },
      "connectivity": { "nfc": true, "data5g": false, "precision_gps": 7, "wifi_speed": 5, "usb_version": 2.0, "bluetooth_version": 5.1 },
      "audiovisual": { "jack": true, "audio_score": 6, "video_score": 5, "photo_score": 5, "zoom": 1, "ois": false, "eis": false, "pro_video": false },
      "software": { "compatibility": 8, "design": 7, "efficiency": 7, "security": 7, "features": 8, "updates": 6 },
      "extras": { "number_of_extras": 3, "dual_sim": true, "expandable_storage": true, "fingerprint": true, "face_unlock": true, "ir_blaster": false, "stereo_speakers": true },
      "screen": { "color": 6, "size": 6.78, "brightness": 7, "oled": false, "refresh_rate": 90, "hdr": false, "resolution": "2460x1080" }
    }
  },

  // --- MODELOS DE NICHO O ESPECIALES ---
  {
    "name": "Samsung Galaxy Z Fold 5",
    "price": 1799,
    "image": "https://placehold.co/300x300/D4AF37/ffffff?text=Z+Fold+5",
    "purchase_links": { "Amazon.es": "https://www.amazon.es/s?k=Samsung+Galaxy+Z+Fold+5", "PcComponentes": "https://www.pccomponentes.com/buscar?query=Samsung+Galaxy+Z+Fold+5" },
    "details": {
      "battery": { "capacity": 4400, "fast_charge": 25, "energy_consumption": 8, "wireless_charge": true },
      "performance": { "ram": 12, "cpu": 10, "gpu": 10 },
      "design": { "material_score": 10, "water_resistance": 8, "dust_resistance": 6, "drop_resistance": 7 },
      "connectivity": { "nfc": true, "data5g": true, "precision_gps": 10, "wifi_speed": 9, "usb_version": 3.2, "bluetooth_version": 5.3 },
      "audiovisual": { "jack": false, "audio_score": 9, "video_score": 9, "photo_score": 9, "zoom": 7, "ois": true, "eis": true, "pro_video": true },
      "software": { "compatibility": 10, "design": 9, "efficiency": 9, "security": 10, "features": 10, "updates": 10 },
      "extras": { "number_of_extras": 7, "dual_sim": true, "expandable_storage": false, "fingerprint": true, "face_unlock": true, "ir_blaster": false, "stereo_speakers": true },
      "screen": { "color": 10, "size": 7.6, "brightness": 9, "oled": true, "refresh_rate": 120, "hdr": true, "resolution": "2176x1812" }
    }
  },
  {
    "name": "Samsung Galaxy Z Flip 5",
    "price": 1099,
    "image": "https://placehold.co/300x300/B19CD9/ffffff?text=Z+Flip+5",
    "purchase_links": { "Amazon.es": "https://www.amazon.es/s?k=Samsung+Galaxy+Z+Flip+5", "PcComponentes": "https://www.pccomponentes.com/buscar?query=Samsung+Galaxy+Z+Flip+5" },
    "details": {
      "battery": { "capacity": 3700, "fast_charge": 25, "energy_consumption": 7, "wireless_charge": true },
      "performance": { "ram": 8, "cpu": 10, "gpu": 10 },
      "design": { "material_score": 9, "water_resistance": 8, "dust_resistance": 6, "drop_resistance": 7 },
      "connectivity": { "nfc": true, "data5g": true, "precision_gps": 9, "wifi_speed": 8, "usb_version": 2.0, "bluetooth_version": 5.3 },
      "audiovisual": { "jack": false, "audio_score": 8, "video_score": 8, "photo_score": 8, "zoom": 2, "ois": true, "eis": true, "pro_video": false },
      "software": { "compatibility": 10, "design": 10, "efficiency": 9, "security": 10, "features": 9, "updates": 10 },
      "extras": { "number_of_extras": 5, "dual_sim": true, "expandable_storage": false, "fingerprint": true, "face_unlock": true, "ir_blaster": false, "stereo_speakers": true },
      "screen": { "color": 9, "size": 6.7, "brightness": 9, "oled": true, "refresh_rate": 120, "hdr": true, "resolution": "2640x1080" }
    }
  },
  {
    "name": "Fairphone 5",
    "price": 699,
    "image": "https://placehold.co/300x300/008080/ffffff?text=Fairphone+5",
    "purchase_links": { "Amazon.es": "https://www.amazon.es/s?k=Fairphone+5", "PcComponentes": "https://www.pccomponentes.com/buscar?query=Fairphone+5" },
    "details": {
      "battery": { "capacity": 4200, "fast_charge": 30, "energy_consumption": 7, "wireless_charge": false },
      "performance": { "ram": 8, "cpu": 6, "gpu": 5 },
      "design": { "material_score": 10, "water_resistance": 7, "dust_resistance": 7, "drop_resistance": 6 },
      "connectivity": { "nfc": true, "data5g": true, "precision_gps": 8, "wifi_speed": 6, "usb_version": 3.0, "bluetooth_version": 5.2 },
      "audiovisual": { "jack": false, "audio_score": 7, "video_score": 7, "photo_score": 7, "zoom": 2, "ois": true, "eis": true, "pro_video": false },
      "software": { "compatibility": 10, "design": 8, "efficiency": 8, "security": 9, "features": 6, "updates": 10 },
      "extras": { "number_of_extras": 8, "dual_sim": true, "expandable_storage": true, "fingerprint": true, "face_unlock": true, "ir_blaster": false, "stereo_speakers": true },
      "screen": { "color": 8, "size": 6.46, "brightness": 8, "oled": true, "refresh_rate": 90, "hdr": false, "resolution": "2770x1224" }
    }
  },
  {
    "name": "CAT S75",
    "price": 599,
    "image": "https://placehold.co/300x300/FFA500/000000?text=CAT+S75",
    "purchase_links": { "Amazon.es": "https://www.amazon.es/s?k=CAT+S75", "PcComponentes": "https://www.pccomponentes.com/buscar?query=CAT+S75" },
    "details": {
      "battery": { "capacity": 5000, "fast_charge": 15, "energy_consumption": 8, "wireless_charge": true },
      "performance": { "ram": 6, "cpu": 6, "gpu": 5 },
      "design": { "material_score": 8, "water_resistance": 10, "dust_resistance": 10, "drop_resistance": 10 },
      "connectivity": { "nfc": true, "data5g": true, "precision_gps": 9, "wifi_speed": 5, "usb_version": 2.0, "bluetooth_version": 5.1 },
      "audiovisual": { "jack": false, "audio_score": 6, "video_score": 6, "photo_score": 6, "zoom": 1, "ois": false, "eis": false, "pro_video": false },
      "software": { "compatibility": 8, "design": 6, "efficiency": 7, "security": 8, "features": 7, "updates": 7 },
      "extras": { "number_of_extras": 5, "dual_sim": true, "expandable_storage": true, "fingerprint": true, "face_unlock": false, "ir_blaster": false, "stereo_speakers": false },
      "screen": { "color": 7, "size": 6.58, "brightness": 7, "oled": false, "refresh_rate": 120, "hdr": false, "resolution": "2408x1080" }
    }
  }
];

// Línea crucial para que el seeder.js pueda importar los datos
module.exports = smartphones;