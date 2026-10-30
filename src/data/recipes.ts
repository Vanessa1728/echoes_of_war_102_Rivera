
export interface Recipe {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  time: number;
  difficulty: "Fácil" | "Intermedia";
  servings: number;
  ingredients: string[];
  preparation: string[];
}

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Enchiladas verdes",
    category: "Comida",
    description:
      "Deliciosas enchiladas bañadas en una cremosa salsa verde, acompañadas de pollo, crema, queso y cebolla.",
    image: "/images/enchiladas-verdes.jpg",
    time: 45,
    difficulty: "Fácil",
    servings: 4,
    ingredients: [
      "12 tortillas de maíz",
      "2 pechugas de pollo cocidas y deshebradas",
      "500 g de tomates verdes",
      "2 chiles serranos",
      "1/4 de cebolla",
      "1 diente de ajo",
      "1 taza de crema",
      "150 g de queso fresco",
      "Aceite vegetal",
      "Sal al gusto",
      "Cilantro al gusto"
    ],
    preparation: [
      "Hierve los tomates verdes y los chiles serranos hasta que estén suaves.",
      "Licúa los tomates, los chiles, la cebolla, el ajo, el cilantro y un poco de sal.",
      "Coloca la salsa en una olla y cocina durante 10 minutos.",
      "Calienta las tortillas ligeramente en aceite.",
      "Rellena cada tortilla con pollo deshebrado y dóblala.",
      "Acomoda las enchiladas en un plato y báñalas con la salsa verde.",
      "Agrega crema, queso fresco y cebolla al gusto.",
      "Sirve calientes y disfruta."
    ]
  },
  {
    id: 2,
    name: "Cheesecake de fresa",
    category: "Postre",
    description:
      "Un cheesecake suave y cremoso con una base crujiente de galleta y una deliciosa cubierta de fresas.",
    image: "/images/cheesecake-fresa.jpg",
    time: 60,
    difficulty: "Intermedia",
    servings: 8,
    ingredients: [
      "200 g de galletas María",
      "90 g de mantequilla derretida",
      "400 g de queso crema",
      "1 taza de crema para batir",
      "1/2 taza de azúcar",
      "1 cucharadita de esencia de vainilla",
      "10 g de grenetina sin sabor",
      "1/4 de taza de agua",
      "250 g de fresas frescas",
      "3 cucharadas de mermelada de fresa"
    ],
    preparation: [
      "Tritura las galletas María hasta obtener migajas finas.",
      "Mezcla las galletas con la mantequilla derretida.",
      "Coloca la mezcla en el fondo de un molde y presiona para formar la base.",
      "Refrigera la base durante 20 minutos.",
      "Hidrata la grenetina en el agua y después disuélvela siguiendo las instrucciones del producto.",
      "Bate el queso crema con el azúcar y la vainilla hasta conseguir una mezcla suave.",
      "Incorpora la crema para batir y mezcla.",
      "Agrega la grenetina disuelta e integra bien.",
      "Vierte la mezcla sobre la base de galleta.",
      "Refrigera durante al menos 6 horas o hasta que esté firme.",
      "Decora con fresas frescas y mermelada antes de servir."
    ]
  }
];
