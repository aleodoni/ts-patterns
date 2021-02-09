import Coffee from "../Coffee";
import CoffeeDecorator from "../CoffeeDecorator";

class Sugar extends CoffeeDecorator {
  constructor (beverage: Coffee) {
    super();
    this.decoratedCoffee = beverage;
  }

  public getDescription(): string {
    return this.decoratedCoffee.getDescription() + ', Sugar';
  }

  public cost(): number {
    return this.decoratedCoffee.cost() + .20;
  }
}

export default Sugar;