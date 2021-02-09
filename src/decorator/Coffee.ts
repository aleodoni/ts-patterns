abstract class Coffee {
  public description!: string;

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}

export default Coffee;