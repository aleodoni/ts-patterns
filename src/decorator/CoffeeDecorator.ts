import Coffee from "./Coffee";

abstract class CoffeeDecorator extends Coffee{
  decoratedCoffee!: Coffee;

  public abstract getDescription(): string;
}

export default CoffeeDecorator;