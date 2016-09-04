import { observable, computer, action } from 'mobx';
import { fromPromise } from 'mobx-utils';

export default class ViewStore {
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
      case "about": return "/about/";
      case "notfound": return "/notfound/";
    }
  }

  @action showAbout() {
    this.currentView = {
      name: "overview"
    }
  }

  @action showNotFound() {
    this.currentView = {
      name: "notfound"
    }
  }
}