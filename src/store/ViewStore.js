import { observable, computed, action } from 'mobx';

import routes from '../routes';

class ViewStore {
  @observable currentPath = null;
  @observable currentUser = null;
  router = null;

  constructor(router) {
    this.router = router;
    this.updateRoute();
    router.listen(::this.updateRoute);
  }

  @computed get currentRoute() {
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