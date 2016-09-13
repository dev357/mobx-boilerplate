import "react-hot-loader/patch";

import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import AppState from './AppState';
import App from './App';

import ViewStore from './store/ViewStore';
import { startRouter } from './store/router';
import { simpleFetch } from './store/fetch';

const viewStore = new ViewStore(simpleFetch);
startRouter(viewStore);

const root = document.createElement('div');
root.id = 'app';
document.body.appendChild(root);

render(
  <AppContainer>
    <App store={viewStore} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;

    render(
      <AppContainer>
        <NextApp store={viewStore}/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}