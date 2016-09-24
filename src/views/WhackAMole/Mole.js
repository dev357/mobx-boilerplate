import React from 'react';
import styles from './styles.css';
import {observer} from 'mobx-react';


function Mole({view: {currentView: {store}}, mole}) {
  return (
    <div onClick={mole.resetCountdown}>
      Time: {mole.time}
    </div>
  );
}

export default observer(["view"], Mole);