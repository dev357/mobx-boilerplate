import React from 'react';
import styles from './styles.css';
import {observer} from 'mobx-react';

import Mole from './Mole';

function WhackAMole({view: {currentView: {store}}}) {
  return (
    <div>
      <h3>Whack-A-Mole</h3>
      <div>
        {store.moles.map((mole, index) => <Mole key={index} mole={mole}/>)}
      </div>
    </div>
  );
}

export default observer(["view"], WhackAMole);