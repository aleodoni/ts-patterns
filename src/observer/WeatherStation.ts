import Subject from './Subject';
import Observer from './Observer';

class WeatherStation implements Subject {
  private observers: Observer[] = [];
  private temperature!: number;

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  removeObserver(o: Observer): void {
    const index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }

  notifyObservers(): void {
    for (let observer of this.observers) {
      observer.update(this.temperature);
    }
  }

  setTemperature(temp: number) {
    console.log(`WeatherStation: new temperature measurement: ${temp}`);
    this.temperature = temp;
    this.notifyObservers();
  }
}

export default WeatherStation;