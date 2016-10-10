import React from 'react';
import styles from './styles.css';
import {observer} from 'mobx-react';

function Counter() {
  //const store = view.currentView.store;
  return (
    <div>
      <p>Counter Page!!</p>
    </div>
  );
}

export default observer(Counter);