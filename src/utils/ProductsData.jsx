const ProductsData = {
  phones: [
    {
      id: 1,
      name: {
        en: "iPhone 14 Pro 128GB",
        pt: "iPhone 14 Pro 128GB",
      },
      color: "Black",
      price: 999.99,
      description: {
        en: "iPhone 14 Pro. Capture incredible detail with a 48MP Main camera. Experience iPhone in a whole new way with Dynamic Island and Always-On display. And get peace of mind with groundbreaking safety features.",
        pt: "iPhone 14 Pro. Capture detalhes incríveis com uma câmera principal de 48MP. Experimente o iPhone de uma maneira totalmente nova com a Ilha Dinâmica e a tela Sempre Ativa. E fique tranquilo com recursos de segurança inovadores.",
      },
      discount: 35, // Produto com desconto
      images: [
        "https://example.com/iphone14_black_1.jpg",
        "https://example.com/iphone14_black_2.jpg",
      ],
    },
    {
      id: 2,
      name: {
        en: "Samsung Galaxy S23",
        pt: "Samsung Galaxy S23",
      },
      color: "Black",
      price: 849.99,
      description: {
        en: "Galaxy AI is here. Search like never before, get real-time interpretation on a call, format your notes into a clear summary, and effortlessly edit your photos - all from your smartphone, all with AI. Get more out of your passions with the phone that is designed to elevate your everyday. Whether you are binge-watching shows or capturing shots for social, Galaxy S23 FE is jam-packed with features that help you get more out of whatever you are into including a long-lasting battery, a premium processor, a smooth and strong display, a triple-lens camera and more. ",
        pt: "O Galaxy AI está aqui. Pesquise como nunca antes, obtenha interpretação em tempo real em uma chamada, formate suas anotações em um resumo claro e edite suas fotos sem esforço - tudo a partir do seu smartphone, tudo com IA. Aproveite ao máximo suas paixões com o telefone projetado para elevar seu dia a dia. Esteja você assistindo a programas ou capturando fotos para redes sociais, o Galaxy S23 FE está repleto de recursos que ajudam você a aproveitar melhor o que quiser, incluindo uma bateria de longa duração, um processador premium, uma tela suave e forte, uma câmera de lente tripla e muito mais.",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/galaxys23_white_1.jpg",
        "https://example.com/galaxys23_white_2.jpg",
      ],
    },
    {
      id: 3,
      name: {
        en: "Google Pixel 7 Pro",
        pt: "Google Pixel 7 Pro",
      },
      color: "Black",
      price: 599.99,
      description: {
        en: "Introducing Pixel 7 Pro, Google is best-of-everything phone. Powered by Google Tensor G2, it is fast and secure, with an immersive display and amazing battery life. The best Pixel camera yet includes a telephoto lens and pro-level features like Macro Focus. And with the certified Titan M2 security chip and a built-in VPN, Pixel helps protect your personal data.",
        pt: "Apresentando o Pixel 7 Pro, o melhor telefone do Google. Alimentado pelo Google Tensor G2, é rápido e seguro, com uma tela imersiva e incrível duração da bateria. A melhor câmera Pixel até agora inclui uma lente telefoto e recursos de nível profissional, como Macro Focus. E com o chip de segurança certificado Titan M2 e uma VPN integrada, o Pixel ajuda a proteger seus dados pessoais.",
      },
      discount: 35, // Produto com desconto
      images: ["https://example.com/pixel7_black_1.jpg", "https://example.com/pixel7_black_2.jpg"],
    },
    {
      id: 4,
      name: {
        en: "OnePlus 12",
        pt: "OnePlus 12",
      },
      color: "Black",
      price: 799.99,
      description: {
        en: "The NEW OnePlus 12 is powered by Snapdragon 8 Gen 3, with up to 16GB of RAM. With the fastest wireless charging in North America, it powers through everything effortlessly. Enjoy all your content on a brilliant 120Hz Super Fluid AMOLED display, with dynamic refresh rate. The 4th Generation Hasselblad Camera System for Mobile captures incredible photos & videos, making the OnePlus 12 the perfect everyday companion for capturing your favorite memories. Packed with premium hardware specs & intuitive OxygenOS 14 software, the OnePlus 12 is our most complete smartphone experience. Only when using the 50W AIRVOOC Charger by OnePlus. ",
        pt: "O NOVO OnePlus 12 é alimentado pelo Snapdragon 8 Gen 3, com até 16 GB de RAM. Com o carregamento sem fio mais rápido da América do Norte, ele passa por tudo sem esforço. Desfrute de todo o seu conteúdo em uma tela AMOLED Super Fluid de 120 Hz brilhante, com taxa de atualização dinâmica. O Sistema de Câmera Hasselblad de 4ª Geração para Celular captura fotos e vídeos incríveis, tornando o OnePlus 12 o companheiro perfeito para o dia a dia para capturar suas memórias favoritas. Embalado com especificações de hardware premium e software intuitivo OxygenOS 14, o OnePlus 12 é a nossa experiência de smartphone mais completa. Somente ao usar o carregador AIRVOOC de 50 W da OnePlus. ",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/oneplus11_green_1.jpg",
        "https://example.com/oneplus11_green_2.jpg",
      ],
    },
    {
      id: 5,
      name: {
        en: "Xiaomi 13T",
        pt: "Xiaomi 13T",
      },
      color: "Black",
      price: 749.99,
      description: {
        en: "The Xiaomi 13T is an advanced and comprehensive Android smartphone in all points of view with some excellent features. It has a large display of 6.67 inches with a resolution of 2712x1220 pixels. The features offered by the Xiaomi 13T are many and innovative. Starting with 5G that allows data transfer and excellent internet browsing. We emphasize the excellent internal memory of 256 GB but without the possibility of expansion. The Xiaomi 13T is a product with few competitors in terms of multimedia thanks to the 50-megapixel camera that allows the Xiaomi 13T to take fantastic photos with a resolution of 8165x6124 pixels and record videos in 4K at the astonishing resolution of 3840x2160 pixels. Very thin, 8.5 millimeters, which makes the Xiaomi 13T really interesting.",
        pt: "O Xiaomi 13T é um smartphone Android avançado e abrangente em todos os pontos de vista com algumas características excelentes. Tem uma grande tela de 6.67 polegadas com uma resolução de 2712x1220 pixels. As funcionalidades oferecidas pelo Xiaomi 13T são muitas e inovadoras. Começando pelo 5G que permite a transferência de dados e excelente navegação na internet. Enfatizamos a excelente memória interna de 256 GB mas sem a possibilidade de expansão. O Xiaomi 13T é um produto com poucos concorrentes em termos de multimídia graças à câmera de 50 megapixels que permite ao Xiaomi 13T tirar fotos fantásticas com uma resolução de 8165x6124 pixels e gravar vídeos em 4K a espantosa resolução de 3840x2160 pixels. Muito fino, 8.5 milímetros, o que torna o Xiaomi 13T realmente interessante.",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/xiaomi12tpro_black_1.jpg",
        "https://example.com/xiaomi12tpro_black_2.jpg",
      ],
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
        en: "Apple M2 chip with 10-core CPU.",
        pt: "Chip Apple M2 com CPU de 10 núcleos.",
      },
      discount: 35, // Produto com desconto
      images: [
        "https://example.com/macbookair_black_1.jpg",
        "https://example.com/macbookair_black_2.jpg",
      ],
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
        en: "14.2-inch model with Apple M2 Pro chip and 16-core GPU.",
        pt: "Modelo de 14.2 polegadas com chip Apple M2 Pro e GPU de 16 núcleos.",
      },
      discount: 0, // Produto sem desconto
      images: [
        "https://example.com/macbookpro_silver_1.jpg",
        "https://example.com/macbookpro_silver_2.jpg",
      ],
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
