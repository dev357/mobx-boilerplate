// import {h} from 'preact';
import React from 'react';
import styles from './styles.css';
import {observer} from 'mobx-react';

function Link({view, to, children}) {
  return (
      <a onClick={() => view.router.push(to)}>
        {children}
      </a>
  )
}

export default observer(["view"], Link);