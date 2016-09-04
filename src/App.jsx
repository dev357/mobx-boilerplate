import React, {Component} from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>
          React & MobX Boilerplate!!
        </h1>

        <button onClick={this.onReset}>
          Reset
        </button>

        <h3>
          {this.props.appState.timer}
        </h3>

        <DevTools
          position={{bottom: 0, left: 0}}
          hightlightTimeout={1500}
        />
      </div>
    );
  }

  onReset = () => {
    this.props.appState.resetTimer();
  }
}
