import Coffee from "../Coffee";

class Espresso extends Coffee {
  public description = 'Espresso';

  public cost(): number {
    return 1.99;
  }
}

export default Espresso;