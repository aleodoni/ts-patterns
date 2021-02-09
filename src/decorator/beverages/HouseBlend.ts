import Coffee from "../Coffee";

class HouseBlend extends Coffee {
  public description = 'House blend';

  public cost(): number {
    return .99;
  }
}

export default HouseBlend;