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
        "usb_version": 3,
        "bluetooth_version": 5.3
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
        "efficiency": 9,
        "security": 9,
        "features": 9,
        "updates": 10,

      },
      "extras": {
        "number_of_extras": 4,
        "dual_sim": false,
        "expandable_storage": false,
        "fingerprint": false,
        "face_unlock": true,
        "ir_blaster": false,
        "stereo_speakers": true
      },
      "screen": {
        "color": 10,
        "size": 6.7,
        "brightness": 10,
        "oled": false,
        "refresh_rate": 120,
        "hdr": true,
        "resolution": "2796x1290",
      }
    }
  },
  {
    "name": "Samsung Galaxy S23 Ultra",
    "price": 1399,
    "image": "https://placehold.co/300x300/000000/ffffff?text=Samsung+Galaxy+S23+Ultra",
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
        "drop_resistance": 9
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 10,
        "wifi_speed": 9,
        "usb_version": 3.2,
        "bluetooth_version": 5.3
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
        "compatibility": 10,
        "design": 10,
        "efficiency": 9,
        "security": 9,
        "features": 9,
        "updates": 10
      },
      "extras": {
        "number_of_extras": 5,
        "dual_sim": false,
        "expandable_storage": true,
        "fingerprint": true,
        "face_unlock": true,
        "ir_blaster": false,
        "stereo_speakers": true
      },
      "screen": {
        "color": 10,
        "size": 6.8,
        "brightness": 10,
        "oled": true,
        "refresh_rate": 120,
        "hdr": true,
        "resolution":"3088x1440"
      }
    }
  },
  {
    "name": "Google Pixel 8 Pro",
    "price": 999,
    "image": "https://placehold.co/300x300/000000/ffffff?text=Google+Pixel+8+Pro",
    "details": {
      "battery": {
        "capacity": 5050,
        "fast_charge": 30,
        "energy_concumption": 7,
        "wireless_charge": true
      },
      "performance": {
        "ram": 12,
        "cpu": 9,
        "gpu": 9
      },
      "design": {
        "material_score": 8,
        "water_resistance": 8,
        "dust_resistance": 7,
        "drop_resistance": 8
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 10,
        "wifi_speed": 8,
        "usb_version": 3.2,
        "bluetooth_version": 5.2
      },
      "audiovisual": {
        "jack": false,
        "audio_score": 8,
        "video_score": 9,
        "photo_score": 10,
        "zoom": 6,
        "ois": true,
        "eis": true,
        "pro_video": true
      },
      "software": {
        "compatibility": 10,
        "design": 10,
        "efficiency": 9,
        "security": 10,
        "features": 9,
        "updates": 10
      },
      "extras": {
        "number_of_extras": 4,
        "dual_sim": false,
        "expandable_storage": false,
        "fingerprint": true,
        "face_unlock": true,
        "ir_blaster": false,
        "stereo_speakers": true
      },
      "screen":{
          'color':10, 'size':6.7, 'brightness':10, 'oled':true, 'refresh_rate':120, 'hdr':true, 'resolution':'3120x1440'
      }
    }
  },
  {
    "name": "OnePlus 11",
    "price": 799,
    "image": "https://placehold.co/300x300/000000/ffffff?text=OnePlus+11",
    "details": {
      "battery": {
        "capacity": 5000,
        "fast_charge": 100,
        "energy_concumption": 6,
        "wireless_charge": true
      },
      "performance": {
        "ram": 8,
        "cpu": 9,
        "gpu": 9
      },
      "design": {
        "material_score": 8,
        "water_resistance": 7,
        "dust_resistance": 7,
        "drop_resistance": 8
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 9,
        "wifi_speed": 8,
        "usb_version": 3.1,
        "bluetooth_version": 5.2
      },
      "audiovisual": {
        "jack": false,
        "audio_score": 8,
        "video_score": 9,
        "photo_score": 9,
        "zoom": 5,
        "ois": true,
        "eis": true,
        "pro_video": false
      },
      "software": {
        "compatibility": 9,
        "design": 9,
        "efficiency": 8,
        "security": 8,
        "features": 8,
        "updates": 8
      },
      "extras":{
          'number_of_extras':3, 'dual_sim':true, 'expandable_storage':false, 'fingerprint':true, 'face_unlock':true, 'ir_blaster':false, 'stereo_speakers':true
      },
      'screen':{
          'color':10, 'size':6.7, 'brightness':10, 'oled':true, 'refresh_rate':120, 'hdr':true, 'resolution':'3216x1440'
      }
    }
  },
  {
    "name": "Xiaomi 13 Pro",
    "price": 1099,
    "image": "https://placehold.co/300x300/000000/ffffff?text=Xiaomi+13+Pro",
    "details": {
      "battery": {
        "capacity": 4820,
        "fast_charge": 120,
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
        "drop_resistance": 9
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 10,
        "wifi_speed": 9,
        "usb_version": 3.2,
        "bluetooth_version": 5.3
      },
      "audiovisual": {
        "jack": false,
        "audio_score": 9,
        "video_score": 10,
        "photo_score": 10,
        "zoom": 6,
        "ois": true,
        "eis": true,
        "pro_video": true
      },
      "software":{
          'compatibility':10, 'design':10, 'efficiency':9, 'security':9, 'features':9, 'updates':10
      },
      'extras':{
          'number_of_extras':4, 'dual_sim':false, 'expandable_storage':false, 'fingerprint':true, 'face_unlock':true, 'ir_blaster':false, 'stereo_speakers':true
      },
      'screen':{
          'color':10, 'size':6.73, 'brightness':10, 'oled':true, 'refresh_rate':120, 'hdr':true, 'resolution':'3200x1440'
      }
    }
  },
  {
    "name": "Sony Xperia 1 V",
    "price": 1299,
    "image": "https://placehold.co/300x300/000000/ffffff?text=Sony+Xperia+1+V",
    "details": {
      "battery": {
        "capacity": 5000,
        "fast_charge": 30,
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
        "drop_resistance": 9
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 10,
        "wifi_speed": 9,
        "usb_version": 3.2,
        "bluetooth_version": 5.3
      },
      "audiovisual": {
        "jack": true,
        "audio_score": 10,
        "video_score": 10,
        "photo_score": 10,
        "zoom": 6,
        "ois": true,
        "eis": true,
        "pro_video": true
      },
      "software":{
          'compatibility':9, 'design':9, 'efficiency':8, 'security':8, 'features':8, 'updates':8
      },
      'extras':{
          'number_of_extras':4, 'dual_sim':false, 'expandable_storage':true, 'fingerprint':true, 'face_unlock':true, 'ir_blaster':false, 'stereo_speakers':true
      },
      'screen':{
          'color':10, 'size':6.5, 'brightness':10, 'oled':true, 'refresh_rate':120, 'hdr':true, 'resolution':'3840x1644'
      }
    }
  },
  {
    "name": "Oppo Find X6 Pro",
    "price": 1099,
    "image": "https://placehold.co/300x300/000000/ffffff?text=Oppo+Find+X6+Pro",
    "details": {
      "battery": {
        "capacity": 5000,
        "fast_charge": 100,
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
        "drop_resistance": 9
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 10,
        "wifi_speed": 9,
        "usb_version": 3.2,
        "bluetooth_version": 5.3
      },
      "audiovisual": {
        "jack": false,
        "audio_score": 9,
        "video_score": 10,
        "photo_score": 10,
        "zoom": 6,
        "ois": true,
        "eis": true,
        "pro_video": true
      },
      "software":{
          'compatibility':10, 'design':10, 'efficiency':9, 'security':9, 'features':9, 'updates':10
      },
      'extras':{
          'number_of_extras':4, 'dual_sim':false, 'expandable_storage':true, 'fingerprint':true, 'face_unlock':true, 'ir_blaster':false, 'stereo_speakers':true
      },
      'screen':{
          'color':10, 'size':6.82, 'brightness':10, 'oled':true, 'refresh_rate':120, 'hdr':true, 'resolution':'3168x1440'
      }
    }
  },
  {
    "name": "Vivo X90 Pro",
    "price": 999,
    "image": "https://placehold.co/300x300/000000/ffffff?text=Vivo+X90+Pro",
    "details": {
      "battery": {
        "capacity": 4870,
        "fast_charge": 120,
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
        "drop_resistance": 9
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 10,
        "wifi_speed": 9,
        "usb_version": 3.2,
        "bluetooth_version": 5.3
      },
      "audiovisual": {
        "jack": false,
        "audio_score": 9,
        "video_score": 10,
        "photo_score": 10,
        "zoom": 6,
        "ois": true,
        "eis": true,
        "pro_video": true
      },
      "software":{
          'compatibility':10, 'design':10, 'efficiency':9, 'security':9, 'features':9, 'updates':10
      },
      'extras':{
          'number_of_extras':4, 'dual_sim':false, 'expandable_storage':true, 'fingerprint':true, 'face_unlock':true, 'ir_blaster':false, 'stereo_speakers':true
      },
      'screen':{
          'color':10, 'size':6.78, 'brightness':10, 'oled':true, 'refresh_rate':120, 'hdr':true, 'resolution':'3200x1440'
      }
    }
  },
  {
    "name": "Asus ROG Phone 7",
    "price": 999,
    "image": "https://placehold.co/300x300/000000/ffffff?text=Asus+ROG+Phone+7",
    "details": {
      "battery": {
        "capacity": 6000,
        "fast_charge": 65,
        "energy_concumption": 6,
        "wireless_charge": true
      },
      "performance": {
        "ram": 16,
        "cpu": 10,
        "gpu": 10
      },
      "design": {
        "material_score": 8,
        "water_resistance": 7,
        "dust_resistance": 7,
        "drop_resistance": 8
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 9,
        "wifi_speed": 9,
        "usb_version": 3.2,
        "bluetooth_version": 5.3
      },
      "audiovisual": {
        "jack": true,
        "audio_score": 9,
        "video_score": 9,
        "photo_score": 8,
        "zoom": 5,
        "ois": false,
        "eis": true,
        "pro_video": false
      },
      "software":{
          'compatibility':9, 'design':9, 'efficiency':8, 'security':8, 'features':8, 'updates':8
      },
      'extras':{
          'number_of_extras':5, 'dual_sim':true, 'expandable_storage':false, 'fingerprint':true, 'face_unlock':true, 'ir_blaster':false, 'stereo_speakers':true
      },
      'screen':{
          'color':10, 'size':6.78, 'brightness':10, 'oled':true, 'refresh_rate':165, 'hdr':true, 'resolution':'2448x1080'
      }
    }
  },
  {
    "name": "Realme GT 2 Pro",
    "price": 749,
    "image": "https://placehold.co/300x300/000000/ffffff?text=Realme+GT+2+Pro",
    "details": {
      "battery": {
        "capacity": 5000,
        "fast_charge": 65,
        "energy_concumption": 7,
        "wireless_charge": true
      },
      "performance": {
        "ram": 8,
        "cpu": 9,
        "gpu": 9
      },
      "design": {
        "material_score": 8,
        "water_resistance": 7,
        "dust_resistance": 7,
        "drop_resistance": 8
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 9,
        "wifi_speed": 8,
        "usb_version": 3.1,
        "bluetooth_version": 5.2
      },
      "audiovisual": {
        "jack": false,
        "audio_score": 8,
        "video_score": 9,
        "photo_score": 9,
        "zoom": 5,
        "ois": true,
        "eis": true,
        "pro_video": false
      },
      "software":{
          'compatibility':9, 'design':9, 'efficiency':8, 'security':8, 'features':8, 'updates':8
      },
      'extras':{
          'number_of_extras':3, 'dual_sim':true, 'expandable_storage':false, 'fingerprint':true, 'face_unlock':true, 'ir_blaster':false, 'stereo_speakers':true
      },
      'screen':{
          'color':10, 'size':6.7, 'brightness':10, 'oled':true, 'refresh_rate':120, 'hdr':true, 'resolution':'3216x1440'
      }
    }
  },
  {
    "name": "Motorola Edge 40 Pro",
    "price": 899,
    "image": "https://placehold.co/300x300/000000/ffffff?text=Motorola+Edge+40+Pro",
    "details": {
      "battery": {
        "capacity": 4600,
        "fast_charge": 125,
        "energy_concumption": 7,
        "wireless_charge": true
      },
      "performance": {
        "ram": 12,
        "cpu": 10,
        "gpu": 10
      },
      "design": {
        "material_score": 8,
        "water_resistance": 7,
        "dust_resistance": 7,
        "drop_resistance": 8
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 9,
        "wifi_speed": 9,
        "usb_version": 3.2,
        "bluetooth_version": 5.3
      },
      "audiovisual": {
        "jack": false,
        "audio_score": 8,
        "video_score": 9,
        "photo_score": 9,
        "zoom": 5,
        "ois": true,
        "eis": true,
        "pro_video": false
      },
      "software":{
          'compatibility':9, 'design':9, 'efficiency':8, 'security':8, 'features':8, 'updates':8
      },
      'extras':{
          'number_of_extras':4, 'dual_sim':true, 'expandable_storage':false, 'fingerprint':true, 'face_unlock':true, 'ir_blaster':false, 'stereo_speakers':true
      },
      'screen':{
          'color':10, 'size':6.67, 'brightness':10, 'oled':true, 'refresh_rate':165, 'hdr':true, 'resolution':'2400x1080'
      }
    }
  },
  {
    "name": "Huawei Mate 60 Pro",
    "price": 1099,
    "image": "https://placehold.co/300x300/000000/ffffff?text=Huawei+Mate+60+Pro",
    "details": {
      "battery": {
        "capacity": 5000,
        "fast_charge": 88,
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
        "drop_resistance": 9
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 10,
        "wifi_speed": 9,
        "usb_version": 3.2,
        "bluetooth_version": 5.3
      },
      "audiovisual": {
        "jack": false,
        "audio_score": 9,
        "video_score": 10,
        "photo_score": 10,
        "zoom": 6,
        "ois": true,
        "eis": true,
        "pro_video": true
      },
      "software":{
          'compatibility':10, 'design':10, 'efficiency':9, 'security':9, 'features':9, 'updates':10
      },
      'extras':{
          'number_of_extras':4, 'dual_sim':false, 'expandable_storage':false, 'fingerprint':true, 'face_unlock':true, 'ir_blaster':false, 'stereo_speakers':true
      },
      'screen':{
          'color':10, 'size':6.82, 'brightness':10, 'oled':true, 'refresh_rate':120, 'hdr':true, 'resolution':'2720x1260'
      }
    }
  },
  {
    "name": "Nokia XR21",
    "price": 599,
    "image": "https://placehold.co/300x300/000000/ffffff?text=Nokia+XR21",
    "details": {
      "battery": {
        "capacity": 4800,
        "fast_charge": 33,
        "energy_concumption": 7,
        "wireless_charge": false
      },
      "performance": {
        "ram": 6,
        "cpu": 8,
        "gpu": 8
      },
      "design": {
        "material_score": 7,
        "water_resistance": 9,
        "dust_resistance": 9,
        "drop_resistance": 9
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 9,
        "wifi_speed": 8,
        "usb_version": 3.1,
        "bluetooth_version": 5.2
      },
      "audiovisual": {
        "jack": true,
        "audio_score": 7,
        "video_score": 8,
        "photo_score": 8,
        "zoom": 4,
        "ois": false,
        "eis": true,
        "pro_video": false
      },
      "software":{
          'compatibility':9, 'design':9, 'efficiency':8, 'security':8, 'features':8, 'updates':8
      },
      'extras':{
          'number_of_extras':3, 'dual_sim':true, 'expandable_storage':false, 'fingerprint':true, 'face_unlock':true, 'ir_blaster':false, 'stereo_speakers':true
      },
      'screen':{
          'color':10, 'size':6.49, 'brightness':10, 'oled':true, 'refresh_rate':120, 'hdr':true, 'resolution':'2400x1080'
      }
    }
  },
  {
    "name": "Tecno Phantom X2 Pro",
    "price": 799,
    "image": "https://placehold.co/300x300/000000/ffffff?text=Tecno+Phantom+X2+Pro",
    "details": {
      "battery": {
        "capacity": 5160,
        "fast_charge": 45,
        "energy_concumption": 7,
        "wireless_charge": true
      },
      "performance": {
        "ram": 8,
        "cpu": 9,
        "gpu": 9
      },
      "design": {
        "material_score": 8,
        "water_resistance": 7,
        "dust_resistance": 7,
        "drop_resistance": 8
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 9,
        "wifi_speed": 8,
        "usb_version": 3.1,
        "bluetooth_version": 5.2
      },
      "audiovisual": {
        "jack": false,
        "audio_score": 8,
        "video_score": 9,
        "photo_score": 9,
        "zoom": 5,
        "ois": true,
        "eis": true,
        "pro_video": false
      },
      "software":{
          'compatibility':9, 'design':9, 'efficiency':8, 'security':8, 'features':8, 'updates':8
      },
      'extras':{
          'number_of_extras':3, 'dual_sim':true, 'expandable_storage':false, 'fingerprint':true, 'face_unlock':true, 'ir_blaster':false, 'stereo_speakers':true
      },
      'screen':{
          'color':10, 'size':6.8, 'brightness':10, 'oled':true, 'refresh_rate':120, 'hdr':true, 'resolution':'2400x1080'
      }
    }
  },
  {
    "name": "Honor Magic 5 Pro",
    "price": 1099,
    "image": "https://placehold.co/300x300/000000/ffffff?text=Honor+Magic+5+Pro",
    "details": {
      "battery": {
        "capacity": 5450,
        "fast_charge": 66,
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
        "drop_resistance": 9
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 10,
        "wifi_speed": 9,
        "usb_version": 3.2,
        "bluetooth_version": 5.3
      },
      "audiovisual": {
        "jack": false,
        "audio_score": 9,
        "video_score": 10,
        "photo_score": 10,
        "zoom": 6,
        "ois": true,
        "eis": true,
        "pro_video": true
      },
      "software":{
          'compatibility':10, 'design':10, 'efficiency':9, 'security':9, 'features':9, 'updates':10
      },
      'extras':{
          'number_of_extras':4, 'dual_sim':false, 'expandable_storage':false, 'fingerprint':true, 'face_unlock':true, 'ir_blaster':false, 'stereo_speakers':true
      },
      'screen':{
          'color':10, 'size':6.81, 'brightness':10, 'oled':true, 'refresh_rate':120, 'hdr':true, 'resolution':'2848x1312'
      }
    }
  },
  {
    "name": "ZTE Axon 40 Ultra",
    "price": 899,
    "image": "https://placehold.co/300x300/000000/ffffff?text=ZTE+Axon+40+Ultra",
    "details": {
      "battery": {
        "capacity": 5000,
        "fast_charge": 65,
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
        "drop_resistance": 9
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 10,
        "wifi_speed": 9,
        "usb_version": 3.2,
        "bluetooth_version": 5.3
      },
      "audiovisual": {
        "jack": false,
        "audio_score": 9,
        "video_score": 10,
        "photo_score": 10,
        "zoom": 6,
        "ois": true,
        "eis": true,
        "pro_video": true
      },
      "software":{
          'compatibility':10, 'design':10, 'efficiency':9, 'security':9, 'features':9, 'updates':10
      },
      'extras':{
          'number_of_extras':4, 'dual_sim':false, 'expandable_storage':true, 'fingerprint':true, 'face_unlock':true, 'ir_blaster':false, 'stereo_speakers':true
      },
      'screen':{
          'color':10, 'size':6.8, 'brightness':10, 'oled':true, 'refresh_rate':120, 'hdr':true, 'resolution':'2480x1116'
      }
    }
  },
  {
    "name": "Nothing Phone (2)",
    "price": 599,
    "image": "https://placehold.co/300x300/000000/ffffff?text=Nothing+Phone+(2)",
    "details": {
      "battery": {
        "capacity": 4700,
        "fast_charge": 45,
        "energy_concumption": 7,
        "wireless_charge": true
      },
      "performance": {
        "ram": 8,
        "cpu": 9,
        "gpu": 9
      },
      "design": {
        "material_score": 8,
        "water_resistance": 7,
        "dust_resistance": 7,
        "drop_resistance": 8
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 9,
        "wifi_speed": 8,
        "usb_version": 3.1,
        "bluetooth_version": 5.2
      },
      "audiovisual": {
        "jack": false,
        "audio_score": 8,
        "video_score": 9,
        "photo_score": 9,
        "zoom": 5,
        "ois": true,
        "eis": true,
        "pro_video": false
      },
      "software":{
          'compatibility':9, 'design':9, 'efficiency':8, 'security':8, 'features':8, 'updates':8
      },
      'extras':{
          'number_of_extras':3, 'dual_sim':true, 'expandable_storage':false, 'fingerprint':true, 'face_unlock':true, 'ir_blaster':false, 'stereo_speakers':true
      },
      'screen':{
          'color':10, 'size':6.7, 'brightness':10, 'oled':true, 'refresh_rate':120, 'hdr':true, 'resolution':'2400x1080'
      }
    }
  },
  {
    "name": "Realme GT Neo 5",
    "price": 649,
    "image": "https://placehold.co/300x300/000000/ffffff?text=Realme+GT+Neo+5",
    "details": {
      "battery": {
        "capacity": 5000,
        "fast_charge": 240,
        "energy_concumption": 6,
        "wireless_charge": true
      },
      "performance": {
        "ram": 16,
        "cpu": 10,
        "gpu": 10
      },
      "design": {
        "material_score": 8,
        "water_resistance": 7,
        "dust_resistance": 7,
        "drop_resistance": 8
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 9,
        "wifi_speed": 9,
        "usb_version": 3.2,
        "bluetooth_version": 5.3
      },
      "audiovisual": {
        "jack": false,
        "audio_score": 8,
        "video_score": 9,
        "photo_score": 9,
        "zoom": 5,
        "ois": true,
        "eis": true,
        "pro_video": false
      },
      "software":{
          'compatibility':9, 'design':9, 'efficiency':8, 'security':8, 'features':8, 'updates':8
      },
      'extras':{
          'number_of_extras':3, 'dual_sim':true, 'expandable_storage':false, 'fingerprint':true, 'face_unlock':true, 'ir_blaster':false, 'stereo_speakers':true
      },
      'screen':{
          'color':10, 'size':6.74, 'brightness':10, 'oled':true, 'refresh_rate':144, 'hdr':true, 'resolution':'2772x1240'
      }
    }
  },
  {
    "name": "Vivo V27 Pro",
    "price": 499,
    "image": "https://placehold.co/300x300/000000/ffffff?text=Vivo+V27+Pro",
    "details": {
      "battery": {
        "capacity": 4600,
        "fast_charge": 66,
        "energy_concumption": 7,
        "wireless_charge": false
      },
      "performance": {
        "ram": 8,
        "cpu": 9,
        "gpu": 9
      },
      "design": {
        "material_score": 8,
        "water_resistance": 7,
        "dust_resistance": 7,
        "drop_resistance": 8
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 9,
        "wifi_speed": 8,
        "usb_version": 3.1,
        "bluetooth_version": 5.2
      },
      "audiovisual": {
        "jack": false,
        "audio_score": 8,
        "video_score": 9,
        "photo_score": 9,
        "zoom": 5,
        "ois": true,
        "eis": true,
        "pro_video": false
      },
      "software":{
          'compatibility':9, 'design':9, 'efficiency':8, 'security':8, 'features':8, 'updates':8
      },
      'extras':{
          'number_of_extras':3, 'dual_sim':true, 'expandable_storage':false, 'fingerprint':true, 'face_unlock':true, 'ir_blaster':false, 'stereo_speakers':true
      },
      'screen':{
          'color':10, 'size':6.78, 'brightness':10, 'oled':true, 'refresh_rate':120, 'hdr':true, 'resolution':'2400x1080'
      }
    }
  },
  {
    "name": "Poco F5 Pro",
    "price": 499,
    "image": "https://placehold.co/300x300/000000/ffffff?text=Poco+F5+Pro",
    "details": {
      "battery": {
        "capacity": 5160,
        "fast_charge": 67,
        "energy_concumption": 7,
        "wireless_charge": true
      },
      "performance": {
        "ram": 8,
        "cpu": 9,
        "gpu": 9
      },
      "design": {
        "material_score": 8,
        "water_resistance": 7,
        "dust_resistance": 7,
        "drop_resistance": 8
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 9,
        "wifi_speed": 8,
        "usb_version": 3.1,
        "bluetooth_version": 5.2
      },
      "audiovisual": {
        "jack": false,
        "audio_score": 8,
        "video_score": 9,
        "photo_score": 9,
        "zoom": 5,
        "ois": true,
        "eis": true,
        "pro_video": false
      },
      "software":{
          'compatibility':9, 'design':9, 'efficiency':8, 'security':8, 'features':8, 'updates':8
      },
      'extras':{
          'number_of_extras':3, 'dual_sim':true, 'expandable_storage':false, 'fingerprint':true, 'face_unlock':true, 'ir_blaster':false, 'stereo_speakers':true
      },
      'screen':{
          'color':10, 'size':6.67, 'brightness':10, 'oled':true, 'refresh_rate':120, 'hdr':true, 'resolution':'3200x1440'
      }
    }
  },
  {
    "name": "Google Pixel 7a",
    "price": 499,
    "image": "https://placehold.co/300x300/000000/ffffff?text=Google+Pixel+7a",
    "details": {
      "battery": {
        "capacity": 4385,
        "fast_charge": 18,
        "energy_concumption": 7,
        "wireless_charge": true
      },
      "performance": {
        "ram": 8,
        "cpu": 8,
        "gpu": 8
      },
      "design": {
        "material_score": 7,
        "water_resistance": 8,
        "dust_resistance": 8,
        "drop_resistance": 8
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 9,
        "wifi_speed": 8,
        "usb_version": 3.0,
        "bluetooth_version": 5.2
      },
      "audiovisual": {
        "jack": false,
        "audio_score": 7,
        "video_score": 8,
        "photo_score": 9,
        "zoom": 4,
        "ois": true,
        "eis": true,
        "pro_video": false
      },
      "software":{
          'compatibility':9, 'design':9, 'efficiency':8, 'security':8, 'features':8, 'updates':8
      },
      'extras':{
          'number_of_extras':3, 'dual_sim':true, 'expandable_storage':false, 'fingerprint':true, 'face_unlock':true, 'ir_blaster':false, 'stereo_speakers':true
      },
      'screen':{
          'color':10, 'size':6.1, 'brightness':10, 'oled':true, 'refresh_rate':90, 'hdr':true, 'resolution':'2400x1080'
      }
    }
  },
  {
    "name": "Samsung Galaxy A54",
    "price": 449,
    "image": "https://placehold.co/300x300/000000/ffffff?text=Samsung+Galaxy+A54",
    "details": {
      "battery": {
        "capacity": 5000,
        "fast_charge": 25,
        "energy_concumption": 7,
        "wireless_charge": false
      },
      "performance": {
        "ram": 8,
        "cpu": 8,
        "gpu": 8
      },
      "design": {
        "material_score": 7,
        "water_resistance": 8,
        "dust_resistance": 8,
        "drop_resistance": 8
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 9,
        "wifi_speed": 8,
        "usb_version": 2.0,
        "bluetooth_version": 5.3
      },
      "audiovisual": {
        "jack": true,
        "audio_score": 7,
        "video_score": 8,
        "photo_score": 8,
        "zoom": 4,
        "ois": false,
        "eis": true,
        "pro_video": false
      },
      "software":{
          'compatibility':9, 'design':9, 'efficiency':8, 'security':8, 'features':8, 'updates':8
      },
      'extras':{
          'number_of_extras':3, 'dual_sim':true, 'expandable_storage':true, 'fingerprint':true, 'face_unlock':true, 'ir_blaster':false, 'stereo_speakers':true
      },
      'screen':{
          'color':10, 'size':6.4, 'brightness':10, 'oled':true, 'refresh_rate':120, 'hdr':true, 'resolution':'2340x1080'
      }
    }
  },
  {
    "name": "OnePlus Nord CE 3",
    "price": 349,
    "image": "https://placehold.co/300x300/000000/ffffff?text=OnePlus+Nord+CE+3",
    "details": {
      "battery": {
        "capacity": 5000,
        "fast_charge": 80,
        "energy_concumption": 7,
        "wireless_charge": false
      },
      "performance": {
        "ram": 8,
        "cpu": 8,
        "gpu": 8
      },
      "design": {
        "material_score": 6,
        "water_resistance": 7,
        "dust_resistance": 7,
        "drop_resistance": 7
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 8,
        "wifi_speed": 7,
        "usb_version": 2.0,
        "bluetooth_version": 5.2
      },
      "audiovisual": {
        "jack": true,
        "audio_score": 6,
        "video_score": 7,
        "photo_score": 7,
        "zoom": 3,
        "ois": false,
        "eis": true,
        "pro_video": false
      },
      "software":{
          'compatibility':8, 'design':8, 'efficiency':7, 'security':7, 'features':7, 'updates':7
      },
      'extras':{
          'number_of_extras':3, 'dual_sim':true, 'expandable_storage':true, 'fingerprint':true, 'face_unlock':true, 'ir_blaster':false, 'stereo_speakers':true
      },
      'screen':{
          'color':10, 'size':6.72, 'brightness':10, 'oled':true, 'refresh_rate':120, 'hdr':true, 'resolution':'2412x1080'
      }
    }
  },
  {
    "name": "Xiaomi Redmi Note 12 Pro",
    "price": 299,
    "image": "https://placehold.co/300x300/000000/ffffff?text=Xiaomi+Redmi+Note+12+Pro",
    "details": {
      "battery": {
        "capacity": 5000,
        "fast_charge": 67,
        "energy_concumption": 7,
        "wireless_charge": false
      },
      "performance": {
        "ram": 6,
        "cpu": 7,
        "gpu": 7
      },
      "design": {
        "material_score": 6,
        "water_resistance": 6,
        "dust_resistance": 6,
        "drop_resistance": 6
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 8,
        "wifi_speed": 7,
        "usb_version": 2.0,
        "bluetooth_version": 5.2
      },
      "audiovisual": {
        "jack": true,
        "audio_score": 6,
        "video_score": 7,
        "photo_score": 7,
        "zoom": 3,
        "ois": false,
        "eis": true,
        "pro_video": false
      },
      "software":{
          'compatibility':8, 'design':8, 'efficiency':7, 'security':7, 'features':7, 'updates':7
      },
      'extras':{
          'number_of_extras':3, 'dual_sim':true, 'expandable_storage':true, 'fingerprint':true, 'face_unlock':true, 'ir_blaster':false, 'stereo_speakers':true
      },
      'screen':{
          'color':10, 'size':6.67, 'brightness':10, 'oled':true, 'refresh_rate':120, 'hdr':true, 'resolution':'2400x1080'
      }
    }
  },
  {
    "name": "Oppo Find N2 Flip",
    "price": 999,
    "image": "https://placehold.co/300x300/000000/ffffff?text=Oppo+Find+N2+Flip",
    "details": {
      "battery": {
        "capacity": 4300,
        "fast_charge": 44,
        "energy_concumption": 7,
        "wireless_charge": true
      },
      "performance": {
        "ram": 8,
        "cpu": 9,
        "gpu": 9
      },
      "design": {
        "material_score": 8,
        "water_resistance": 7,
        "dust_resistance": 7,
        "drop_resistance": 8
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 9,
        "wifi_speed": 8,
        "usb_version": 3.1,
        "bluetooth_version": 5.2
      },
      "audiovisual": {
        "jack": false,
        "audio_score": 8,
        "video_score": 9,
        "photo_score": 9,
        "zoom": 5,
        "ois": true,
        "eis": true,
        "pro_video": false
      },
      "software":{
          'compatibility':9, 'design':9, 'efficiency':8, 'security':8, 'features':8, 'updates':8
      },
      'extras':{
          'number_of_extras':3, 'dual_sim':true, 'expandable_storage':false, 'fingerprint':true, 'face_unlock':true, 'ir_blaster':false, 'stereo_speakers':true
      },
      'screen':{
          'color':10, 'size':6.8, 'brightness':10, 'oled':true, 'refresh_rate':120, 'hdr':true, 'resolution':'2520x1080'
      }
    }
  },
  {
    "name": "Sony Xperia 1 V",
    "price": 1299,
    "image": "https://placehold.co/300x300/000000/ffffff?text=Sony+Xperia+1+V",
    "details": {
      "battery": {
        "capacity": 5000,
        "fast_charge": 30,
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
        "drop_resistance": 9
      },
      "connectivity": {
        "nfc": true,
        "data5g": true,
        "precision_gps": 10,
        "wifi_speed": 9,
        "usb_version": 3.2,
        "bluetooth_version": 5.3
      },
      "audiovisual": {
        "jack": true,
        "audio_score": 10,
        "video_score": 10,
        "photo_score": 10,
        "zoom": 6,
        "ois": true,
        "eis": true,
        "pro_video": true
      },
      "software":{
          'compatibility':10, 'design':10, 'efficiency':9, 'security':9, 'features':9, 'updates':10
      },
      'extras':{
          'number_of_extras':4, 'dual_sim':false, 'expandable_storage':true, 'fingerprint':true, 'face_unlock':true, 'ir_blaster':false, 'stereo_speakers':true
      },
      'screen':{
          'color':10, 'size':6.5, 'brightness':10, 'oled':true, 'refresh_rate':120, 'hdr':true, 'resolution':'3840x1644'
      }
    }
  },
  {
    "name": "Samsung Galaxy A05",
    "price": 179,
    "image": "https://placehold.co/300x300/000000/ffffff?text=Samsung+Galaxy+A05",
    "details": {
      "battery": {
        "capacity": 5000,
        "fast_charge": 25,
        "energy_concumption": 8,
        "wireless_charge": false
      },
      "performance": {
        "ram": 4,
        "cpu": 6,
        "gpu": 6
      },
      "design": {
        "material_score": 6,
        "water_resistance": 6,
        "dust_resistance": 6,
        "drop_resistance": 7
      },
      "connectivity": {
        "nfc": false,
        "data5g": false,
        "precision_gps": 7,
        "wifi_speed": 7,
        "usb_version": 2.0,
        "bluetooth_version": 5.0
      },
      "audiovisual": {
        "jack": true,
        "audio_score": 6,
        "video_score": 7,
        "photo_score": 7,
        "zoom": 2,
        "ois": false,
        "eis": false,
        "pro_video": false
      },
      "software": {
        "compatibility": 7,
        "design": 7,
        "efficiency": 7,
        "security": 7,
        "features": 7,
        "updates": 7
      },
      "extras": {
        "number_of_extras": 2,
        "dual_sim": true,
        "expandable_storage": true,
        "fingerprint": false,
        "face_unlock": true,
        "ir_blaster": false,
        "stereo_speakers": false
      },
      "screen": {
        "color": 8,
        "size": 6.7,
        "brightness": 8,
        "oled": false,
        "refresh_rate": 60,
        "hdr": false,
        "resolution": "1600x720"
      }
    }
  },
  {
    "name": "Xiaomi Redmi A3",
    "price": 129,
    "image": "https://placehold.co/300x300/000000/ffffff?text=Xiaomi+Redmi+A3",
    "details": {
      "battery": {
        "capacity": 5000,
        "fast_charge": 10,
        "energy_concumption": 8,
        "wireless_charge": false
      },
      "performance": {
        "ram": 3,
        "cpu": 5,
        "gpu": 5
      },
      "design": {
        "material_score": 6,
        "water_resistance": 5,
        "dust_resistance": 5,
        "drop_resistance": 6
      },
      "connectivity": {
        "nfc": false,
        "data5g": false,
        "precision_gps": 7,
        "wifi_speed": 6,
        "usb_version": 2.0,
        "bluetooth_version": 5.0
      },
      "audiovisual": {
        "jack": true,
        "audio_score": 6,
        "video_score": 6,
        "photo_score": 6,
        "zoom": 2,
        "ois": false,
        "eis": false,
        "pro_video": false
      },
      "software": {
        "compatibility": 7,
        "design": 7,
        "efficiency": 7,
        "security": 7,
        "features": 7,
        "updates": 7
      },
      "extras": {
        "number_of_extras": 2,
        "dual_sim": true,
        "expandable_storage": true,
        "fingerprint": false,
        "face_unlock": true,
        "ir_blaster": false,
        "stereo_speakers": false
      },
      "screen": {
        "color": 7,
        "size": 6.52,
        "brightness": 7,
        "oled": false,
        "refresh_rate": 90,
        "hdr": false,
        "resolution": "1600x720"
      }
    }
  },
  {
    "name": "Motorola Moto E13",
    "price": 119,
    "image": "https://placehold.co/300x300/000000/ffffff?text=Motorola+Moto+E13",
    "details": {
      "battery": {
        "capacity": 5000,
        "fast_charge": 10,
        "energy_concumption": 8,
        "wireless_charge": false
      },
      "performance": {
        "ram": 2,
        "cpu": 5,
        "gpu": 5
      },
      "design": {
        "material_score": 6,
        "water_resistance": 5,
        "dust_resistance": 5,
        "drop_resistance": 6
      },
      "connectivity": {
        "nfc": false,
        "data5g": false,
        "precision_gps": 7,
        "wifi_speed": 6,
        "usb_version": 2.0,
        "bluetooth_version": 5.0
      },
      "audiovisual": {
        "jack": true,
        "audio_score": 6,
        "video_score": 6,
        "photo_score": 6,
        "zoom": 2,
        "ois": false,
        "eis": false,
        "pro_video": false
      },
      "software": {
        "compatibility": 7,
        "design": 7,
        "efficiency": 7,
        "security": 7,
        "features": 7,
        "updates": 7
      },
      "extras": {
        "number_of_extras": 2,
        "dual_sim": true,
        "expandable_storage": true,
        "fingerprint": false,
        "face_unlock": true,
        "ir_blaster": false,
        "stereo_speakers": false
      },
      "screen": {
        "color": 7,
        "size": 6.5,
        "brightness": 7,
        "oled": false,
        "refresh_rate": 60,
        "hdr": false,
        "resolution": "1600x720"
      }
    }
  },
  {
    "name": "Realme C53",
    "price": 149,
    "image": "https://placehold.co/300x300/000000/ffffff?text=Realme+C53",
    "details": {
      "battery": {
        "capacity": 5000,
        "fast_charge": 33,
        "energy_concumption": 8,
        "wireless_charge": false
      },
      "performance": {
        "ram": 4,
        "cpu": 6,
        "gpu": 6
      },
      "design": {
        "material_score": 6,
        "water_resistance": 5,
        "dust_resistance": 5,
        "drop_resistance": 6
      },
      "connectivity": {
        "nfc": false,
        "data5g": false,
        "precision_gps": 7,
        "wifi_speed": 7,
        "usb_version": 2.0,
        "bluetooth_version": 5.0
      },
      "audiovisual": {
        "jack": true,
        "audio_score": 6,
        "video_score": 7,
        "photo_score": 7,
        "zoom": 2,
        "ois": false,
        "eis": false,
        "pro_video": false
      },
      "software": {
        "compatibility": 7,
        "design": 7,
        "efficiency": 7,
        "security": 7,
        "features": 7,
        "updates": 7
      },
      "extras": {
        "number_of_extras": 2,
        "dual_sim": true,
        "expandable_storage": true,
        "fingerprint": false,
        "face_unlock": true,
        "ir_blaster": false,
        "stereo_speakers": false
      },
      "screen": {
        "color": 8,
        "size": 6.74,
        "brightness": 8,
        "oled": false,
        "refresh_rate": 90,
        "hdr": false,
        "resolution": "1600x720"
      }
    }
  },
  {
    "name": "Infinix Hot 40i",
    "price": 139,
    "image": "https://placehold.co/300x300/000000/ffffff?text=Infinix+Hot+40i",
    "details": {
      "battery": {
        "capacity": 5000,
        "fast_charge": 18,
        "energy_concumption": 8,
        "wireless_charge": false
      },
      "performance": {
        "ram": 4,
        "cpu": 6,
        "gpu": 6
      },
      "design": {
        "material_score": 6,
        "water_resistance": 5,
        "dust_resistance": 5,
        "drop_resistance": 6
      },
      "connectivity": {
        "nfc": false,
        "data5g": false,
        "precision_gps": 7,
        "wifi_speed": 7,
        "usb_version": 2.0,
        "bluetooth_version": 5.0
      },
      "audiovisual": {
        "jack": true,
        "audio_score": 6,
        "video_score": 7,
        "photo_score": 7,
        "zoom": 2,
        "ois": false,
        "eis": false,
        "pro_video": false
      },
      "software": {
        "compatibility": 7,
        "design": 7,
        "efficiency": 7,
        "security": 7,
        "features": 7,
        "updates": 7
      },
      "extras": {
        "number_of_extras": 2,
        "dual_sim": true,
        "expandable_storage": true,
        "fingerprint": false,
        "face_unlock": true,
        "ir_blaster": false,
        "stereo_speakers": false
      },
      "screen": {
        "color": 8,
        "size": 6.56,
        "brightness": 8,
        "oled": false,
        "refresh_rate": 90,
        "hdr": false,
        "resolution": "1612x720"
      }
    }
  }
]