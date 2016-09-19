import { observable, computed, action } from 'mobx';
import {bind} from 'decko';

import counterStore from './CounterStore';

class ViewStore {
  fetch = null;

  @observable currentUser = null;
  @observable currentView = null;

  constructor(fetch) {
    this.fetch = fetch;
  }

  @computed get isAuthenticated() {
    return this.currentUser !== null
  }

  @computed get currentPath() {
    switch(this.currentView.name) {
      case "home": return "/";
      case "counter": return "/counter";
      case "about": return "/about";
      default: return "/notfound";
    }
  }

  @bind @action showHome() {
    this.currentView = {
      name: "home"
    }
  }

  @bind @action showCounter() {
    this.currentView = {
      name: "counter",
      store: counterStore
    }
  }

  @bind @action showAbout() {
    this.currentView = {
      name: "about"
    }
  }

  @bind @action showNotFound() {
    this.currentView = {
      name: "notfound"
    }
  }
}

export default ViewStore;