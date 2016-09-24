import {observable, computed, action} from 'mobx';
import {bind} from 'decko';
import CountdownStore from './CountdownStore';

class WhackAMoleStore {
  moles = [
    new CountdownStore(10),
    new CountdownStore(5),
    new CountdownStore(7),
    new CountdownStore(15),
    new CountdownStore(9)
  ];

  constructor() {

  }

  @bind @action addMole(time) {
    this.moles.push(new CountdownStore(time));
  }
}

const whackAMoleStore = new WhackAMoleStore();
export default whackAMoleStore;
