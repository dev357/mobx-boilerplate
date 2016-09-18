import {Router} from 'director';
import {autorun} from 'mobx';

export function startRouter(view, layout) {

  // update state on url change
  const router = new Router({
    '/': () => view.showHome(),
    '/counter': () => view.showCounter(),
    '/about': () => view.showAbout(),
  });
  router.configure({
    notfound: () => view.showNotFound(),
    html5history: true
  });
  router.init();

  // update url on state changes
  autorun(() => {
    const path = view.currentPath;
    if (path !== window.location.pathname) {
      window.history.pushState(null, null, path);
      if (!layout.sideBarDocked && layout.sideBarOpen) {
        layout.toggleSideBarOpen();
      }
    }
  })
}