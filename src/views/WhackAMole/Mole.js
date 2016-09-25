import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import {observer} from 'mobx-react';


function Mole({view: {currentView: {store}}, mole}) {
  const classnames = classNames(
    styles.mole,
    mole.active ? styles.activeMole : null
  );
  return (
    <div className={classnames} onClick={mole.onHit}>
      {/* <p>Active: {mole.totalActiveTime}</p> */}
    </div>
  );
}

export default observer(["view"], Mole);