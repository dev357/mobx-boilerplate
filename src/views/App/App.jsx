import React from 'react';
import styles from './styles.css';
import {observer} from 'mobx-react';
import {Match, Miss} from 'react-router';
import Sidebar from 'react-sidebar';
import SideDrawer from 'components/SideDrawer/SideDrawer';
import AppBar from 'components/AppBar/AppBar';
import AppFooter from 'components/AppFooter/AppFooter';


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
            <p>Current route: {view.currentPath}</p>
            {view.currentRoute.main()}
          </section>
          <AppFooter />
        </div>

      </Sidebar>
    </div>
  );
});

// export default observer(["view", "layout"], App);
export default App;
