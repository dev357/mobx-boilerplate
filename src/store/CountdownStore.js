import {observable, computed, action} from 'mobx';
import {bind} from 'decko';

class CountdownStore {
  @observable time = 0;
  startTime = 0;
  interval = null;
  isRunning = false;

  constructor(startTime = 10) {
    this.startTime = startTime;
    this.time = this.startTime;

    this.startCountdown();
  }

  @bind @action decrementTime() {
    this.time -= 1;
    if (this.time <= 0) {
      console.log('smaller');
      this.stopCountdown();
    }
  }

  @bind @action resetCountdown() {
    this.stopCountdown();
    this.time = this.startTime;
    this.startCountdown();
  }

  @bind @action stopCountdown() {
    clearInterval(this.interval);
    this.isRunning = false;
  }

  @bind @action startCountdown() {
    this.isRunning = true;
    this.interval = setInterval(this.decrementTime, 1000);
  }
}

export default CountdownStore;
