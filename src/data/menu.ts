export interface Platillo {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  picante: number; // 0-3 nivel de picante
  categoria: string;
  imagen: string;
}

export interface Bebida {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  imagen: string;
  alcoholica?: boolean;
}

// Platillos con imágenes locales asignadas
export const platillos: Platillo[] = [
  {
    id: 1,
    nombre: "Tacos de Pato Confitado",
    descripcion: "Pato confitado con salsa de tamarindo, cebolla morada encurtida y cilantro fresco en tortilla de maíz azul",
    precio: 380,
    picante: 1,
    categoria: "Tacos Gourmet",
    imagen: "/src/Images/tacosdepato.jpg"
  },
  {
    id: 2,
    nombre: "Mole Negro Oaxaqueño",
    descripcion: "Pollo orgánico bañado en mole negro de 28 ingredientes, arroz rojo y tortillas hechas a mano",
    precio: 420,
    picante: 2,
    categoria: "Platos Fuertes",
    imagen: "/src/Images/molenegro.jpg"
  },
  {
    id: 3,
    nombre: "Ceviche de Robalo",
    descripcion: "Robalo fresco marinado en limón, chile serrano, aguacate, pepino y cebolla morada",
    precio: 295,
    picante: 2,
    categoria: "Entradas",
    imagen: "/src/Images/Ceviche_robalo.jpg"
  },
  {
    id: 4,
    nombre: "Cochinita Pibil Premium",
    descripcion: "Cerdo marinado 24 horas en achiote, cocido en hoja de plátano, con cebolla encurtida",
    precio: 365,
    picante: 1,
    categoria: "Especialidades",
    imagen: "/src/Images/CochinitaPibil.jpg"
  },
  {
    id: 5,
    nombre: "Guacamole del Chef",
    descripcion: "Aguacate hass, jitomate cherry, chile serrano, granada roja, queso de cabra y totopos artesanales",
    precio: 185,
    picante: 1,
    categoria: "Entradas",
    imagen: "/src/Images/GuacamoleDelChef.jpg"
  },
  {
    id: 6,
    nombre: "Chiles en Nogada Gourmet",
    descripcion: "Chile poblano relleno de picadillo de res, nuez de castilla, granada y perejil",
    precio: 385,
    picante: 0,
    categoria: "Especialidades",
    imagen: "/src/Images/ChilesEnNogada.webp"
  },
  {
    id: 7,
    nombre: "Tacos de Pescado Zarandeado",
    descripcion: "Pescado del día marinado en chiles y especias, salsa verde, col morada y limón",
    precio: 320,
    picante: 3,
    categoria: "Tacos Gourmet",
    imagen: "/src/Images/TacosDePescasoZarandeado.avif"
  },
  {
    id: 8,
    nombre: "Flan de Cajeta",
    descripcion: "Flan tradicional mexicano con cajeta de Celaya, nuez caramelizada y flor de sal",
    precio: 145,
    picante: 0,
    categoria: "Postres",
    imagen: "/src/Images/FlandeCajeta.webp"
  },
  {
    id: 9,
    nombre: "Pulpo a las Brasas",
    descripcion: "Pulpo tierno a las brasas con salsa de chile pasilla, puré de frijol negro y microgreens",
    precio: 445,
    picante: 2,
    categoria: "Platos Fuertes",
    imagen: "/src/Images/PulpoAlasBrasas.jpg"
  },
  {
    id: 10,
    nombre: "Tres Leches de Vainilla",
    descripcion: "Bizcocho empapado en tres leches, vainilla de Papantla y canela de Ceylon",
    precio: 125,
    picante: 0,
    categoria: "Postres",
    imagen: "/src/Images/TresLechesdeVainilla.avif"
  },
  {
    id: 11,
    nombre: "Tacos de Carnitas Michoacanas",
    descripcion: "Carnitas tradicionales de cerdo confitado, salsa verde tatemada, cebolla y cilantro",
    precio: 285,
    picante: 1,
    categoria: "Tacos Gourmet",
    imagen: "/src/Images/TacosdeCarnitas.jpeg"
  },
  {
    id: 12,
    nombre: "Pozole Rojo Guerrerense",
    descripcion: "Pozole tradicional con cerdo, maíz cacahuazintle, chile guajillo y acompañamientos",
    precio: 245,
    picante: 3,
    categoria: "Platos Fuertes",
    imagen: "/src/Images/pozolerojo.jpeg"
  },
  {
    id: 13,
    nombre: "Sopa de Tortilla Gourmet",
    descripcion: "Caldo de jitomate con tiras de tortilla, aguacate, queso fresco, crema y chile pasilla",
    precio: 165,
    picante: 1,
    categoria: "Entradas",
    imagen: "/src/Images/SopaDeTortilla.avif"
  },
  {
    id: 14,
    nombre: "Arrachera Premium",
    descripcion: "Arrachera de res angus marinada, guacamole, frijoles charros y tortillas de harina",
    precio: 485,
    picante: 0,
    categoria: "Platos Fuertes",
    imagen: "/src/Images/ArracheraPremiujm.jpg"
  },
  {
    id: 15,
    nombre: "Churros con Chocolate Abuelita",
    descripcion: "Churros recién hechos con azúcar y canela, acompañados de chocolate caliente especiado",
    precio: 135,
    picante: 0,
    categoria: "Postres",
    imagen: "/src/Images/ChurrosconChocolateAbuelita.webp"
  },
  {
    id: 16,
    nombre: "Quesadillas de Flor de Calabaza",
    descripcion: "Tortillas de maíz rellenas de flor de calabaza, epazote y queso oaxaca",
    precio: 195,
    picante: 0,
    categoria: "Entradas",
    imagen: "/src/Images/QuesadillasFlordeCalabaza.webp"
  },
  {
    id: 17,
    nombre: "Mole Poblano Tradicional",
    descripcion: "Pollo en mole poblano con más de 20 ingredientes, arroz mexicano y tortillas",
    precio: 395,
    picante: 1,
    categoria: "Especialidades",
    imagen: "/src/Images/MolePoblano.jpg"
  },
  {
    id: 18,
    nombre: "Tacos de Cochinita Pibil",
    descripcion: "Cochinita pibil yucateca, cebolla morada encurtida, habanero y tortillas de maíz",
    precio: 295,
    picante: 3,
    categoria: "Tacos Gourmet",
    imagen: "/src/Images/CochinitaPibil.jpg"
  },
  {
    id: 19,
    nombre: "Aguachile Verde de Camarón",
    descripcion: "Camarones frescos marinados en limón y chile serrano, pepino, cebolla morada y aguacate",
    precio: 325,
    picante: 3,
    categoria: "Entradas",
    imagen: "/src/Images/AguachiledeCamaron.webp"
  },
  {
    id: 20,
    nombre: "Tacos de Rib Eye",
    descripcion: "Rib eye a la parrilla, salsa de chile morita, guacamole y tortillas de maíz criollo",
    precio: 420,
    picante: 2,
    categoria: "Tacos Gourmet",
    imagen: "/src/Images/TacosRibeye.jpeg"
  },
  {
    id: 21,
    nombre: "Salmón en Costra de Chía",
    descripcion: "Salmón atlántico con costra de chía y amaranto, salsa de chile poblano y verduras de temporada",
    precio: 465,
    picante: 1,
    categoria: "Platos Fuertes",
    imagen: "/src/Images/SalmonCostraChia.jpg"
  },
  {
    id: 22,
    nombre: "Tamales Oaxaqueños",
    descripcion: "Tamales envueltos en hoja de plátano, rellenos de mole coloradito y pollo orgánico",
    precio: 235,
    picante: 2,
    categoria: "Especialidades",
    imagen: "/src/Images/TamalesOaxaqueños.jpg"
  },
  {
    id: 23,
    nombre: "Esquites Gourmet",
    descripcion: "Granos de elote con mayonesa de chipotle, queso cotija añejo, chile piquín y limón",
    precio: 125,
    picante: 2,
    categoria: "Entradas",
    imagen: "/src/Images/EsquitesGourmet.jpg"
  },
  {
    id: 24,
    nombre: "Cordero en Salsa de Granada",
    descripcion: "Pierna de cordero confitada con salsa de granada, chiles dulces y hierbas aromáticas",
    precio: 525,
    picante: 0,
    categoria: "Platos Fuertes",
    imagen: "/src/Images/CorderoEnSalsadeGranada.jpg"
  },
  {
    id: 25,
    nombre: "Mousse de Chocolate Mexicano",
    descripcion: "Mousse de chocolate de Tabasco con chile ancho, crema de vainilla y cacao nibs",
    precio: 155,
    picante: 1,
    categoria: "Postres",
    imagen: "/src/Images/MousseChocolateMexicano.jpg"
  },
  {
    id: 26,
    nombre: "Tacos de Pescado Baja California",
    descripcion: "Pescado empanizado con cerveza, col morada, pico de gallo y salsa de chipotle",
    precio: 295,
    picante: 2,
    categoria: "Tacos Gourmet",
    imagen: "/src/Images/TacosPescadoBajaCalifornia.jpg"
  },
  {
    id: 27,
    nombre: "Enchiladas Suizas Premium",
    descripcion: "Enchiladas de pollo con salsa verde, crema ácida, queso manchego y cebolla blanca",
    precio: 285,
    picante: 1,
    categoria: "Especialidades",
    imagen: "/src/Images/EnchiladasSuizas.webp"
  },
  {
    id: 28,
    nombre: "Helado de Mamey con Tajín",
    descripcion: "Helado artesanal de mamey con chile tajín, galleta de amaranto y miel de agave",
    precio: 115,
    picante: 1,
    categoria: "Postres",
    imagen: "/src/Images/HeladoDeMamey.avif"
  }
];

