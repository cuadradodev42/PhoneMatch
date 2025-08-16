const smartphones = [
  {
    "name": "iPhone 16 Pro Max",
    "price": 1199,
    "image": "https://placehold.co/300x300/000000/ffffff?text=iPhone+16+Pro+Max",
    "details": {
      "battery": {
        "capacity": 4441,
        "fast_charge": 27,
        "energy_concumption": 8,
        "wireless_charge": true
      },
      "performance": {
        "ram": 8,
        "cpu": 10,
        "gpu": 10
      },
      "design": {
        "material_score": 10,
        "water_resistance": 8,
        "dust_resistance": 8,
        "drop_resistance": 9
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 10,
        "wifi_speed": 8,
        "usb_version": 3
      },
      "audiovisual": {
        "jack": false,
        "audio_score": 9,
        "video_score": 10,
        "photo_score": 10,
        "zoom": 5,
        "ois": true,
        "eis": true,
        "pro_video": true
      },
      "software": {
        "compatibility": 10,
        "design": 10,
        "efficiency": 9
      },
      "extras": {
        "number_of_extras": 4,
        "dual_sim": false
      },
      "screen": {
        "color": 10,
        "size": 6.7,
        "brightness": 10,
        "oled": false
      }
    }
  },
  {
    "name": "Samsung Galaxy S24 Ultra",
    "price": 1299,
    "image": "https://placehold.co/300x300/1F2937/ffffff?text=Galaxy+S24+Ultra",
    "details": {
      "battery": {
        "capacity": 5000,
        "fast_charge": 45,
        "energy_concumption": 7,
        "wireless_charge": true
      },
      "performance": {
        "ram": 12,
        "cpu": 10,
        "gpu": 10
      },
      "design": {
        "material_score": 9,
        "water_resistance": 8,
        "dust_resistance": 8,
        "drop_resistance": 8
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 9,
        "wifi_speed": 8,
        "usb_version": 3
      },
      "audiovisual": {
        "jack": false,
        "audio_score": 9,
        "video_score": 10,
        "photo_score": 10,
        "zoom": 10,
        "ois": true,
        "eis": true,
        "pro_video": true
      },
      "software": {
        "compatibility": 9,
        "design": 9,
        "efficiency": 9
      },
      "extras": {
        "number_of_extras": 5,
        "dual_sim": true
      },
      "screen": {
        "color": 10,
        "size": 6.8,
        "brightness": 10,
        "oled": true
      }
    }
  },
  {
    "name": "Google Pixel 9 Pro",
    "price": 999,
    "image": "https://placehold.co/300x300/4285F4/ffffff?text=Pixel+9+Pro",
    "details": {
      "battery": {
        "capacity": 5050,
        "fast_charge": 30,
        "energy_concumption": 8,
        "wireless_charge": true
      },
      "performance": {
        "ram": 12,
        "cpu": 9,
        "gpu": 9
      },
      "design": {
        "material_score": 8,
        "water_resistance": 7,
        "dust_resistance": 7,
        "drop_resistance": 7
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 10,
        "wifi_speed": 8,
        "usb_version": 3
      },
      "audiovisual": {
        "jack": false,
        "audio_score": 8,
        "video_score": 9,
        "photo_score": 10,
        "zoom": 5,
        "ois": true,
        "eis": true,
        "pro_video": true
      },
      "software": {
        "compatibility": 10,
        "design": 9,
        "efficiency": 9
      },
      "extras": {
        "number_of_extras": 3,
        "dual_sim": true
      },
      "screen": {
        "color": 10,
        "size": 6.7,
        "brightness": 9,
        "oled": true
      }
    }
  },
  {
    "name": "OnePlus 12",
    "price": 899,
    "image": "https://placehold.co/300x300/EB0029/ffffff?text=OnePlus+12",
    "details": {
      "battery": {
        "capacity": 5400,
        "fast_charge": 100,
        "energy_concumption": 7,
        "wireless_charge": true
      },
      "performance": {
        "ram": 16,
        "cpu": 9,
        "gpu": 9
      },
      "design": {
        "material_score": 8,
        "water_resistance": 6,
        "dust_resistance": 6,
        "drop_resistance": 7
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 8,
        "wifi_speed": 8,
        "usb_version": 3
      },
      "audiovisual": {
        "jack": false,
        "audio_score": 8,
        "video_score": 9,
        "photo_score": 9,
        "zoom": 3,
        "ois": true,
        "eis": true,
        "pro_video": true
      },
      "software": {
        "compatibility": 8,
        "design": 8,
        "efficiency": 9
      },
      "extras": {
        "number_of_extras": 3,
        "dual_sim": true
      },
      "screen": {
        "color": 9,
        "size": 6.82,
        "brightness": 9,
        "oled": true
      }
    }
  },
  {
    "name": "iPhone 15",
    "price": 699,
    "image": "https://placehold.co/300x300/000000/ffffff?text=iPhone+15",
    "details": {
      "battery": {
        "capacity": 3279,
        "fast_charge": 20,
        "energy_concumption": 8,
        "wireless_charge": true
      },
      "performance": {
        "ram": 6,
        "cpu": 9,
        "gpu": 9
      },
      "design": {
        "material_score": 9,
        "water_resistance": 8,
        "dust_resistance": 8,
        "drop_resistance": 8
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 9,
        "wifi_speed": 7,
        "usb_version": 2
      },
      "audiovisual": {
        "jack": false,
        "audio_score": 8,
        "video_score": 9,
        "photo_score": 9,
        "zoom": 2,
        "ois": true,
        "eis": true,
        "pro_video": false
      },
      "software": {
        "compatibility": 9,
        "design": 9,
        "efficiency": 8
      },
      "extras": {
        "number_of_extras": 3,
        "dual_sim": false
      },
      "screen": {
        "color": 9,
        "size": 6.1,
        "brightness": 9,
        "oled": false
      }
    }
  },
  {
    "name": "Samsung Galaxy A55",
    "price": 450,
    "image": "https://placehold.co/300x300/4A90E2/ffffff?text=Galaxy+A55",
    "details": {
      "battery": {
        "capacity": 5000,
        "fast_charge": 25,
        "energy_concumption": 7,
        "wireless_charge": false
      },
      "performance": {
        "ram": 8,
        "cpu": 7,
        "gpu": 6
      },
      "design": {
        "material_score": 8,
        "water_resistance": 7,
        "dust_resistance": 7,
        "drop_resistance": 6
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 8,
        "wifi_speed": 6,
        "usb_version": 2
      },
      "audiovisual": {
        "jack": false,
        "audio_score": 7,
        "video_score": 7,
        "photo_score": 8,
        "zoom": 2,
        "ois": true,
        "eis": true,
        "pro_video": false
      },
      "software": {
        "compatibility": 9,
        "design": 8,
        "efficiency": 8
      },
      "extras": {
        "number_of_extras": 2,
        "dual_sim": true
      },
      "screen": {
        "color": 9,
        "size": 6.6,
        "brightness": 9,
        "oled": true
      }
    }
  },
  {
    "name": "Xiaomi 14 Ultra",
    "price": 1299,
    "image": "https://placehold.co/300x300/FF6900/ffffff?text=Xiaomi+14+Ultra",
    "details": {
      "battery": {
        "capacity": 5300,
        "fast_charge": 90,
        "energy_concumption": 7,
        "wireless_charge": true
      },
      "performance": {
        "ram": 16,
        "cpu": 9,
        "gpu": 10
      },
      "design": {
        "material_score": 8,
        "water_resistance": 7,
        "dust_resistance": 7,
        "drop_resistance": 7
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 9,
        "wifi_speed": 8,
        "usb_version": 3
      },
      "audiovisual": {
        "jack": false,
        "audio_score": 8,
        "video_score": 9,
        "photo_score": 10,
        "zoom": 5,
        "ois": true,
        "eis": true,
        "pro_video": true
      },
      "software": {
        "compatibility": 8,
        "design": 8,
        "efficiency": 8
      },
      "extras": {
        "number_of_extras": 4,
        "dual_sim": true
      },
      "screen": {
        "color": 10,
        "size": 6.73,
        "brightness": 9,
        "oled": true
      }
    }
  },
  {
    "name": "Nothing Phone 2",
    "price": 599,
    "image": "https://placehold.co/300x300/FFFFFF/000000?text=Nothing+Phone+2",
    "details": {
      "battery": {
        "capacity": 4700,
        "fast_charge": 45,
        "energy_concumption": 8,
        "wireless_charge": true
      },
      "performance": {
        "ram": 12,
        "cpu": 8,
        "gpu": 8
      },
      "design": {
        "material_score": 9,
        "water_resistance": 6,
        "dust_resistance": 6,
        "drop_resistance": 7
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 8,
        "wifi_speed": 7,
        "usb_version": 3
      },
      "audiovisual": {
        "jack": false,
        "audio_score": 8,
        "video_score": 8,
        "photo_score": 8,
        "zoom": 2,
        "ois": true,
        "eis": true,
        "pro_video": false
      },
      "software": {
        "compatibility": 9,
        "design": 9,
        "efficiency": 8
      },
      "extras": {
        "number_of_extras": 4,
        "dual_sim": true
      },
      "screen": {
        "color": 8,
        "size": 6.7,
        "brightness": 8,
        "oled": true
      }
    }
  },
  {
    "name": "Poco F6 Pro",
    "price": 499,
    "image": "https://placehold.co/300x300/FFFF00/000000?text=Poco+F6+Pro",
    "details": {
      "battery": {
        "capacity": 5000,
        "fast_charge": 120,
        "energy_concumption": 6,
        "wireless_charge": true
      },
      "performance": {
        "ram": 12,
        "cpu": 8,
        "gpu": 9
      },
      "design": {
        "material_score": 7,
        "water_resistance": 6,
        "dust_resistance": 6,
        "drop_resistance": 6
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 8,
        "wifi_speed": 7,
        "usb_version": 3
      },
      "audiovisual": {
        "jack": false,
        "audio_score": 7,
        "video_score": 8,
        "photo_score": 8,
        "zoom": 2,
        "ois": true,
        "eis": true,
        "pro_video": false
      },
      "software": {
        "compatibility": 8,
        "design": 7,
        "efficiency": 8
      },
      "extras": {
        "number_of_extras": 3,
        "dual_sim": true
      },
      "screen": {
        "color": 8,
        "size": 6.67,
        "brightness": 8,
        "oled": true
      }
    }
  },
  {
    "name": "iPhone SE 2024",
    "price": 429,
    "image": "https://placehold.co/300x300/000000/ffffff?text=iPhone+SE+2024",
    "details": {
      "battery": {
        "capacity": 2018,
        "fast_charge": 20,
        "energy_concumption": 9,
        "wireless_charge": false
      },
      "performance": {
        "ram": 4,
        "cpu": 8,
        "gpu": 8
      },
      "design": {
        "material_score": 8,
        "water_resistance": 8,
        "dust_resistance": 7,
        "drop_resistance": 7
      },
      "connectivity": {
        "nfc": true,
        "data5g": false,
        "precision_gps": 8,
        "wifi_speed": 6,
        "usb_version": 2
      },
      "audiovisual": {
        "jack": false,
        "audio_score": 7,
        "video_score": 7,
        "photo_score": 7,
        "zoom": 1,
        "ois": false,
        "eis": false,
        "pro_video": false
      },
      "software": {
        "compatibility": 9,
        "design": 8,
        "efficiency": 8
      },
      "extras": {
        "number_of_extras": 1,
        "dual_sim": false
      },
      "screen": {
        "color": 8,
        "size": 4.7,
        "brightness": 7,
        "oled": false
      }
    }
  }
]