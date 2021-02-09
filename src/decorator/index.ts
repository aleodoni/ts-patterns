import Espresso from "./beverages/Espresso";
import Milk from "./condiments/Milk";
import Sugar from "./condiments/Sugar";

let coffee = new Espresso();
coffee = new Sugar(coffee);
coffee = new Milk(coffee);

console.log(coffee.getDescription());
console.log(coffee.cost());
