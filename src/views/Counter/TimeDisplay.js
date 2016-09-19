import React from 'react';
import {observer} from 'mobx-react';

function TimeDisplay({view}) {
  const store = view.currentView.store;
  return (
    <p>Timer: {store.minutes}:{store.seconds}</p>
  )
}

export default observer(["view"], TimeDisplay);