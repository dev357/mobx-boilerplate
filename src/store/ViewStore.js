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
    // router.addListener(this.updateRoute);

    autorun(() => {
      console.log('change!');
      // if (!router.getState()) return;
      this.currentPath = this.router.getState().path;
    });
  }

  @computed get currentRoute() {
    return router.getState();
  }

  @computed get isAuthenticated() {
    return this.currentUser !== null
  }

  @action updateRoute = () => {
    console.log('route change');
  };


}

export default ViewStore;