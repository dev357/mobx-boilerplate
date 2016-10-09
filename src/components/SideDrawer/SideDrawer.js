// import {h} from 'preact';
import React from 'react';
import Link from 'components/Link/Link';
import styles from './styles.css';
import {observer} from 'mobx-react';

import ExpandableList from 'components/ExpandableList/ExpandableList';

function SideDrawer({title, view}) {
  return (
    <div className={styles.drawer}>
      <div className={styles.drawerBrand} onClick={() => console.log(view.router.getState)}>{title}</div>
      <hr className={styles.divider}/>
      <ul>
        <li>
          {/*<ExpandableList title="Examples">*/}
            <Link to="Home">Home</Link>
            <Link to="About">About</Link>
            <Link to="Counter">Counter</Link>
          {/*</ExpandableList>*/}
        </li>
      </ul>
    </div>
  );
}

export default observer(["view"], SideDrawer);