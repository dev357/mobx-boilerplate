// import {h} from 'preact';
import React from 'react';
import styles from './styles.css';
import {observer} from 'mobx-react';

function AppBar({title, toggleSidebar}) {
  return (
    <header className={styles.header}>
      <a
        className={styles.drawerToggle}
        onClick={toggleSidebar}
      >
        ☰
      </a>
      {title}
    </header>
  )
}

export default observer(AppBar);
