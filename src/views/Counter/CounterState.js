import {observable, action} from 'mobx';
import {bind} from 'decko';

class CounterState {
  @observable timer = 0;
  timerInterval = null;
  isRunning = false;

  constructor() {

  }

  @bind @action incrementTimer() {
    this.timer += 1;
  }

  @bind @action restartTimer() {
    this.stopTimer();
    this.timer = 0;
    this.startTimer();
  }

  @bind @action stopTimer() {
    clearInterval(this.timerInterval);
    this.isRunning = false;
  }

  @bind @action startTimer() {
    if (!this.isRunning) {
      this.timerInterval = setInterval(this.incrementTimer, 1000);
      this.isRunning = true;
    }
  }
}

const counterState = new CounterState();
export default counterState;