import {h} from 'preact';
import {observer} from 'mobx-observer';
import Sidebar from 'react-sidebar';
import SideDrawer from 'components/SideDrawer/SideDrawer';
import AppBar from 'components/AppBar/AppBar';

import styles from './styles.css';

const App = observer(({store}) => {
  const title="TEST"
  return (
    <div className={styles.app}>
      <Sidebar
        sidebar={<SideDrawer title={title}/>}
        open={true}
        docked={true}
        sidebarClassName={styles.sidebar}
      >
        <div className={styles.content}>
          <AppBar title={title}/>
          <section>
            { renderCurrentView(store) }
          </section>
          <footer>FOOTER</footer>
        </div>

      </Sidebar>
    </div>
  )
});

function renderCurrentView(store) {
  const view = store.currentView;
  switch (view.name) {
    case "index":
      return <div>CONTENT</div>;
    case "notfound":
      return <div>NOT FOUND</div>;
    case "about":
      return <div>ABOUT</div>;
    default:
      return <div>unknown view in store.currentView</div>
  }
}

export default App;