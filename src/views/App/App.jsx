import React from 'react';
// import {h} from 'preact';
import styles from './styles.css';
import {observer} from 'mobx-react';
import Sidebar from 'react-sidebar';
import SideDrawer from 'components/SideDrawer/SideDrawer';
import AppBar from 'components/AppBar/AppBar';
import AppFooter from 'components/AppFooter/AppFooter';

import Counter from '../Counter';
import WhackAMole from '../WhackAMole/WhackAMole';

const App = observer(["view", "layout"], ({view, layout}) => {
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
            { renderCurrentView(view) }
          </section>
          <AppFooter />
        </div>

      </Sidebar>
    </div>
  );

  function renderCurrentView({currentView: {name}}) {
    switch (name) {
      case "home":
        return <div>HOME</div>;
      case "counter":
        return <Counter/>;
      case "whackamole":
        return <WhackAMole/>;
      case "about":
        return <div>ABOUT</div>;
      case "notfound":
        return <div>NOT FOUND</div>;

      default:
        return <div>unknown view: {name}</div>
    }
  }
});

// export default observer(["view", "layout"], App);
export default App;
