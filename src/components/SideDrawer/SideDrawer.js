import {h} from 'preact';
import styles from './styles.css';

import ExpandableList from 'components/ExpandableList/ExpandableList';

const SideDrawer = ({title}) => {
  return (
    <div className={styles.drawer}>
      <div className={styles.drawerBrand}>{title}</div>
      <hr className={styles.divider}/>
      <ul>
        <li className={styles.expandableList}>
          <ExpandableList title="Examples">
            <li><a>Home</a></li>
            <li><a>Counter</a></li>
            <li><a>About</a></li>
          </ExpandableList>
        </li>
        <li className={styles.expandableList}>
          <ExpandableList title="Menu 2">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
            <li><a>Item 3</a></li>
          </ExpandableList>
        </li>
      </ul>
    </div>
  );

};

export default SideDrawer;