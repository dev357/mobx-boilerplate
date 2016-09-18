import './main.css';

import {h, render} from 'preact';
import {useStrict} from 'mobx';
import {Provider} from 'mobx-react';
import ViewStore from './store/ViewStore';
import layoutStore from './store/LayoutStore';
import DevTools from 'mobx-react-devtools';
import {startRouter} from './store/router';
import {simpleFetch} from './store/fetch';

const viewStore = new ViewStore(simpleFetch);
startRouter(viewStore, layoutStore);

useStrict(true);

let root;
function renderApp() {
  const App = require('./views/App/App').default;
  root = render(
    <Provider view={viewStore} layout={layoutStore}>
      <App />
    </Provider>,
    document.body,
    root
  );
}

if (module.hot) {
  const flushLogs = flushHMRLogs();
  module.hot.accept('./views/App/App', () => requestAnimationFrame(() => {
    flushLogs();
    renderApp();
  }));
}

// optional: mute HMR/WDS logs
function flushHMRLogs() {
  const log = console.log;
  const logs = [];
  console.log = (t, ...args) => {
    if (typeof t === 'string' && t.match(/^\[(HMR|WDS)\]/)) {
      if (t.match(/(up to date|err)/i)) logs.push(t.replace(/^.*?\]\s*/m, ''), ...args);
    } else {
      log.call(console, t, ...args);
    }
  };
  return () => console.log(`%c🚀 ${logs.splice(0, logs.length).join(' ')}`, 'color:#888;');
}

render(<DevTools/>, document.body);
renderApp();
