import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import AppState from './AppState';
import App from './App';

import ViewStore from './store/ViewStore';
import { startRouter } from './store/router';
import { simpleFetch } from './store/fetch';

const appState = new AppState();

const viewStore = new ViewStore(simpleFetch);
startRouter(viewStore);

render(
  <AppContainer>
    <App view={viewStore} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;

    render(
      <AppContainer>
        <NextApp view={viewStore}/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}