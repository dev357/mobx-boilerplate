import { observable, computed, action, autorun } from 'mobx';
import {createRouter} from 'router5';

import routes from '../routes';

class ViewStore {
  @observable currentPath = null;
  @observable currentUser = null;
  router = null;

  constructor(router) {
    this.router = router;
    console.log('adding listener');
    this.updateRoute();
    router.listen(::this.updateRoute);
  }

  @computed get currentComponent() {
    return routes.find(route => route.path === this.currentPath) || routes[0];
  }

  @computed get isAuthenticated() {
    return this.currentUser !== null
  }

  @action updateRoute() {
    this.currentPath = this.router.location.pathname;
  };
}

export default ViewStore;