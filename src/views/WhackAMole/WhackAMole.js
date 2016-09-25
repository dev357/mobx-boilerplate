import React, {Component} from 'react';
import styles from './styles.css';
import {observer} from 'mobx-react';

import Mole from './Mole';

function WhackAMole({view: {currentView: {store}}}) {
  const startGame = () => store.startGame(10, 1);

  return <div className={styles.game}>
    <h1 onClick={startGame}>Whack-A-Mole</h1>
    <div className={styles.startButton} onClick={startGame}>
      <TimeDisplay />
    </div>
    <div className={styles.table}>
      {store.moles.map((mole, index) => <Mole key={index} mole={mole}/>)}
    </div>
    <ScoreDisplay />
  </div>
}

export const TimeDisplay = observer(["view"], ({view: {currentView: {store}}}) => (
  <p>{store.isRunning
    ? 'Time left: ' + store.timeToGo
    : 'START GAME'}
  </p>
));

export const ScoreDisplay = observer(["view"], ({view: {currentView: {store}}}) => (
  <div className={styles.score}>
    SCORE: {store.totalActive}
  </div>
));

export default observer(["view"], WhackAMole);
