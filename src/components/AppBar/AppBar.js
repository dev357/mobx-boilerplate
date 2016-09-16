import {h} from 'preact';
import styles from './styles.css';

const AppBar = ({title}) => {
  return (
    <header className={styles.header}>
      <a
        className={styles.drawerToggle}
      >
        ☰
      </a>
      {title}
    </header>
  )
};

export default AppBar;
