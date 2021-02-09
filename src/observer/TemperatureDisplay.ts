import Subject from './Subject';
import Observer from './Observer';

class TemperatureDisplay implements Observer {
  private subject: Subject;

  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }

  update(temperature: number): void {
    console.log(`TemperatureDisplay: I need to update my display`);
  }
}

export default TemperatureDisplay;