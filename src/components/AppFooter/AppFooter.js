import {h} from 'preact';
import styles from './styles.css';

function AppFooter() {
  return (
    <footer className={styles.footer}>
      <br/>
      Made with ♥ by <a href="https://github.com/dev357" target="_blank">dev357</a>
    </footer>
  );
}

export default AppFooter;
