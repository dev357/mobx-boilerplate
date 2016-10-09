import { observable, computed, action, autorun } from 'mobx';
import {createRouter} from 'router5';

const routes = [
  {name: 'home', path: '/'},
  {name: 'about', path: '/about'},
  {name: 'counter', path: '/counter'}
];

const router = createRouter(routes);

class ViewStore {
  @observable currentPath = null;
  router = null;
  @observable currentUser = null;

  constructor(router) {
    this.router = router;
    console.log('adding listener');
    this.updateRoute = this.updateRoute.bind(this);
    this.updateRoute();
    router.addListener(this.updateRoute);
  }

  @computed get currentRoute() {
    return this.currentPath;
  }

  @computed get isAuthenticated() {
    return this.currentUser !== null
  }

  @action updateRoute() {
    this.currentPath = this.router.getState().path;
  };


}

export default ViewStore;