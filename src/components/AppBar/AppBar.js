import {h} from 'preact';
import styles from './styles.css';
import {observer} from 'mobx-react';

const AppBar = observer(({title, toggleSidebar}) => {
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
});

export default AppBar;
