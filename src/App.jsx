import React, {Component} from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import styles from './app.css';

const App = observer(({ store }) => (
  <div className={styles.app}>
    App
    { renderCurrentView(store) }
    Current user: not implemented
    <DevTools />
  </div>
));



function renderCurrentView(store) {
  const view = store.currentView;
  switch (view.name) {
    case "index":
      return <div>INDEX</div>
    case "notfound":
      return <div>NOT FOUND</div>;
    case "about":
      return <div>ABOUT</div>;
    default:
      return <div>unknown view in store.currentView</div>
  }
}

export default App;