import React, {Component} from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

export const App = observer(({ store }) => (
  <div>
    { renderCurrentView(store) }
    Current user: not implemented
    <DevTools />
  </div>
));

function renderCurrentView(store) {
  const view = store.currentView;
  switch (view.name) {
    case "notfound":
      return <div>NOT FOUND</div>;
    case "timer":
      return <div>TIMER</div>;
    default:
      return <div>unknown view in store.currentView</div>
  }
}