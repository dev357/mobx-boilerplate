import {h} from 'preact';
import styles from './styles.css';
import {observer} from 'mobx-react';

// function Counter({counter}) {
//   return (
//     <div>
//       <p>Counter Page</p>
//       <p>Counter: {counter.timer}</p>
//       <button onClick={counter.startTimer}>Start</button>
//       <button onClick={counter.stopTimer}>Stop</button>
//       <button onClick={counter.restartTimer}>Reset</button>
//     </div>
//   );
// }

function Counter({store}) {
  console.log('counter', store.timer);
  return (
    <div>
      <p>Counter Page</p>
      <p>Counter: </p>
      <button>Start</button>
      <button>Stop</button>
      <button>Reset</button>
    </div>
  );
}

export default observer(Counter);
