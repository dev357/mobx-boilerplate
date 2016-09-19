import React from 'react';
import styles from './styles.css';
import {observer} from 'mobx-react';

import TimeDisplay from './TimeDisplay';

function Counter({view: {currentView: {store}}}) {
  //const store = view.currentView.store;
  return (
    <div>
      <p>Counter Page</p>
      <TimeDisplay/>
      <button onClick={store.startTimer}>Start</button>
      <button onClick={store.stopTimer}>Stop</button>
      <button onClick={store.restartTimer}>Reset</button>
      <button onClick={store.incrementTimer}>Add 1</button>
      <button onClick={store.decrementTimer}>Remove 1</button>
    </div>
  );
};

// const Counter = observer(({store}) => {
//   return (
//     <div>
//       <p>Counter Page</p>
//       <p>Counter: {store.timer.tere.tere}</p>
//       <button onClick={store.startTimer}>Start</button>
//       <button onClick={store.stopTimer}>Stop</button>
//       <button onClick={store.restartTimer}>Reset</button>
//     </div>
//   );
// });

// export default observer(Counter);
export default observer(["view"], Counter);