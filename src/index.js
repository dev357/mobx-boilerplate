// import {h, render} from 'preact';
import './main.css';
import React from 'react';
import {render} from 'react-dom';
import {useStrict} from 'mobx';
import {Provider} from 'mobx-react';
import {BrowserRouter as Router} from 'react-router';
import ViewStore from './store/ViewStore';
import layoutStore from './store/LayoutStore';
import DevTools from 'mobx-react-devtools';
import {simpleFetch} from './store/fetch';

import createRouter from './create-router';
const router = createRouter().start();

const viewStore = new ViewStore(router);

useStrict(true);

const root = document.createElement('div');
root.id = 'app';
document.body.appendChild(root);

function renderApp() {
  const App = require('./views/App/App').default;
  render(
    <Provider view={viewStore} layout={layoutStore}>
      <div>
        <Router>
          <App />
        </Router>
        <DevTools/>
      </div>
    </Provider>,
    document.getElementById('app'),
  );
}

// let root;
// function renderApp() {
//   const App = require('./views/App/App').default;
//   root = render(
//     <Provider view={viewStore} layout={layoutStore}>
//       <App />
//     </Provider>,
//     document.body,
//     root
//   );
// }

if (module.hot) {
  // const flushLogs = flushHMRLogs();
  module.hot.accept('./views/App/App', () => requestAnimationFrame(() => {
    // flushLogs();
    renderApp();
  }));
}

// render(<DevTools/>, document.body);
renderApp();