// Bebidas con imágenes locales asignadas
export const bebidas: Bebida[] = [
  {
    id: 1,
    nombre: "Margarita Clásica",
    descripcion: "Tequila blanco, triple sec, jugo de limón fresco y sal en el borde.",
    precio: 165,
    categoria: "Cócteles",
    imagen: "/src/Images/Margarita.jpeg",
    alcoholica: true
  },
  {
    id: 2,
    nombre: "Agua de Horchata",
    descripcion: "Bebida tradicional de arroz con canela, vainilla y leche condensada.",
    precio: 65,
    categoria: "Sin Alcohol",
    imagen: "/src/Images/AguaDeHorchata.jpeg",
    alcoholica: false
  },
  {
    id: 3,
    nombre: "Mezcal de la Casa",
    descripcion: "Mezcal artesanal de Oaxaca servido con sal de gusano y naranja.",
    precio: 155,
    categoria: "Cócteles",
    imagen: "/src/Images/Mezcal.webp",
    alcoholica: true
  },
  {
    id: 4,
    nombre: "Cerveza Corona",
    descripcion: "Cerveza mexicana ligera servida con limón y sal.",
    precio: 95,
    categoria: "Cervezas",
    imagen: "/src/Images/CervezaCorona.jpeg",
    alcoholica: true
  },
  {
    id: 5,
    nombre: "Agua de Jamaica",
    descripcion: "Refrescante bebida de flor de jamaica endulzada naturalmente.",
    precio: 85,
    categoria: "Sin Alcohol",
    imagen: "/src/Images/AguadeJamaica.avif",
    alcoholica: false
  },
  {
    id: 6,
    nombre: "Vino Tinto Casa Madero",
    descripcion: "Vino tinto mexicano con notas frutales y especiadas.",
    precio: 320,
    categoria: "Vinos",
    imagen: "/src/Images/VinoTintoCasaMadero.avif",
    alcoholica: true
  },
  {
    id: 7,
    nombre: "Michelada",
    descripcion: "Cerveza Modelo con limón, sal, chamoy, clamato y salsas especiales.",
    precio: 115,
    categoria: "Cervezas",
    imagen: "/src/Images/Michelada.jpeg",
    alcoholica: true
  },
  {
    id: 8,
    nombre: "Agua de Tamarindo",
    descripcion: "Bebida agridulce de tamarindo con un toque de chile.",
    precio: 70,
    categoria: "Sin Alcohol",
    imagen: "/src/Images/Aguatamarindo.jpeg",
    alcoholica: false
  },
  {
    id: 9,
    nombre: "Tequila Reposado",
    descripcion: "Tequila 100% agave reposado en barricas de roble.",
    precio: 220,
    categoria: "Destilados",
    imagen: "/src/Images/TequilaReposado.png",
    alcoholica: true
  },
  {
    id: 10,
    nombre: "Paloma",
    descripcion: "Tequila blanco con toronja fresca, limón y sal.",
    precio: 145,
    categoria: "Cócteles",
    imagen: "/src/Images/Paloma.jpeg",
    alcoholica: true
  },
  {
    id: 11,
    nombre: "Agua de Sandía",
    descripcion: "Refrescante agua de sandía con chile y limón.",
    precio: 75,
    categoria: "Sin Alcohol",
    imagen: "/src/Images/AguaSandia.jpg",
    alcoholica: false
  },
  {
    id: 12,
    nombre: "Pulque Natural",
    descripcion: "Bebida ancestral fermentada del maguey, sabor natural.",
    precio: 280,
    categoria: "Destilados",
    imagen: "/src/Images/pulque.jpeg",
    alcoholica: true
  },
  {
    id: 13,
    nombre: "Limonada",
    descripcion: "Limonada natural con agua mineral y hierbabuena.",
    precio: 80,
    categoria: "Sin Alcohol",
    imagen: "/src/Images/Limonada.jpg",
    alcoholica: false
  },
  {
    id: 14,
    nombre: "Vino Blanco L.A. Cetto",
    descripcion: "Vino blanco de Baja California con notas cítricas.",
    precio: 185,
    categoria: "Vinos",
    imagen: "/src/Images/VinoBlancoLacetto.jpg",
    alcoholica: true
  },
  {
    id: 15,
    nombre: "Cerveza Dos Equis",
    descripcion: "Cerveza premium mexicana tipo lager.",
    precio: 105,
    categoria: "Cervezas",
    imagen: "/src/Images/CervezaDosequis.jpg",
    alcoholica: true
  },
  {
    id: 16,
    nombre: "Mojito Mexicano",
    descripcion: "Rum blanco con hierbabuena fresca, limón y chile.",
    precio: 125,
    categoria: "Cócteles",
    imagen: "/src/Images/Mojito mexicano.webp",
    alcoholica: true
  },
  {
    id: 17,
    nombre: "Agua Mineral",
    descripcion: "Agua mineral natural con limón.",
    precio: 75,
    categoria: "Sin Alcohol",
    imagen: "/src/Images/AguaMineral.jpeg",
    alcoholica: false
  },
  {
    id: 18,
    nombre: "Whisky Nacional",
    descripcion: "Whisky mexicano añejado con notas ahumadas.",
    precio: 195,
    categoria: "Destilados",
    imagen: "/src/Images/Whiskey nacional .webp",
    alcoholica: true
  },
  {
    id: 19,
    nombre: "Cerveza Artesanal",
    descripcion: "Cerveza artesanal mexicana de temporada.",
    precio: 95,
    categoria: "Cervezas",
    imagen: "/src/Images/CervezaArtesanal.webp",
    alcoholica: true
  },
  {
    id: 20,
    nombre: "Sangría Mexicana",
    descripcion: "Vino tinto con frutas tropicales y especias mexicanas.",
    precio: 175,
    categoria: "Cócteles",
    imagen: "/src/Images/Sangria.jpg",
    alcoholica: true
  },
  {
    id: 21,
    nombre: "Tepache",
    descripcion: "Bebida fermentada de piña con canela y piloncillo.",
    precio: 70,
    categoria: "Sin Alcohol",
    imagen: "/src/Images/Tepache.jpg",
    alcoholica: false
  }
];

export const categoriasPlatillos = ["Entradas", "Tacos Gourmet", "Platos Fuertes", "Especialidades", "Postres"];
export const categoriasBebidas = ["Cócteles", "Destilados", "Vinos", "Cervezas", "Sin Alcohol"];