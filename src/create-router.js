import createRouter from 'router5';
import loggerPlugin from 'router5/plugins/logger';
import listenersPlugin from 'router5/plugins/listeners';
import browserPlugin from 'router5/plugins/browser';
import routes from './routes';
import {autorun} from 'mobx';

export default function configureRouter() {
  const router = createRouter(routes, {
    defaultRoute: 'inbox'
  })
    .usePlugin(loggerPlugin)
    .usePlugin(browserPlugin())
    .usePlugin(listenersPlugin());

  // autorun(() => {
  //   // if (!router.getState()) return;
  //   const path = router.getState().path;
  //   console.log('path change?', path);
  //   if (path !== window.location.pathname) {
  //     window.history.pushState(null, null, path);
  //   }
  // });

  return router;
}