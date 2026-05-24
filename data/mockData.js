const RECIPES = [
    {
        id: 1,
        title: "Ceviche Clásico",
        description: "El plato bandera del Perú. Pescado fresco marinado en limón, con cebolla, culantro y ají limo.",
        image: "https://app.trickle.so/storage/public/images/usr_1cbe9cfb40000001/749395c6-70a7-4d93-9a55-16238bc0517c.png",
        tags: ["Marino", "Fresco", "Picante"],
        time: "30 min",
        difficulty: "Media",
        ingredients: [
            "1 kg de filete de pescado fresco (lenguado, corvina)",
            "15-20 limones jugosos",
            "1 cebolla roja grande cortada en pluma",
            "1 ají limo picado finamente",
            "Culantro (cilantro) picado",
            "Sal y pimienta al gusto",
            "Acompañamientos: Choclo desgranado, camote sancochado, cancha serrana"
        ],
        steps: [
            "Cortar el pescado en cubos de aproximadamente 2 cm.",
            "Colocar el pescado en un bol frío, agregar sal y mezclar.",
            "Añadir el ají limo y el culantro picado.",
            "Exprimir los limones directamente sobre el pescado (sin apretar demasiado para evitar el amargor).",
            "Mezclar suavemente y dejar marinar por unos 2-3 minutos.",
            "Agregar la cebolla cortada en pluma y mezclar.",
            "Servir inmediatamente acompañado de choclo, camote y cancha."
        ]
    },
    {
        id: 2,
        title: "Lomo Saltado",
        description: "Una fusión perfecta de la cocina peruana y china. Trozos de carne salteados al wok con verduras.",
        image: "https://app.trickle.so/storage/public/images/usr_1cbe9cfb40000001/6d62fab1-33db-4041-b816-1fb2e832c931.png",
        tags: ["Fusión", "Wok", "Carne"],
        time: "25 min",
        difficulty: "Fácil",
        ingredients: [
            "600g de lomo fino de res en tiras",
            "2 cebollas rojas en gajos gruesos",
            "3 tomates en gajos",
            "1 ají amarillo en tiras",
            "Sillao (salsa de soja) y vinagre tinto",
            "Culantro picado",
            "Papas fritas amarillas",
            "Arroz blanco graneado"
        ],
        steps: [
            "Sazonar la carne con sal, pimienta y un poco de comino.",
            "Calentar el wok o sartén hasta que humee y saltear la carne en tandas. Reservar.",
            "En el mismo wok, saltear la cebolla, el ají amarillo y luego el tomate por pocos segundos.",
            "Reincorporar la carne.",
            "Añadir un chorro de vinagre y luego el sillao. Flambear si es posible.",
            "Agregar el culantro picado y retirar del fuego.",
            "Servir inmediatamente sobre las papas fritas y acompañado de arroz."
        ]
    },
    {
        id: 3,
        title: "Ají de Gallina",
        description: "Cremoso guiso de pollo con ají amarillo, pan, leche y pecanas. Un clásico de la comida casera.",
        image: "https://app.trickle.so/storage/public/images/usr_1cbe9cfb40000001/04d55fcc-070b-4536-9a87-99882bb1c156.png",
        tags: ["Criollo", "Cremoso", "Pollo"],
        time: "50 min",
        difficulty: "Media",
        ingredients: [
            "1 pechuga de gallina o pollo sancochada y deshilachada",
            "1 taza de pasta de ají amarillo",
            "4 rebanadas de pan de molde remojadas en leche",
            "1 cebolla picada en cuadritos",
            "Ajos, pecanas picadas y queso parmesano",
            "Papas amarillas sancochadas y arroz",
            "Huevo duro y aceituna para decorar"
        ],
        steps: [
            "Hacer un aderezo con aceite, cebolla y ajos.",
            "Agregar la pasta de ají amarillo y cocinar bien hasta que se separe el aceite.",
            "Licuar el pan remojado con la leche y agregarlo al aderezo.",
            "Cocinar a fuego lento moviendo constantemente hasta que tome punto (espese).",
            "Agregar el pollo deshilachado y caldo si es necesario.",
            "Añadir las pecanas y el queso parmesano al final.",
            "Servir sobre papas y decorar con huevo y aceituna."
        ]
    },
    {
        id: 4,
        title: "Causa Limeña",
        description: "Suave masa de papa amarilla con limón y ají, rellena de pollo, atún o verduras.",
        image: "https://app.trickle.so/storage/public/images/usr_1cbe9cfb40000001/32733a10-78f0-4264-ab0c-b879b6988439.png",
        tags: ["Entrada", "Frío", "Papa"],
        time: "45 min",
        difficulty: "Fácil",
        ingredients: [
            "1 kg de papa amarilla prensada",
            "Pasta de ají amarillo",
            "Jugo de 3-4 limones",
            "Aceite vegetal",
            "Sal y pimienta",
            "Relleno: Pollo deshilachado con mayonesa, palta en láminas"
        ],
        steps: [
            "Amasar la papa prensada aún tibia con aceite, sal, pimienta, limón y pasta de ají amarillo hasta obtener una masa suave y moldeable.",
            "Mezclar el pollo con mayonesa.",
            "En un molde o aro, colocar una capa de masa de papa.",
            "Colocar láminas de palta y luego la mezcla de pollo.",
            "Cubrir con otra capa de masa de papa.",
            "Decorar con huevo duro, aceituna y salsa huancaína si se desea."
        ]
    }
];

