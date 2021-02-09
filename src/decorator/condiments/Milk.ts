import Coffee from "../Coffee";
import CoffeeDecorator from "../CoffeeDecorator";

class Milk extends CoffeeDecorator {
  constructor (beverage: Coffee) {
    super();
    this.decoratedCoffee = beverage;
  }

  public getDescription(): string {
    return this.decoratedCoffee.getDescription() + ', Milk';
  }

  public cost(): number {
    return this.decoratedCoffee.cost() + .20;
  }
}

export default Milk;