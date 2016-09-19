import {observable, computed, action} from 'mobx';
import {bind} from 'decko';

class CounterStore {
  @observable timer = 55;
  timerInterval = null;
  isRunning = false;

  constructor() {

  }

  @computed get minutes() {
    return this.addLeadingZeros(Math.floor(this.timer / 60), 2);
  }

  @computed get seconds() {
    return this.addLeadingZeros(this.timer % 60, 2);
  }

  @bind @action incrementTimer() {
    this.timer += 1;
  }

  @bind @action decrementTimer() {
    if (this.timer > 0) this.timer -= 1;
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

  addLeadingZeros(value, length) {
    let input = String(value);
    for (let i = input.length; i < length; i++) {
      input = '0' + input;
    }
    return input;
  }
}

const counterStore = new CounterStore();
export default counterStore;
