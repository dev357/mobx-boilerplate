import {h, Component} from 'preact';
import {observer} from 'mobx-react';
import Sidebar from 'react-sidebar';
import SideDrawer from 'components/SideDrawer/SideDrawer';
import AppBar from 'components/AppBar/AppBar';
import AppFooter from 'components/AppFooter/AppFooter';

import styles from './styles.css';

const App = observer(({view, layout}) => {
  const title = "dev357.io";
  return (
    <div className={styles.app}>
      <Sidebar
        sidebar={<SideDrawer title={title}/>}
        open={layout.sideBarOpen}
        docked={layout.sideBarDocked}
        onSetOpen={layout.toggleSideBarOpen}
        sidebarClassName={styles.sidebar}
      >
        <div className={styles.content}>
          <AppBar
            title={title}
            layoutStore={layout}
            toggleSidebar={layout.toggleSideBarOpen}
          />
          <section>
            <div>
              width: {layout.screen.width}
            </div>
            <div>
              height: {layout.screen.height}
            </div>
            <div>
              breakpoints: {JSON.stringify(layout.breakpoint)}
            </div>
            <div>
              sidebar: {JSON.stringify(layout.sideBar)}
            </div>
            <button
              onClick={layout.toggleOpen}
            >
              TOGGLE!
            </button>
            { renderCurrentView(view) }
          </section>
          <AppFooter />
        </div>

      </Sidebar>
    </div>
  );
});

function renderCurrentView(store) {
  const view = store.currentView;
  switch (view.name) {
    case "index":
      return (
        <div>
          CONTENT
        </div>
      );
    case "notfound":
      return <div>NOT FOUND</div>;
    case "about":
      return <div>ABOUT</div>;
    default:
      return <div>unknown view in store.currentView</div>
  }
}

export default App;