import Subject from './Subject';
import Observer from './Observer';

class Fan implements Observer {
  private subject: Subject;

  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }

  update(temperature: number): void {
    if (temperature > 20) {
      console.log(`Fan: It's hot here, turning myself on...` );
    } else {
      console.log(`Fan: It's cool here, turning myself off...` );
    }
  }
}

export default Fan;