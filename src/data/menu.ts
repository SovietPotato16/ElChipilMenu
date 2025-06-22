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

export const platillos: Platillo[] = [
  {
    id: 1,
    nombre: "Tacos de Pato Confitado",
    descripcion: "Pato confitado con salsa de tamarindo, cebolla morada encurtida y cilantro fresco en tortilla de maíz azul",
    precio: 380,
    picante: 1,
    categoria: "Tacos Gourmet",
    imagen: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    nombre: "Mole Negro Oaxaqueño",
    descripcion: "Pollo orgánico bañado en mole negro de 28 ingredientes, arroz rojo y tortillas hechas a mano",
    precio: 420,
    picante: 2,
    categoria: "Platos Fuertes",
    imagen: "https://images.unsplash.com/photo-1563379091339-03246963d96a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    nombre: "Ceviche de Robalo",
    descripcion: "Robalo fresco marinado en limón, chile serrano, aguacate, pepino y cebolla morada",
    precio: 295,
    picante: 2,
    categoria: "Entradas",
    imagen: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    nombre: "Cochinita Pibil Premium",
    descripcion: "Cerdo marinado 24 horas en achiote, cocido en hoja de plátano, con cebolla encurtida",
    precio: 365,
    picante: 1,
    categoria: "Especialidades",
    imagen: "https://images.unsplash.com/photo-1615361200098-635299ec42bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 5,
    nombre: "Guacamole del Chef",
    descripcion: "Aguacate hass, jitomate cherry, chile serrano, granada roja, queso de cabra y totopos artesanales",
    precio: 185,
    picante: 1,
    categoria: "Entradas",
    imagen: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 6,
    nombre: "Chiles en Nogada Gourmet",
    descripcion: "Chile poblano relleno de picadillo de res, nuez de castilla, granada y perejil",
    precio: 385,
    picante: 0,
    categoria: "Especialidades",
    imagen: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 7,
    nombre: "Tacos de Pescado Zarandeado",
    descripcion: "Pescado del día marinado en chiles y especias, salsa verde, col morada y limón",
    precio: 320,
    picante: 3,
    categoria: "Tacos Gourmet",
    imagen: "https://images.unsplash.com/photo-1559847844-d022a0056cd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 8,
    nombre: "Flan de Cajeta",
    descripcion: "Flan tradicional mexicano con cajeta de Celaya, nuez caramelizada y flor de sal",
    precio: 145,
    picante: 0,
    categoria: "Postres",
    imagen: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 9,
    nombre: "Pulpo a las Brasas",
    descripcion: "Pulpo tierno a las brasas con salsa de chile pasilla, puré de frijol negro y microgreens",
    precio: 445,
    picante: 2,
    categoria: "Platos Fuertes",
    imagen: "https://images.unsplash.com/photo-1559847844-d022a0056cd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 10,
    nombre: "Tres Leches de Vainilla",
    descripcion: "Bizcocho empapado en tres leches, vainilla de Papantla y canela de Ceylon",
    precio: 125,
    picante: 0,
    categoria: "Postres",
    imagen: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 11,
    nombre: "Tacos de Carnitas Michoacanas",
    descripcion: "Carnitas tradicionales de cerdo confitado, salsa verde tatemada, cebolla y cilantro",
    precio: 285,
    picante: 1,
    categoria: "Tacos Gourmet",
    imagen: "https://images.unsplash.com/photo-1559847844-d022a0056cd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 12,
    nombre: "Pozole Rojo Guerrerense",
    descripcion: "Pozole tradicional con cerdo, maíz cacahuazintle, chile guajillo y acompañamientos",
    precio: 245,
    picante: 3,
    categoria: "Platos Fuertes",
    imagen: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 13,
    nombre: "Sopa de Tortilla Gourmet",
    descripcion: "Caldo de jitomate con tiras de tortilla, aguacate, queso fresco, crema y chile pasilla",
    precio: 165,
    picante: 1,
    categoria: "Entradas",
    imagen: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 14,
    nombre: "Arrachera Premium",
    descripcion: "Arrachera de res angus marinada, guacamole, frijoles charros y tortillas de harina",
    precio: 485,
    picante: 0,
    categoria: "Platos Fuertes",
    imagen: "https://images.unsplash.com/photo-1615361200098-635299ec42bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 15,
    nombre: "Churros con Chocolate Abuelita",
    descripcion: "Churros recién hechos con azúcar y canela, acompañados de chocolate caliente especiado",
    precio: 135,
    picante: 0,
    categoria: "Postres",
    imagen: "https://images.unsplash.com/photo-1541599468348-e96984315921?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 16,
    nombre: "Quesadillas de Flor de Calabaza",
    descripcion: "Tortillas de maíz rellenas de flor de calabaza, epazote y queso oaxaca",
    precio: 195,
    picante: 0,
    categoria: "Entradas",
    imagen: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 17,
    nombre: "Mole Poblano Tradicional",
    descripcion: "Pollo en mole poblano con más de 20 ingredientes, arroz mexicano y tortillas",
    precio: 395,
    picante: 1,
    categoria: "Especialidades",
    imagen: "https://images.unsplash.com/photo-1563379091339-03246963d96a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 18,
    nombre: "Tacos de Cochinita Pibil",
    descripcion: "Cochinita pibil yucateca, cebolla morada encurtida, habanero y tortillas de maíz",
    precio: 295,
    picante: 3,
    categoria: "Tacos Gourmet",
    imagen: "https://images.unsplash.com/photo-1615361200098-635299ec42bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  // 10 platillos adicionales con niveles de picante variados
  {
    id: 19,
    nombre: "Aguachile Verde de Camarón",
    descripcion: "Camarones frescos marinados en limón y chile serrano, pepino, cebolla morada y aguacate",
    precio: 325,
    picante: 3,
    categoria: "Entradas",
    imagen: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 20,
    nombre: "Tacos de Rib Eye",
    descripcion: "Rib eye a la parrilla, salsa de chile morita, guacamole y tortillas de maíz criollo",
    precio: 420,
    picante: 2,
    categoria: "Tacos Gourmet",
    imagen: "https://images.unsplash.com/photo-1559847844-d022a0056cd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 21,
    nombre: "Salmón en Costra de Chía",
    descripcion: "Salmón atlántico con costra de chía y amaranto, salsa de chile poblano y verduras de temporada",
    precio: 465,
    picante: 1,
    categoria: "Platos Fuertes",
    imagen: "https://images.unsplash.com/photo-1559847844-d022a0056cd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 22,
    nombre: "Tamales Oaxaqueños",
    descripcion: "Tamales envueltos en hoja de plátano, rellenos de mole coloradito y pollo orgánico",
    precio: 235,
    picante: 2,
    categoria: "Especialidades",
    imagen: "https://images.unsplash.com/photo-1615361200361-e1b13b1fad70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 23,
    nombre: "Esquites Gourmet",
    descripcion: "Granos de elote con mayonesa de chipotle, queso cotija añejo, chile piquín y limón",
    precio: 125,
    picante: 2,
    categoria: "Entradas",
    imagen: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 24,
    nombre: "Cordero en Salsa de Granada",
    descripcion: "Pierna de cordero confitada con salsa de granada, chiles dulces y hierbas aromáticas",
    precio: 525,
    picante: 0,
    categoria: "Platos Fuertes",
    imagen: "https://images.unsplash.com/photo-1615361200098-635299ec42bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 25,
    nombre: "Mousse de Chocolate Mexicano",
    descripcion: "Mousse de chocolate de Tabasco con chile ancho, crema de vainilla y cacao nibs",
    precio: 155,
    picante: 1,
    categoria: "Postres",
    imagen: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 26,
    nombre: "Tacos de Pescado Baja California",
    descripcion: "Pescado empanizado con cerveza, col morada, pico de gallo y salsa de chipotle",
    precio: 295,
    picante: 2,
    categoria: "Tacos Gourmet",
    imagen: "https://images.unsplash.com/photo-1559847844-d022a0056cd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 27,
    nombre: "Enchiladas Suizas Premium",
    descripcion: "Enchiladas de pollo con salsa verde, crema ácida, queso manchego y cebolla blanca",
    precio: 285,
    picante: 1,
    categoria: "Especialidades",
    imagen: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 28,
    nombre: "Helado de Mamey con Tajín",
    descripcion: "Helado artesanal de mamey con chile tajín, galleta de amaranto y miel de agave",
    precio: 115,
    picante: 1,
    categoria: "Postres",
    imagen: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  }
];

export const bebidas: Bebida[] = [
  {
    id: 1,
    nombre: "Margarita Clásica",
    descripcion: "Tequila blanco, triple sec, jugo de limón fresco y sal en el borde.",
    precio: 165,
    categoria: "Cócteles",
    imagen: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alcoholica: true
  },
  {
    id: 2,
    nombre: "Agua de Horchata",
    descripcion: "Bebida tradicional de arroz con canela, vainilla y leche condensada.",
    precio: 65,
    categoria: "Sin Alcohol",
    imagen: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alcoholica: false
  },
  {
    id: 3,
    nombre: "Mezcal de la Casa",
    descripcion: "Mezcal artesanal de Oaxaca servido con sal de gusano y naranja.",
    precio: 155,
    categoria: "Cócteles",
    imagen: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alcoholica: true
  },
  {
    id: 4,
    nombre: "Cerveza Corona",
    descripcion: "Cerveza mexicana ligera servida con limón y sal.",
    precio: 95,
    categoria: "Cervezas",
    imagen: "https://images.unsplash.com/photo-1513569771920-c9e1d31714af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alcoholica: true
  },
  {
    id: 5,
    nombre: "Agua de Jamaica",
    descripcion: "Refrescante bebida de flor de jamaica endulzada naturalmente.",
    precio: 85,
    categoria: "Sin Alcohol",
    imagen: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alcoholica: false
  },
  {
    id: 6,
    nombre: "Vino Tinto Casa Madero",
    descripcion: "Vino tinto mexicano con notas frutales y especiadas.",
    precio: 320,
    categoria: "Vinos",
    imagen: "https://images.unsplash.com/photo-1506377872008-6645d6b29ddb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alcoholica: true
  },
  {
    id: 7,
    nombre: "Michelada",
    descripcion: "Cerveza Modelo con limón, sal, chamoy, clamato y salsas especiales.",
    precio: 115,
    categoria: "Cervezas",
    imagen: "https://images.unsplash.com/photo-1513569771920-c9e1d31714af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alcoholica: true
  },
  {
    id: 8,
    nombre: "Agua de Tamarindo",
    descripcion: "Bebida agridulce de tamarindo con un toque de chile.",
    precio: 70,
    categoria: "Sin Alcohol",
    imagen: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alcoholica: false
  },
  {
    id: 9,
    nombre: "Tequila Reposado",
    descripcion: "Tequila 100% agave reposado en barricas de roble.",
    precio: 220,
    categoria: "Destilados",
    imagen: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alcoholica: true
  },
  {
    id: 10,
    nombre: "Paloma",
    descripcion: "Tequila blanco con toronja fresca, limón y sal.",
    precio: 145,
    categoria: "Cócteles",
    imagen: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alcoholica: true
  },
  {
    id: 11,
    nombre: "Agua de Sandía",
    descripcion: "Refrescante agua de sandía con chile y limón.",
    precio: 75,
    categoria: "Sin Alcohol",
    imagen: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alcoholica: false
  },
  {
    id: 12,
    nombre: "Pulque Natural",
    descripcion: "Bebida ancestral fermentada del maguey, sabor natural.",
    precio: 280,
    categoria: "Destilados",
    imagen: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alcoholica: true
  },
  {
    id: 13,
    nombre: "Limonada",
    descripcion: "Limonada natural con agua mineral y hierbabuena.",
    precio: 80,
    categoria: "Sin Alcohol",
    imagen: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alcoholica: false
  },
  {
    id: 14,
    nombre: "Vino Blanco L.A. Cetto",
    descripcion: "Vino blanco de Baja California con notas cítricas.",
    precio: 185,
    categoria: "Vinos",
    imagen: "https://images.unsplash.com/photo-1506377872008-6645d6b29ddb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alcoholica: true
  },
  {
    id: 15,
    nombre: "Cerveza Dos Equis",
    descripcion: "Cerveza premium mexicana tipo lager.",
    precio: 105,
    categoria: "Cervezas",
    imagen: "https://images.unsplash.com/photo-1513569771920-c9e1d31714af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alcoholica: true
  },
  {
    id: 16,
    nombre: "Mojito Mexicano",
    descripcion: "Rum blanco con hierbabuena fresca, limón y chile.",
    precio: 125,
    categoria: "Cócteles",
    imagen: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alcoholica: true
  },
  {
    id: 17,
    nombre: "Agua Mineral",
    descripcion: "Agua mineral natural con limón.",
    precio: 75,
    categoria: "Sin Alcohol",
    imagen: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alcoholica: false
  },
  {
    id: 18,
    nombre: "Whisky Nacional",
    descripcion: "Whisky mexicano añejado con notas ahumadas.",
    precio: 195,
    categoria: "Destilados",
    imagen: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alcoholica: true
  },
  {
    id: 19,
    nombre: "Cerveza Artesanal",
    descripcion: "Cerveza artesanal mexicana de temporada.",
    precio: 95,
    categoria: "Cervezas",
    imagen: "https://images.unsplash.com/photo-1513569771920-c9e1d31714af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alcoholica: true
  },
  {
    id: 20,
    nombre: "Sangría Mexicana",
    descripcion: "Vino tinto con frutas tropicales y especias mexicanas.",
    precio: 175,
    categoria: "Cócteles",
    imagen: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alcoholica: true
  },
  {
    id: 21,
    nombre: "Tepache",
    descripcion: "Bebida fermentada de piña con canela y piloncillo.",
    precio: 70,
    categoria: "Sin Alcohol",
    imagen: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    alcoholica: false
  }
];

export const categoriasPlatillos = ["Entradas", "Tacos Gourmet", "Platos Fuertes", "Especialidades", "Postres"];
export const categoriasBebidas = ["Cócteles", "Destilados", "Vinos", "Cervezas", "Sin Alcohol"];