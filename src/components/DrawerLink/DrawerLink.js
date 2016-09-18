import {h} from 'preact';
import styles from './styles.css';
import {observer} from 'mobx-react';

function DrawerLink({view, onClick, name}) {
  return (
    <li className={styles.drawerLink}>
      <a
        onClick={onClick}
        className={view.currentView.name === name.toLowerCase() ? styles.active : null}
      >
        {name}
      </a>
    </li>
  )
}

export default observer(["view"], DrawerLink);