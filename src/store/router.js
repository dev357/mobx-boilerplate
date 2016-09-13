import {Router} from 'director';
import {autorun} from 'mobx';

export function startRouter(store) {

  // update state on url change
  const router = new Router({
    '/': () => store.showIndex(),
    '/about': () => store.showAbout(),
  });
  router.configure({
    notfound: () => store.showNotFound(),
    html5history: true
  });
  router.init();

  // update url on state changes
  autorun(() => {
    const path = store.currentPath;
    if (path !== window.location.pathname) window.history.pushState(null, null, path);
  })
}