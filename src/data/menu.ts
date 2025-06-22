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
    imagen: "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    nombre: "Mole Negro Oaxaqueño",
    descripcion: "Pollo orgánico bañado en mole negro de 28 ingredientes, arroz rojo y tortillas hechas a mano",
    precio: 420,
    picante: 2,
    categoria: "Platos Fuertes",
    imagen: "https://images.pexels.com/photos/5848392/pexels-photo-5848392.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    nombre: "Ceviche de Robalo",
    descripcion: "Robalo fresco marinado en limón, chile serrano, aguacate, pepino y cebolla morada",
    precio: 295,
    picante: 2,
    categoria: "Entradas",
    imagen: "https://images.pexels.com/photos/1234535/pexels-photo-1234535.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    nombre: "Cochinita Pibil Premium",
    descripcion: "Cerdo marinado 24 horas en achiote, cocido en hoja de plátano, con cebolla encurtida",
    precio: 365,
    picante: 1,
    categoria: "Especialidades",
    imagen: "https://images.pexels.com/photos/4518654/pexels-photo-4518654.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 5,
    nombre: "Guacamole del Chef",
    descripcion: "Aguacate hass, jitomate cherry, chile serrano, granada roja, queso de cabra y totopos artesanales",
    precio: 185,
    picante: 1,
    categoria: "Entradas",
    imagen: "https://images.pexels.com/photos/2878731/pexels-photo-2878731.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 6,
    nombre: "Chiles en Nogada Gourmet",
    descripcion: "Chile poblano relleno de picadillo de res, nuez de castilla, granada y perejil",
    precio: 385,
    picante: 0,
    categoria: "Especialidades",
    imagen: "https://images.pexels.com/photos/5949888/pexels-photo-5949888.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 7,
    nombre: "Tacos de Pescado Zarandeado",
    descripcion: "Pescado del día marinado en chiles y especias, salsa verde, col morada y limón",
    precio: 320,
    picante: 3,
    categoria: "Tacos Gourmet",
    imagen: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 8,
    nombre: "Flan de Cajeta",
    descripcion: "Flan tradicional mexicano con cajeta de Celaya, nuez caramelizada y flor de sal",
    precio: 145,
    picante: 0,
    categoria: "Postres",
    imagen: "https://images.pexels.com/photos/3992134/pexels-photo-3992134.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 9,
    nombre: "Pulpo a las Brasas",
    descripcion: "Pulpo tierno a las brasas con salsa de chile pasilla, puré de frijol negro y microgreens",
    precio: 445,
    picante: 2,
    categoria: "Platos Fuertes",
    imagen: "https://images.pexels.com/photos/5949069/pexels-photo-5949069.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 10,
    nombre: "Tres Leches de Vainilla",
    descripcion: "Bizcocho empapado en tres leches, vainilla de Papantla y canela de Ceylon",
    precio: 125,
    picante: 0,
    categoria: "Postres",
    imagen: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 11,
    nombre: "Tacos de Carnitas Michoacanas",
    descripcion: "Carnitas tradicionales de cerdo confitado, salsa verde tatemada, cebolla y cilantro",
    precio: 285,
    picante: 1,
    categoria: "Tacos Gourmet",
    imagen: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 12,
    nombre: "Pozole Rojo Guerrerense",
    descripcion: "Pozole tradicional con cerdo, maíz cacahuazintle, chile guajillo y acompañamientos",
    precio: 245,
    picante: 3,
    categoria: "Platos Fuertes",
    imagen: "https://images.pexels.com/photos/5949888/pexels-photo-5949888.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 13,
    nombre: "Sopa de Tortilla Gourmet",
    descripcion: "Caldo de jitomate con tiras de tortilla, aguacate, queso fresco, crema y chile pasilla",
    precio: 165,
    picante: 1,
    categoria: "Entradas",
    imagen: "https://images.pexels.com/photos/5848392/pexels-photo-5848392.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 14,
    nombre: "Arrachera Premium",
    descripcion: "Arrachera de res angus marinada, guacamole, frijoles charros y tortillas de harina",
    precio: 485,
    picante: 0,
    categoria: "Platos Fuertes",
    imagen: "https://images.pexels.com/photos/4518654/pexels-photo-4518654.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 15,
    nombre: "Churros con Chocolate Abuelita",
    descripcion: "Churros recién hechos con azúcar y canela, acompañados de chocolate caliente especiado",
    precio: 135,
    picante: 0,
    categoria: "Postres",
    imagen: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 16,
    nombre: "Quesadillas de Flor de Calabaza",
    descripcion: "Tortillas de maíz rellenas de flor de calabaza, epazote y queso oaxaca",
    precio: 195,
    picante: 0,
    categoria: "Entradas",
    imagen: "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 17,
    nombre: "Mole Poblano Tradicional",
    descripcion: "Pollo en mole poblano con más de 20 ingredientes, arroz mexicano y tortillas",
    precio: 395,
    picante: 1,
    categoria: "Especialidades",
    imagen: "https://images.pexels.com/photos/5848392/pexels-photo-5848392.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 18,
    nombre: "Tacos de Cochinita Pibil",
    descripcion: "Cochinita pibil yucateca, cebolla morada encurtida, habanero y tortillas de maíz",
    precio: 295,
    picante: 3,
    categoria: "Tacos Gourmet",
    imagen: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  // 10 platillos adicionales con niveles de picante variados
  {
    id: 19,
    nombre: "Aguachile Verde de Camarón",
    descripcion: "Camarones frescos marinados en limón y chile serrano, pepino, cebolla morada y aguacate",
    precio: 325,
    picante: 3,
    categoria: "Entradas",
    imagen: "https://images.pexels.com/photos/1234535/pexels-photo-1234535.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 20,
    nombre: "Tacos de Rib Eye",
    descripcion: "Rib eye a la parrilla, salsa de chile morita, guacamole y tortillas de maíz criollo",
    precio: 420,
    picante: 2,
    categoria: "Tacos Gourmet",
    imagen: "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 21,
    nombre: "Salmón en Costra de Chía",
    descripcion: "Salmón atlántico con costra de chía y amaranto, salsa de chile poblano y verduras de temporada",
    precio: 465,
    picante: 1,
    categoria: "Platos Fuertes",
    imagen: "https://images.pexels.com/photos/5949069/pexels-photo-5949069.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 22,
    nombre: "Tamales Oaxaqueños",
    descripcion: "Tamales envueltos en hoja de plátano, rellenos de mole coloradito y pollo orgánico",
    precio: 235,
    picante: 2,
    categoria: "Especialidades",
    imagen: "https://images.pexels.com/photos/5848392/pexels-photo-5848392.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 23,
    nombre: "Esquites Gourmet",
    descripcion: "Granos de elote con mayonesa de chipotle, queso cotija añejo, chile piquín y limón",
    precio: 125,
    picante: 2,
    categoria: "Entradas",
    imagen: "https://images.pexels.com/photos/2878731/pexels-photo-2878731.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 24,
    nombre: "Cordero en Salsa de Granada",
    descripcion: "Pierna de cordero confitada con salsa de granada, chiles dulces y hierbas aromáticas",
    precio: 525,
    picante: 0,
    categoria: "Platos Fuertes",
    imagen: "https://images.pexels.com/photos/4518654/pexels-photo-4518654.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 25,
    nombre: "Mousse de Chocolate Mexicano",
    descripcion: "Mousse de chocolate de Tabasco con chile ancho, crema de vainilla y cacao nibs",
    precio: 155,
    picante: 1,
    categoria: "Postres",
    imagen: "https://images.pexels.com/photos/3992134/pexels-photo-3992134.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 26,
    nombre: "Tacos de Pescado Baja California",
    descripcion: "Pescado empanizado con cerveza, col morada, pico de gallo y salsa de chipotle",
    precio: 295,
    picante: 2,
    categoria: "Tacos Gourmet",
    imagen: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 27,
    nombre: "Enchiladas Suizas Premium",
    descripcion: "Enchiladas de pollo con salsa verde, crema ácida, queso manchego y cebolla blanca",
    precio: 285,
    picante: 1,
    categoria: "Especialidades",
    imagen: "https://images.pexels.com/photos/5949888/pexels-photo-5949888.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 28,
    nombre: "Helado de Mamey con Tajín",
    descripcion: "Helado artesanal de mamey con chile tajín, galleta de amaranto y miel de agave",
    precio: 115,
    picante: 1,
    categoria: "Postres",
    imagen: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

export const bebidas: Bebida[] = [
  {
    id: 1,
    nombre: "Mezcal Artesanal Espadin",
    descripcion: "Mezcal 100% agave espadin de Oaxaca, servido con sal de gusano y naranja",
    precio: 180,
    categoria: "Destilados",
    imagen: "https://images.pexels.com/photos/5947043/pexels-photo-5947043.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcoholica: true
  },
  {
    id: 2,
    nombre: "Margarita de Tamarindo",
    descripcion: "Tequila blanco, licor de tamarindo, limón fresco, chile tajín en el borde",
    precio: 165,
    categoria: "Cócteles",
    imagen: "https://images.pexels.com/photos/1535244/pexels-photo-1535244.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcoholica: true
  },
  {
    id: 3,
    nombre: "Agua de Jamaica con Hierbabuena",
    descripcion: "Agua fresca de flor de jamaica natural con hierbabuena y limón",
    precio: 65,
    categoria: "Sin Alcohol",
    imagen: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcoholica: false
  },
  {
    id: 4,
    nombre: "Paloma Gourmet",
    descripcion: "Tequila reposado, toronja rosa, agua mineral, sal de mar y chile piquín",
    precio: 155,
    categoria: "Cócteles",
    imagen: "https://images.pexels.com/photos/1535244/pexels-photo-1535244.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcoholica: true
  },
  {
    id: 5,
    nombre: "Cerveza Artesanal IPA",
    descripcion: "Cerveza artesanal mexicana tipo IPA con notas cítricas y amargor balanceado",
    precio: 95,
    categoria: "Cervezas",
    imagen: "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcoholica: true
  },
  {
    id: 6,
    nombre: "Horchata de Coco",
    descripcion: "Horchata tradicional con leche de coco, canela de Ceylon y almendras tostadas",
    precio: 85,
    categoria: "Sin Alcohol",
    imagen: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcoholica: false
  },
  {
    id: 7,
    nombre: "Vino Tinto Casa Madero",
    descripcion: "Vino tinto mexicano blend de cabernet sauvignon y merlot, Reserva Especial",
    precio: 320,
    categoria: "Vinos",
    imagen: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcoholica: true
  },
  {
    id: 8,
    nombre: "Michelada Especial",
    descripcion: "Cerveza clara con jugo de limón, salsa inglesa, chile piquín y sal de apio",
    precio: 115,
    categoria: "Cervezas",
    imagen: "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcoholica: true
  },
  {
    id: 9,
    nombre: "Agua de Tamarindo",
    descripcion: "Agua fresca de tamarindo natural con chile piquín y limón",
    precio: 70,
    categoria: "Sin Alcohol",
    imagen: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcoholica: false
  },
  {
    id: 10,
    nombre: "Tequila Añejo Premium",
    descripcion: "Tequila 100% agave añejo de 3 años, servido en copa de cristal",
    precio: 220,
    categoria: "Destilados",
    imagen: "https://images.pexels.com/photos/5947043/pexels-photo-5947043.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcoholica: true
  },
  {
    id: 11,
    nombre: "Mojito de Hierba Santa",
    descripcion: "Ron blanco, hierba santa, limón, azúcar de caña y agua mineral",
    precio: 145,
    categoria: "Cócteles",
    imagen: "https://images.pexels.com/photos/1535244/pexels-photo-1535244.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcoholica: true
  },
  {
    id: 12,
    nombre: "Agua de Horchata con Canela",
    descripcion: "Horchata de arroz tradicional con canela molida y leche condensada",
    precio: 75,
    categoria: "Sin Alcohol",
    imagen: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcoholica: false
  },
  // 10 bebidas adicionales
  {
    id: 13,
    nombre: "Mezcal Tobala Artesanal",
    descripcion: "Mezcal premium de agave tobala silvestre, notas florales y ahumadas únicas",
    precio: 280,
    categoria: "Destilados",
    imagen: "https://images.pexels.com/photos/5947043/pexels-photo-5947043.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcoholica: true
  },
  {
    id: 14,
    nombre: "Agua de Chía con Limón",
    descripcion: "Semillas de chía hidratadas con agua de limón, menta fresca y endulzante natural",
    precio: 80,
    categoria: "Sin Alcohol",
    imagen: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcoholica: false
  },
  {
    id: 15,
    nombre: "Sangría Mexicana",
    descripcion: "Vino tinto con frutas tropicales, tequila blanco, agua mineral y especias",
    precio: 185,
    categoria: "Vinos",
    imagen: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcoholica: true
  },
  {
    id: 16,
    nombre: "Cerveza de Trigo Artesanal",
    descripcion: "Cerveza de trigo mexicana con notas cítricas, servida con rodaja de naranja",
    precio: 105,
    categoria: "Cervezas",
    imagen: "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcoholica: true
  },
  {
    id: 17,
    nombre: "Carajillo Mexicano",
    descripcion: "Café espresso con licor 43, canela, cáscara de naranja y hielo",
    precio: 125,
    categoria: "Cócteles",
    imagen: "https://images.pexels.com/photos/1535244/pexels-photo-1535244.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcoholica: true
  },
  {
    id: 18,
    nombre: "Agua de Mango con Chile",
    descripcion: "Agua fresca de mango manila con chile piquín, limón y sal de mar",
    precio: 75,
    categoria: "Sin Alcohol",
    imagen: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcoholica: false
  },
  {
    id: 19,
    nombre: "Raicilla de la Costa",
    descripcion: "Destilado artesanal de agave de la costa de Jalisco, servido con sal y limón",
    precio: 195,
    categoria: "Destilados",
    imagen: "https://images.pexels.com/photos/5947043/pexels-photo-5947043.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcoholica: true
  },
  {
    id: 20,
    nombre: "Chelada Preparada",
    descripcion: "Cerveza clara con jugo de limón, sal, chile piquín y salsa maggi",
    precio: 95,
    categoria: "Cervezas",
    imagen: "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcoholica: true
  },
  {
    id: 21,
    nombre: "Margarita de Mango Habanero",
    descripcion: "Tequila reposado, puré de mango, chile habanero, limón y sal de chile",
    precio: 175,
    categoria: "Cócteles",
    imagen: "https://images.pexels.com/photos/1535244/pexels-photo-1535244.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcoholica: true
  },
  {
    id: 22,
    nombre: "Agua de Hibisco con Jengibre",
    descripcion: "Infusión fría de flor de hibisco con jengibre fresco, miel de agave y limón",
    precio: 70,
    categoria: "Sin Alcohol",
    imagen: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600",
    alcoholica: false
  }
];

export const categoriasPlatillos = ["Entradas", "Tacos Gourmet", "Platos Fuertes", "Especialidades", "Postres"];
export const categoriasBebidas = ["Cócteles", "Destilados", "Vinos", "Cervezas", "Sin Alcohol"];