const PLACES = [
    {
        id: 1,
        title: "Machu Picchu",
        description: "La ciudad perdida de los Incas. Una de las 7 maravillas del mundo moderno enclavada en los Andes.",
        image: "https://app.trickle.so/storage/public/images/usr_1cbe9cfb40000001/8edd761d-4c05-4193-a734-39e510128aab.png",
        location: "Cusco",
        type: "Arqueológico",
        details: "Machu Picchu es una ciudadela inca ubicada en las alturas de las montañas de los Andes en Perú, sobre el valle del río Urubamba. Construida en el siglo XV y luego abandonada, es famosa por sus sofisticadas paredes de piedra seca que combinan enormes bloques sin el uso de un mortero, los edificios fascinantes que se relacionan con las alineaciones astronómicas y sus vistas panorámicas. Su uso exacto sigue siendo un misterio.",
        tips: ["Reserva tus boletos con meses de anticipación.", "Lleva repelente de insectos y bloqueador solar.", "La mejor época es la estación seca (abril a octubre)."]
    },
    {
        id: 2,
        title: "Valle Sagrado",
        description: "Un valle fértil lleno de ruinas incas, pueblos tradicionales y paisajes impresionantes.",
        image: "https://app.trickle.so/storage/public/images/usr_1cbe9cfb40000001/e7514e31-04bb-4ea8-bb26-24e6c8eb017f.png",
        location: "Cusco",
        type: "Paisaje",
        details: "El Valle Sagrado de los Incas, en los Andes peruanos, está compuesto por numerosos ríos que descienden por quebradas y pequeños valles; posee numerosos monumentos arqueológicos y pueblos indígenas. Fue muy apreciado por los incas debido a sus especiales cualidades geográficas y climáticas. Es uno de los puntos de producción de maíz más importantes del Perú.",
        tips: ["Visita el mercado de Pisac un domingo.", "No te pierdas las salineras de Maras.", "Prueba el choclo con queso local."]
    },
    {
        id: 3,
        title: "Líneas de Nazca",
        description: "Misteriosos geoglifos gigantes en el desierto que solo pueden ser apreciados desde el aire.",
        image: "https://app.trickle.so/storage/public/images/usr_1cbe9cfb40000001/86dcb5c8-4c9a-4038-a172-c0d5e98e9551.png",
        location: "Ica",
        type: "Misterio",
        details: "Las Líneas de Nazca son un grupo de geoglifos precolombinos grabados en las arenas del desierto. Cubriendo un área de casi 1,000 kilómetros cuadrados, hay alrededor de 300 figuras diferentes, incluidas animales y plantas. Se componen de más de 10,000 líneas, algunas de las cuales miden 30 metros de ancho y se extienden más de 9 kilómetros.",
        tips: ["Toma una pastilla para el mareo antes del vuelo.", "Mejor volar temprano en la mañana para menos turbulencia.", "Visita también el cementerio de Chauchilla."]
    },
    {
        id: 4,
        title: "Centro Histórico de Lima",
        description: "La Ciudad de los Reyes, con su arquitectura colonial, balcones y catacumbas.",
        image: "https://app.trickle.so/storage/public/images/usr_1cbe9cfb40000001/184d2459-1975-476d-add6-ee0a3e9915b7.png",
        location: "Lima",
        type: "Colonial",
        details: "El Centro Histórico de Lima, conocido como la 'Ciudad de los Reyes', fue el centro político y administrativo más importante del Virreinato del Perú. Destaca por sus balcones de madera de la época virreinal, la Plaza Mayor, la Catedral de Lima y el Convento de San Francisco con sus famosas catacumbas.",
        tips: ["Prueba un Pisco Sour en el Hotel Bolívar.", "Visita el Museo de la Inquisición.", "Camina por el Jirón de la Unión."]
    }
];