// import {h} from 'preact';
import React from 'react';
import styles from './styles.css';
import {observer} from 'mobx-react';

import ExpandableList from 'components/ExpandableList/ExpandableList';
import DrawerLink from 'components/DrawerLink/DrawerLink';

function SideDrawer({title, view}) {
  return (
    <div className={styles.drawer}>
      <div className={styles.drawerBrand}>{title}</div>
      <hr className={styles.divider}/>
      <ul>
        <li>
          <ExpandableList title="Examples">
            <DrawerLink name="Home" onClick={view.showHome}/>
            <DrawerLink name="Counter" onClick={view.showCounter}/>
            <DrawerLink name="About" onClick={view.showAbout}/>
          </ExpandableList>
        </li>
        <li>
          <ExpandableList title="Menu 2">
            <DrawerLink name="Item 1" onClick={() => console.log('click!')}/>
            <DrawerLink name="Item 2" onClick={() => console.log('click!')}/>
            <DrawerLink name="Item 3" onClick={() => console.log('click!')}/>
          </ExpandableList>
        </li>
      </ul>
    </div>
  );
}

export default observer(["view"], SideDrawer);