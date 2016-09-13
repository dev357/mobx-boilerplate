import { observable, computed, action } from 'mobx';
import { fromPromise } from 'mobx-utils';

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
      case "risto": return "/risto/";
      case "piret": return "/piret/";
      case "notfound": return "/notfound/";
    }
  }

  @action showIndex() {
    this.currentView = {
      name: "index"
    }
  }

  @action showAbout() {
    this.currentView = {
      name: "about"
    }
  }

  @action showNotFound() {
    this.currentView = {
      name: "notfound"
    }
  }
}

export default ViewStore;