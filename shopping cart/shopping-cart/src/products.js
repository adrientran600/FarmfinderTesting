import egg from "./assets/egg.png";
import milk from "./assets/milk.png";
import cheese from "./assets/cheese.jpg";

const products = [
  {
    id: 1,
    name: "Eggs",
    img: egg,
  },
  {
    id: 2,
    name: "Milk",
    img: milk,
    types: ["Condensed Milk", "Fluid Milk", "Raw Milk"],
  },
  {
    id: 3,
    name: "Cheese",
    img: cheese,
  },
  {
    id: 4,
    name: "Beef",
    // img: beef,
  },
  {
    id: 5,
    name: "Yogurt",
    // img: beef,
  },
  {
    id: 6,
    name: "Soy",
    // img: beef,
  },
];

export default products;
