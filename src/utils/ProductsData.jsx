const ProductsData = {
  phones: [
    {
      id: 1,
      name: {
        en: "iPhone 14",
        pt: "iPhone 14",
      },
      color: "Black",
      price: 999.99,
      description: {
        en: "Latest model with A15 chip, 6.1-inch display.",
        pt: "Modelo mais recente com chip A15, tela de 6.1 polegadas.",
      },
      discount: 35, // Produto com desconto
      images: [
        "https://example.com/iphone14_black_1.jpg",
        "https://example.com/iphone14_black_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "6.1 inches",
          battery: "3,279mAh",
          camera: "12MP dual",
        },
        pt: {
          screen_size: "6.1 polegadas",
          battery: "3.279mAh",
          camera: "Câmera dupla de 12MP",
        },
      },
    },
    {
      id: 2,
      name: {
        en: "Samsung Galaxy S23",
        pt: "Samsung Galaxy S23",
      },
      color: "White",
      price: 849.99,
      description: {
        en: "Flagship phone with Snapdragon 8 Gen 2 processor.",
        pt: "Celular topo de linha com processador Snapdragon 8 Gen 2.",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/galaxys23_white_1.jpg",
        "https://example.com/galaxys23_white_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "6.6 inches",
          battery: "4,700mAh",
          camera: "50MP",
        },
        pt: {
          screen_size: "6.6 polegadas",
          battery: "4.700mAh",
          camera: "50MP",
        },
      },
    },
    {
      id: 3,
      name: {
        en: "Google Pixel 7",
        pt: "Google Pixel 7",
      },
      color: "Black",
      price: 599.99,
      description: {
        en: "Featuring Google Tensor chip, 50MP camera, 6.3-inch OLED display.",
        pt: "Com chip Google Tensor, câmera de 50MP e tela OLED de 6.3 polegadas.",
      },
      discount: 35, // Produto com desconto
      images: ["https://example.com/pixel7_black_1.jpg", "https://example.com/pixel7_black_2.jpg"],
      technical_specs: {
        en: {
          screen_size: "6.3 inches",
          battery: "4,614mAh",
          camera: "50MP",
        },
        pt: {
          screen_size: "6.3 polegadas",
          battery: "4.614mAh",
          camera: "50MP",
        },
      },
    },
    {
      id: 4,
      name: {
        en: "OnePlus 11",
        pt: "OnePlus 11",
      },
      color: "Green",
      price: 799.99,
      description: {
        en: "5G smartphone with 120Hz Fluid AMOLED display, Snapdragon 8 Gen 2.",
        pt: "Smartphone 5G com tela Fluid AMOLED de 120Hz, Snapdragon 8 Gen 2.",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/oneplus11_green_1.jpg",
        "https://example.com/oneplus11_green_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "6.7 inches",
          battery: "5,000mAh",
          camera: "50MP triple",
        },
        pt: {
          screen_size: "6.7 polegadas",
          battery: "5.000mAh",
          camera: "Câmera tripla de 50MP",
        },
      },
    },
    {
      id: 5,
      name: {
        en: "Xiaomi 12T Pro",
        pt: "Xiaomi 12T Pro",
      },
      color: "Black",
      price: 749.99,
      description: {
        en: "120Hz AMOLED display, Snapdragon 8+ Gen 1, 200MP camera.",
        pt: "Tela AMOLED de 120Hz, Snapdragon 8+ Gen 1, câmera de 200MP.",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/xiaomi12tpro_black_1.jpg",
        "https://example.com/xiaomi12tpro_black_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "6.67 inches",
          battery: "5,000mAh",
          camera: "200MP",
        },
        pt: {
          screen_size: "6.67 polegadas",
          battery: "5.000mAh",
          camera: "200MP",
        },
      },
    },
    {
      id: 6,
      name: {
        en: "Motorola Edge 30 Ultra",
        pt: "Motorola Edge 30 Ultra",
      },
      color: "White",
      price: 899.99,
      description: {
        en: "6.67-inch OLED display, 144Hz refresh rate, 200MP camera.",
        pt: "Tela OLED de 6.67 polegadas, taxa de atualização de 144Hz, câmera de 200MP.",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/edge30ultra_white_1.jpg",
        "https://example.com/edge30ultra_white_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "6.67 inches",
          battery: "4,610mAh",
          camera: "200MP",
        },
        pt: {
          screen_size: "6.67 polegadas",
          battery: "4.610mAh",
          camera: "200MP",
        },
      },
    },
    {
      id: 7,
      name: {
        en: "Sony Xperia 1 IV",
        pt: "Sony Xperia 1 IV",
      },
      color: "Black",
      price: 1299.99,
      description: {
        en: "4K OLED display, Snapdragon 8 Gen 1, 12MP triple camera.",
        pt: "Tela OLED 4K, Snapdragon 8 Gen 1, câmera tripla de 12MP.",
      },
      discount: 35, // Produto com desconto
      images: [
        "https://example.com/xperia1iv_black_1.jpg",
        "https://example.com/xperia1iv_black_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "6.5 inches",
          battery: "5,000mAh",
          camera: "12MP triple",
        },
        pt: {
          screen_size: "6.5 polegadas",
          battery: "5.000mAh",
          camera: "Câmera tripla de 12MP",
        },
      },
    },
    {
      id: 8,
      name: {
        en: "Nokia G60 5G",
        pt: "Nokia G60 5G",
      },
      color: "Black",
      price: 499.99,
      description: {
        en: "5G phone with 6.58-inch display, 50MP camera, Snapdragon 695.",
        pt: "Celular 5G com tela de 6.58 polegadas, câmera de 50MP, Snapdragon 695.",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/nokiag60_black_1.jpg",
        "https://example.com/nokiag60_black_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "6.58 inches",
          battery: "4,500mAh",
          camera: "50MP",
        },
        pt: {
          screen_size: "6.58 polegadas",
          battery: "4.500mAh",
          camera: "50MP",
        },
      },
    },
    {
      id: 9,
      name: {
        en: "Realme GT Neo 3",
        pt: "Realme GT Neo 3",
      },
      color: "White",
      price: 549.99,
      description: {
        en: "6.7-inch AMOLED display, Dimensity 8100, 150W fast charging.",
        pt: "Tela AMOLED de 6.7 polegadas, Dimensity 8100, carregamento rápido de 150W.",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/realmegtneo3_white_1.jpg",
        "https://example.com/realmegtneo3_white_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "6.7 inches",
          battery: "5,000mAh",
          camera: "50MP triple",
        },
        pt: {
          screen_size: "6.7 polegadas",
          battery: "5.000mAh",
          camera: "Câmera tripla de 50MP",
        },
      },
    },
    {
      id: 10,
      name: {
        en: "Asus ROG Phone 6",
        pt: "Asus ROG Phone 6",
      },
      color: "Black",
      price: 999.99,
      description: {
        en: "Gaming phone with 165Hz AMOLED display, Snapdragon 8+ Gen 1.",
        pt: "Celular gamer com tela AMOLED de 165Hz, Snapdragon 8+ Gen 1.",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/rogphone6_black_1.jpg",
        "https://example.com/rogphone6_black_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "6.78 inches",
          battery: "6,000mAh",
          camera: "50MP triple",
        },
        pt: {
          screen_size: "6.78 polegadas",
          battery: "6.000mAh",
          camera: "Câmera tripla de 50MP",
        },
      },
    },
  ],
  computers: [
    {
      id: 1,
      name: {
        en: "MacBook Air M2",
        pt: "MacBook Air M2",
      },
      color: "Black",
      price: 1199.99,
      description: {
        en: "Apple Silicon M2 chip with 8-core CPU.",
        pt: "Chip Apple Silicon M2 com CPU de 8 núcleos.",
      },
      discount: 35, // Produto com desconto
      images: [
        "https://example.com/macbookair_black_1.jpg",
        "https://example.com/macbookair_black_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "13.6 inches",
          ram: "8GB",
          storage: "256GB SSD",
        },
        pt: {
          screen_size: "13.6 polegadas",
          ram: "8GB",
          storage: "256GB SSD",
        },
      },
    },
    {
      id: 2,
      name: {
        en: "MacBook Pro M2",
        pt: "MacBook Pro M2",
      },
      color: "Silver",
      price: 1599.99,
      description: {
        en: "14-inch model with Apple M2 Pro chip and 16-core GPU.",
        pt: "Modelo de 14 polegadas com chip Apple M2 Pro e GPU de 16 núcleos.",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/macbookpro_silver_1.jpg",
        "https://example.com/macbookpro_silver_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "14 inches",
          ram: "16GB",
          storage: "512GB SSD",
        },
        pt: {
          screen_size: "14 polegadas",
          ram: "16GB",
          storage: "512GB SSD",
        },
      },
    },
    {
      id: 3,
      name: {
        en: "Dell XPS 13",
        pt: "Dell XPS 13",
      },
      color: "White",
      price: 999.99,
      description: {
        en: "13.4-inch laptop with Intel Core i7 and 16GB RAM.",
        pt: "Notebook de 13.4 polegadas com Intel Core i7 e 16GB de RAM.",
      },
      discount: 35, // Produto com desconto
      images: [
        "https://example.com/dellxps_white_1.jpg",
        "https://example.com/dellxps_white_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "13.4 inches",
          ram: "16GB",
          storage: "512GB SSD",
        },
        pt: {
          screen_size: "13.4 polegadas",
          ram: "16GB",
          storage: "512GB SSD",
        },
      },
    },
    {
      id: 4,
      name: {
        en: "HP Spectre x360",
        pt: "HP Spectre x360",
      },
      color: "Black",
      price: 1249.99,
      description: {
        en: "Convertible laptop with Intel Evo Core i7 and touchscreen.",
        pt: "Notebook conversível com Intel Evo Core i7 e tela sensível ao toque.",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/hpspectre_black_1.jpg",
        "https://example.com/hpspectre_black_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "13.5 inches",
          ram: "16GB",
          storage: "1TB SSD",
        },
        pt: {
          screen_size: "13.5 polegadas",
          ram: "16GB",
          storage: "1TB SSD",
        },
      },
    },
    {
      id: 5,
      name: {
        en: "Lenovo ThinkPad X1 Carbon",
        pt: "Lenovo ThinkPad X1 Carbon",
      },
      color: "Black",
      price: 1399.99,
      description: {
        en: "Ultra-light laptop with Intel Core i7 and 1TB SSD.",
        pt: "Notebook ultraleve com Intel Core i7 e SSD de 1TB.",
      },
      discount: 35, // Produto com desconto
      images: [
        "https://example.com/thinkpadx1_black_1.jpg",
        "https://example.com/thinkpadx1_black_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "14 inches",
          ram: "16GB",
          storage: "1TB SSD",
        },
        pt: {
          screen_size: "14 polegadas",
          ram: "16GB",
          storage: "1TB SSD",
        },
      },
    },
    {
      id: 6,
      name: {
        en: "Asus ZenBook 14",
        pt: "Asus ZenBook 14",
      },
      color: "Silver",
      price: 1099.99,
      description: {
        en: "Thin and light with AMD Ryzen 7 and 512GB SSD.",
        pt: "Fino e leve com AMD Ryzen 7 e SSD de 512GB.",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/zenbook_silver_1.jpg",
        "https://example.com/zenbook_silver_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "14 inches",
          ram: "16GB",
          storage: "512GB SSD",
        },
        pt: {
          screen_size: "14 polegadas",
          ram: "16GB",
          storage: "512GB SSD",
        },
      },
    },
    {
      id: 7,
      name: {
        en: "Microsoft Surface Laptop 4",
        pt: "Microsoft Surface Laptop 4",
      },
      color: "Platinum",
      price: 1299.99,
      description: {
        en: "13.5-inch touchscreen with Intel Core i5 and 512GB SSD.",
        pt: "Tela sensível ao toque de 13.5 polegadas com Intel Core i5 e SSD de 512GB.",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/surfaceplatinum_1.jpg",
        "https://example.com/surfaceplatinum_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "13.5 inches",
          ram: "8GB",
          storage: "512GB SSD",
        },
        pt: {
          screen_size: "13.5 polegadas",
          ram: "8GB",
          storage: "512GB SSD",
        },
      },
    },
    {
      id: 8,
      name: {
        en: "Acer Swift 3",
        pt: "Acer Swift 3",
      },
      color: "Gray",
      price: 799.99,
      description: {
        en: "Lightweight laptop with Intel Core i5 and long battery life.",
        pt: "Notebook leve com Intel Core i5 e longa duração da bateria.",
      },
      discount: 0, // Produto sem desconto
      images: ["https://example.com/swift3_gray_1.jpg", "https://example.com/swift3_gray_2.jpg"],
      technical_specs: {
        en: {
          screen_size: "14 inches",
          ram: "8GB",
          storage: "512GB SSD",
        },
        pt: {
          screen_size: "14 polegadas",
          ram: "8GB",
          storage: "512GB SSD",
        },
      },
    },
    {
      id: 9,
      name: {
        en: "Razer Blade 15",
        pt: "Razer Blade 15",
      },
      color: "Black",
      price: 1999.99,
      description: {
        en: "Gaming laptop with NVIDIA GeForce RTX 3070 and Intel Core i7.",
        pt: "Notebook gamer com NVIDIA GeForce RTX 3070 e Intel Core i7.",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/razerblade_black_1.jpg",
        "https://example.com/razerblade_black_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "15.6 inches",
          ram: "16GB",
          storage: "1TB SSD",
        },
        pt: {
          screen_size: "15.6 polegadas",
          ram: "16GB",
          storage: "1TB SSD",
        },
      },
    },
    {
      id: 10,
      name: {
        en: "HP Pavilion 15",
        pt: "HP Pavilion 15",
      },
      color: "Silver",
      price: 749.99,
      description: {
        en: "Budget laptop with Intel Core i5 and 8GB RAM.",
        pt: "Notebook econômico com Intel Core i5 e 8GB de RAM.",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/hp_pavilion15_silver_1.jpg",
        "https://example.com/hp_pavilion15_silver_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "15.6 inches",
          ram: "8GB",
          storage: "256GB SSD",
        },
        pt: {
          screen_size: "15.6 polegadas",
          ram: "8GB",
          storage: "256GB SSD",
        },
      },
    },
  ],
  smartwatches: [
    {
      id: 1,
      name: {
        en: "Apple Watch Series 7",
        pt: "Apple Watch Série 7",
      },
      color: "Black",
      price: 399.99,
      description: {
        en: "Smartwatch with 41mm Retina display and GPS.",
        pt: "Smartwatch com display Retina de 41mm e GPS.",
      },
      discount: 35, // Produto com desconto de 35%
      images: [
        "https://example.com/applewatch7_black_1.jpg",
        "https://example.com/applewatch7_black_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "41mm",
          connectivity: "GPS",
          water_resistant: "50 meters",
        },
        pt: {
          screen_size: "41mm",
          connectivity: "GPS",
          water_resistant: "50 metros",
        },
      },
    },
    {
      id: 2,
      name: {
        en: "Samsung Galaxy Watch 4",
        pt: "Samsung Galaxy Watch 4",
      },
      color: "Black",
      price: 349.99,
      description: {
        en: "Smartwatch with 1.4-inch AMOLED display and heart rate monitor.",
        pt: "Smartwatch com display AMOLED de 1.4 polegadas e monitor de batimentos cardíacos.",
      },
      discount: 35, // Produto com desconto de 35%
      images: [
        "https://example.com/galaxywatch4_black_1.jpg",
        "https://example.com/galaxywatch4_black_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "1.4 inches",
          connectivity: "Bluetooth, GPS",
          heart_rate_monitor: true,
        },
        pt: {
          screen_size: "1.4 polegadas",
          connectivity: "Bluetooth, GPS",
          heart_rate_monitor: true,
        },
      },
    },
    {
      id: 3,
      name: {
        en: "Garmin Venu 2",
        pt: "Garmin Venu 2",
      },
      color: "Black",
      price: 449.99,
      description: {
        en: "Advanced fitness tracking smartwatch with GPS and AMOLED display.",
        pt: "Smartwatch de rastreamento avançado de fitness com GPS e display AMOLED.",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/garminvenu2_black_1.jpg",
        "https://example.com/garminvenu2_black_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "1.3 inches",
          connectivity: "Bluetooth, GPS",
          fitness_tracking: true,
        },
        pt: {
          screen_size: "1.3 polegadas",
          connectivity: "Bluetooth, GPS",
          fitness_tracking: true,
        },
      },
    },
    {
      id: 4,
      name: {
        en: "Fitbit Versa 3",
        pt: "Fitbit Versa 3",
      },
      color: "Black",
      price: 229.99,
      description: {
        en: "Smartwatch with built-in GPS and 24/7 heart rate tracking.",
        pt: "Smartwatch com GPS integrado e monitoramento de batimentos cardíacos 24/7.",
      },
      discount: 35, // Produto com desconto de 35%
      images: [
        "https://example.com/fitbitversa3_black_1.jpg",
        "https://example.com/fitbitversa3_black_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "1.58 inches",
          connectivity: "GPS, Bluetooth",
          heart_rate_monitor: true,
        },
        pt: {
          screen_size: "1.58 polegadas",
          connectivity: "GPS, Bluetooth",
          heart_rate_monitor: true,
        },
      },
    },
    {
      id: 5,
      name: {
        en: "Huawei Watch GT 3",
        pt: "Huawei Watch GT 3",
      },
      color: "Black",
      price: 249.99,
      description: {
        en: "Smartwatch with 1.43-inch AMOLED display and GPS.",
        pt: "Smartwatch com display AMOLED de 1.43 polegadas e GPS.",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/huaweiwatchgt3_black_1.jpg",
        "https://example.com/huaweiwatchgt3_black_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "1.43 inches",
          connectivity: "GPS, Bluetooth",
          battery_life: "14 days",
        },
        pt: {
          screen_size: "1.43 polegadas",
          connectivity: "GPS, Bluetooth",
          battery_life: "14 dias",
        },
      },
    },
    {
      id: 6,
      name: {
        en: "Apple Watch Series 7",
        pt: "Apple Watch Série 7",
      },
      color: "White",
      price: 399.99,
      description: {
        en: "Smartwatch with 41mm Retina display and GPS.",
        pt: "Smartwatch com display Retina de 41mm e GPS.",
      },
      discount: 35, // Produto com desconto de 35%
      images: [
        "https://example.com/applewatch7_white_1.jpg",
        "https://example.com/applewatch7_white_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "41mm",
          connectivity: "GPS",
          water_resistant: "50 meters",
        },
        pt: {
          screen_size: "41mm",
          connectivity: "GPS",
          water_resistant: "50 metros",
        },
      },
    },
    {
      id: 7,
      name: {
        en: "Samsung Galaxy Watch 4",
        pt: "Samsung Galaxy Watch 4",
      },
      color: "White",
      price: 349.99,
      description: {
        en: "Smartwatch with 1.4-inch AMOLED display and heart rate monitor.",
        pt: "Smartwatch com display AMOLED de 1.4 polegadas e monitor de batimentos cardíacos.",
      },
      discount: 35, // Produto com desconto de 35%
      images: [
        "https://example.com/galaxywatch4_white_1.jpg",
        "https://example.com/galaxywatch4_white_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "1.4 inches",
          connectivity: "Bluetooth, GPS",
          heart_rate_monitor: true,
        },
        pt: {
          screen_size: "1.4 polegadas",
          connectivity: "Bluetooth, GPS",
          heart_rate_monitor: true,
        },
      },
    },
    {
      id: 8,
      name: {
        en: "Garmin Venu 2",
        pt: "Garmin Venu 2",
      },
      color: "White",
      price: 449.99,
      description: {
        en: "Advanced fitness tracking smartwatch with GPS and AMOLED display.",
        pt: "Smartwatch de rastreamento avançado de fitness com GPS e display AMOLED.",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/garminvenu2_white_1.jpg",
        "https://example.com/garminvenu2_white_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "1.3 inches",
          connectivity: "Bluetooth, GPS",
          fitness_tracking: true,
        },
        pt: {
          screen_size: "1.3 polegadas",
          connectivity: "Bluetooth, GPS",
          fitness_tracking: true,
        },
      },
    },
    {
      id: 9,
      name: {
        en: "Fitbit Versa 3",
        pt: "Fitbit Versa 3",
      },
      color: "White",
      price: 229.99,
      description: {
        en: "Smartwatch with built-in GPS and 24/7 heart rate tracking.",
        pt: "Smartwatch com GPS integrado e monitoramento de batimentos cardíacos 24/7.",
      },
      discount: 35, // Produto com desconto de 35%
      images: [
        "https://example.com/fitbitversa3_white_1.jpg",
        "https://example.com/fitbitversa3_white_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "1.58 inches",
          connectivity: "GPS, Bluetooth",
          heart_rate_monitor: true,
        },
        pt: {
          screen_size: "1.58 polegadas",
          connectivity: "GPS, Bluetooth",
          heart_rate_monitor: true,
        },
      },
    },
    {
      id: 10,
      name: {
        en: "Huawei Watch GT 3",
        pt: "Huawei Watch GT 3",
      },
      color: "White",
      price: 249.99,
      description: {
        en: "Smartwatch with 1.43-inch AMOLED display and GPS.",
        pt: "Smartwatch com display AMOLED de 1.43 polegadas e GPS.",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/huaweiwatchgt3_white_1.jpg",
        "https://example.com/huaweiwatchgt3_white_2.jpg",
      ],
      technical_specs: {
        en: {
          screen_size: "1.43 inches",
          connectivity: "GPS, Bluetooth",
          battery_life: "14 days",
        },
        pt: {
          screen_size: "1.43 polegadas",
          connectivity: "GPS, Bluetooth",
          battery_life: "14 dias",
        },
      },
    },
  ],
  cameras: [
    {
      id: 1,
      name: {
        en: "Canon EOS R6",
        pt: "Canon EOS R6",
      },
      color: "Black",
      price: 2499.99,
      description: {
        en: "Full-frame mirrorless camera with 20.1MP sensor and 4K video.",
        pt: "Câmera mirrorless full-frame com sensor de 20.1MP e vídeo 4K.",
      },
      discount: 35, // Produto com desconto
      images: [
        "https://example.com/canoneosr6_black_1.jpg",
        "https://example.com/canoneosr6_black_2.jpg",
      ],
      technical_specs: {
        en: {
          sensor: "20.1 MP",
          video: "4K UHD",
          connectivity: "Wi-Fi, Bluetooth",
        },
        pt: {
          sensor: "20.1 MP",
          video: "4K UHD",
          connectivity: "Wi-Fi, Bluetooth",
        },
      },
    },
    {
      id: 2,
      name: {
        en: "Nikon Z6 II",
        pt: "Nikon Z6 II",
      },
      color: "Black",
      price: 1999.99,
      description: {
        en: "24.5MP full-frame mirrorless camera with dual processors.",
        pt: "Câmera mirrorless full-frame de 24.5MP com processadores duplos.",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/nikonz6ii_black_1.jpg",
        "https://example.com/nikonz6ii_black_2.jpg",
      ],
      technical_specs: {
        en: {
          sensor: "24.5 MP",
          video: "4K UHD",
          connectivity: "Wi-Fi, Bluetooth",
        },
        pt: {
          sensor: "24.5 MP",
          video: "4K UHD",
          connectivity: "Wi-Fi, Bluetooth",
        },
      },
    },
    {
      id: 3,
      name: {
        en: "Sony Alpha A7 III",
        pt: "Sony Alpha A7 III",
      },
      color: "Black",
      price: 1999.99,
      description: {
        en: "24.2MP full-frame mirrorless camera with 5-axis stabilization.",
        pt: "Câmera mirrorless full-frame de 24.2MP com estabilização de 5 eixos.",
      },
      discount: 35, // Produto com desconto
      images: [
        "https://example.com/sonyalphaa7iii_black_1.jpg",
        "https://example.com/sonyalphaa7iii_black_2.jpg",
      ],
      technical_specs: {
        en: {
          sensor: "24.2 MP",
          video: "4K UHD",
          stabilization: "5-axis",
        },
        pt: {
          sensor: "24.2 MP",
          video: "4K UHD",
          stabilization: "5 eixos",
        },
      },
    },
    {
      id: 4,
      name: {
        en: "Fujifilm X-T4",
        pt: "Fujifilm X-T4",
      },
      color: "Black",
      price: 1699.99,
      description: {
        en: "26.1MP APS-C mirrorless camera with in-body stabilization.",
        pt: "Câmera mirrorless APS-C de 26.1MP com estabilização no corpo.",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/fujifilmxt4_black_1.jpg",
        "https://example.com/fujifilmxt4_black_2.jpg",
      ],
      technical_specs: {
        en: {
          sensor: "26.1 MP",
          video: "4K DCI",
          stabilization: "In-body",
        },
        pt: {
          sensor: "26.1 MP",
          video: "4K DCI",
          stabilization: "No corpo",
        },
      },
    },
    {
      id: 5,
      name: {
        en: "Panasonic Lumix GH5 II",
        pt: "Panasonic Lumix GH5 II",
      },
      color: "Black",
      price: 1499.99,
      description: {
        en: "20.3MP Micro Four Thirds camera with unlimited 4K recording.",
        pt: "Câmera Micro Four Thirds de 20.3MP com gravação 4K ilimitada.",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/panasoniclumixgh5ii_black_1.jpg",
        "https://example.com/panasoniclumixgh5ii_black_2.jpg",
      ],
      technical_specs: {
        en: {
          sensor: "20.3 MP",
          video: "4K 60p",
          connectivity: "Wi-Fi, Bluetooth",
        },
        pt: {
          sensor: "20.3 MP",
          video: "4K 60p",
          connectivity: "Wi-Fi, Bluetooth",
        },
      },
    },
    {
      id: 6,
      name: {
        en: "Canon EOS R5",
        pt: "Canon EOS R5",
      },
      color: "White",
      price: 3899.99,
      description: {
        en: "45MP full-frame mirrorless camera with 8K video recording.",
        pt: "Câmera mirrorless full-frame de 45MP com gravação de vídeo 8K.",
      },
      discount: 35, // Produto com desconto
      images: [
        "https://example.com/canoneosr5_white_1.jpg",
        "https://example.com/canoneosr5_white_2.jpg",
      ],
      technical_specs: {
        en: {
          sensor: "45 MP",
          video: "8K",
          connectivity: "Wi-Fi, Bluetooth",
        },
        pt: {
          sensor: "45 MP",
          video: "8K",
          connectivity: "Wi-Fi, Bluetooth",
        },
      },
    },
    {
      id: 7,
      name: {
        en: "Sony Alpha A1",
        pt: "Sony Alpha A1",
      },
      color: "White",
      price: 6499.99,
      description: {
        en: "50.1MP full-frame mirrorless camera with 8K video and 30fps shooting.",
        pt: "Câmera mirrorless full-frame de 50.1MP com vídeo 8K e disparo a 30fps.",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/sonyalphaa1_white_1.jpg",
        "https://example.com/sonyalphaa1_white_2.jpg",
      ],
      technical_specs: {
        en: {
          sensor: "50.1 MP",
          video: "8K",
          fps: "30 fps",
        },
        pt: {
          sensor: "50.1 MP",
          video: "8K",
          fps: "30 fps",
        },
      },
    },
    {
      id: 8,
      name: {
        en: "Nikon Z7 II",
        pt: "Nikon Z7 II",
      },
      color: "White",
      price: 2999.99,
      description: {
        en: "45.7MP full-frame mirrorless camera with 10-bit 4K video.",
        pt: "Câmera mirrorless full-frame de 45.7MP com vídeo 4K de 10 bits.",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/nikonz7ii_white_1.jpg",
        "https://example.com/nikonz7ii_white_2.jpg",
      ],
      technical_specs: {
        en: {
          sensor: "45.7 MP",
          video: "4K 10-bit",
          connectivity: "Wi-Fi, Bluetooth",
        },
        pt: {
          sensor: "45.7 MP",
          video: "4K 10-bit",
          connectivity: "Wi-Fi, Bluetooth",
        },
      },
    },
    {
      id: 9,
      name: {
        en: "Fujifilm GFX 100S",
        pt: "Fujifilm GFX 100S",
      },
      color: "White",
      price: 5999.99,
      description: {
        en: "102MP medium format camera with 4K video.",
        pt: "Câmera de formato médio de 102MP com vídeo 4K.",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/fujifilmgfx100s_white_1.jpg",
        "https://example.com/fujifilmgfx100s_white_2.jpg",
      ],
      technical_specs: {
        en: {
          sensor: "102 MP",
          video: "4K",
          stabilization: "In-body",
        },
        pt: {
          sensor: "102 MP",
          video: "4K",
          stabilization: "No corpo",
        },
      },
    },
    {
      id: 10,
      name: {
        en: "Leica Q2",
        pt: "Leica Q2",
      },
      color: "White",
      price: 4999.99,
      description: {
        en: "47.3MP full-frame compact camera with fixed 28mm lens.",
        pt: "Câmera compacta full-frame de 47.3MP com lente fixa de 28mm.",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/leicaq2_white_1.jpg",
        "https://example.com/leicaq2_white_2.jpg",
      ],
      technical_specs: {
        en: {
          sensor: "47.3 MP",
          lens: "28mm f/1.7",
          video: "4K",
        },
        pt: {
          sensor: "47.3 MP",
          lens: "28mm f/1.7",
          video: "4K",
        },
      },
    },
  ],
  headphones: [
    {
      id: 1,
      name: {
        en: "Sony WH-1000XM4",
        pt: "Sony WH-1000XM4",
      },
      color: "Black",
      price: 349.99,
      description: {
        en: "Industry-leading noise canceling over-ear headphones.",
        pt: "Fones de ouvido com cancelamento de ruído líder da indústria.",
      },
      discount: 35, // Produto com desconto
      images: [
        "https://example.com/sony_wh1000xm4_black_1.jpg",
        "https://example.com/sony_wh1000xm4_black_2.jpg",
      ],
      technical_specs: {
        en: {
          battery_life: "30 hours",
          noise_canceling: "Yes",
          bluetooth: "5.0",
        },
        pt: {
          battery_life: "30 horas",
          noise_canceling: "Sim",
          bluetooth: "5.0",
        },
      },
    },
    {
      id: 2,
      name: {
        en: "Bose 700",
        pt: "Bose 700",
      },
      color: "White",
      price: 379.99,
      description: {
        en: "Wireless noise-canceling headphones with Alexa voice control.",
        pt: "Fones de ouvido com cancelamento de ruído e controle por voz Alexa.",
      },
      discount: 35, // Produto com desconto
      images: [
        "https://example.com/bose_700_white_1.jpg",
        "https://example.com/bose_700_white_2.jpg",
      ],
      technical_specs: {
        en: {
          battery_life: "20 hours",
          noise_canceling: "Yes",
          bluetooth: "5.0",
        },
        pt: {
          battery_life: "20 horas",
          noise_canceling: "Sim",
          bluetooth: "5.0",
        },
      },
    },
    {
      id: 3,
      name: {
        en: "Apple AirPods Max",
        pt: "Apple AirPods Max",
      },
      color: "White",
      price: 549.99,
      description: {
        en: "Over-ear headphones with high-fidelity audio and noise cancellation.",
        pt: "Fones de ouvido over-ear com áudio de alta fidelidade e cancelamento de ruído.",
      },
      discount: 0, // Sem desconto
      images: [
        "https://example.com/airpods_max_white_1.jpg",
        "https://example.com/airpods_max_white_2.jpg",
      ],
      technical_specs: {
        en: {
          battery_life: "20 hours",
          noise_canceling: "Yes",
          bluetooth: "5.0",
        },
        pt: {
          battery_life: "20 horas",
          noise_canceling: "Sim",
          bluetooth: "5.0",
        },
      },
    },
    {
      id: 4,
      name: {
        en: "Jabra Elite 85h",
        pt: "Jabra Elite 85h",
      },
      color: "Black",
      price: 249.99,
      description: {
        en: "Smart noise-canceling headphones with long battery life.",
        pt: "Fones de ouvido inteligentes com cancelamento de ruído e longa duração de bateria.",
      },
      discount: 0, // Sem desconto
      images: [
        "https://example.com/jabra_elite85h_black_1.jpg",
        "https://example.com/jabra_elite85h_black_2.jpg",
      ],
      technical_specs: {
        en: {
          battery_life: "36 hours",
          noise_canceling: "Yes",
          bluetooth: "5.0",
        },
        pt: {
          battery_life: "36 horas",
          noise_canceling: "Sim",
          bluetooth: "5.0",
        },
      },
    },
    {
      id: 5,
      name: {
        en: "Sennheiser Momentum 3",
        pt: "Sennheiser Momentum 3",
      },
      color: "Black",
      price: 399.99,
      description: {
        en: "Premium over-ear wireless headphones with noise cancellation.",
        pt: "Fones de ouvido over-ear sem fio premium com cancelamento de ruído.",
      },
      discount: 0, // Sem desconto
      images: [
        "https://example.com/sennheiser_momentum3_black_1.jpg",
        "https://example.com/sennheiser_momentum3_black_2.jpg",
      ],
      technical_specs: {
        en: {
          battery_life: "17 hours",
          noise_canceling: "Yes",
          bluetooth: "5.0",
        },
        pt: {
          battery_life: "17 horas",
          noise_canceling: "Sim",
          bluetooth: "5.0",
        },
      },
    },
    {
      id: 6,
      name: {
        en: "Beats Solo Pro",
        pt: "Beats Solo Pro",
      },
      color: "White",
      price: 299.99,
      description: {
        en: "On-ear headphones with active noise cancellation.",
        pt: "Fones de ouvido on-ear com cancelamento de ruído ativo.",
      },
      discount: 0, // Sem desconto
      images: [
        "https://example.com/beats_solopro_white_1.jpg",
        "https://example.com/beats_solopro_white_2.jpg",
      ],
      technical_specs: {
        en: {
          battery_life: "22 hours",
          noise_canceling: "Yes",
          bluetooth: "5.0",
        },
        pt: {
          battery_life: "22 horas",
          noise_canceling: "Sim",
          bluetooth: "5.0",
        },
      },
    },
    {
      id: 7,
      name: {
        en: "Audio-Technica ATH-M50xBT",
        pt: "Audio-Technica ATH-M50xBT",
      },
      color: "Black",
      price: 179.99,
      description: {
        en: "Wireless studio headphones with excellent sound quality.",
        pt: "Fones de ouvido sem fio de estúdio com excelente qualidade de som.",
      },
      discount: 35, // Produto com desconto
      images: [
        "https://example.com/audio_technica_m50xbt_black_1.jpg",
        "https://example.com/audio_technica_m50xbt_black_2.jpg",
      ],
      technical_specs: {
        en: {
          battery_life: "40 hours",
          noise_canceling: "No",
          bluetooth: "5.0",
        },
        pt: {
          battery_life: "40 horas",
          noise_canceling: "Não",
          bluetooth: "5.0",
        },
      },
    },
    {
      id: 8,
      name: {
        en: "Marshall Major IV",
        pt: "Marshall Major IV",
      },
      color: "Black",
      price: 149.99,
      description: {
        en: "Iconic wireless on-ear headphones with 80+ hours of battery life.",
        pt: "Fones de ouvido on-ear icônicos com mais de 80 horas de bateria.",
      },
      discount: 0, // Sem desconto
      images: [
        "https://example.com/marshall_major4_black_1.jpg",
        "https://example.com/marshall_major4_black_2.jpg",
      ],
      technical_specs: {
        en: {
          battery_life: "80+ hours",
          noise_canceling: "No",
          bluetooth: "5.0",
        },
        pt: {
          battery_life: "80+ horas",
          noise_canceling: "Não",
          bluetooth: "5.0",
        },
      },
    },
    {
      id: 9,
      name: {
        en: "AKG N700NC M2",
        pt: "AKG N700NC M2",
      },
      color: "Black",
      price: 299.99,
      description: {
        en: "Noise-canceling over-ear headphones with rich sound and long battery life.",
        pt: "Fones de ouvido over-ear com cancelamento de ruído, som rico e longa duração de bateria.",
      },
      discount: 0, // Sem desconto
      images: [
        "https://example.com/akg_n700nc_black_1.jpg",
        "https://example.com/akg_n700nc_black_2.jpg",
      ],
      technical_specs: {
        en: {
          battery_life: "23 hours",
          noise_canceling: "Yes",
          bluetooth: "5.0",
        },
        pt: {
          battery_life: "23 horas",
          noise_canceling: "Sim",
          bluetooth: "5.0",
        },
      },
    },
    {
      id: 10,
      name: {
        en: "Beyerdynamic DT 770 Pro",
        pt: "Beyerdynamic DT 770 Pro",
      },
      color: "Black",
      price: 159.99,
      description: {
        en: "Closed-back studio headphones for professional recording and monitoring.",
        pt: "Fones de ouvido de estúdio fechados para gravação e monitoramento profissional.",
      },
      discount: 0, // Sem desconto
      images: [
        "https://example.com/beyerdynamic_dt770pro_black_1.jpg",
        "https://example.com/beyerdynamic_dt770pro_black_2.jpg",
      ],
      technical_specs: {
        en: {
          battery_life: "No battery (wired)",
          noise_canceling: "No",
          bluetooth: "No",
        },
        pt: {
          battery_life: "Sem bateria (com fio)",
          noise_canceling: "Não",
          bluetooth: "Não",
        },
      },
    },
  ],
};

export default ProductsData;
