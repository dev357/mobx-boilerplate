// import {h, render} from 'preact';
import './main.css';
import React from 'react';
import {render} from 'react-dom';
import {useStrict} from 'mobx';
import {Provider} from 'mobx-react';
import ViewStore from './store/ViewStore';
import layoutStore from './store/LayoutStore';
import DevTools from 'mobx-react-devtools';
import App from 'views/App/App';

import createHistory from 'history/createBrowserHistory';
const router = createHistory();

const viewStore = new ViewStore(router);

useStrict(true);

const root = document.createElement('div');
root.id = 'app';
document.body.appendChild(root);

render(
  <Provider view={viewStore} layout={layoutStore}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
);