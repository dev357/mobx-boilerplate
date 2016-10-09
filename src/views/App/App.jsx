import React from 'react';
import styles from './styles.css';
import {observer} from 'mobx-react';
import {Match, Miss} from 'react-router';
import Sidebar from 'react-sidebar';
import SideDrawer from 'components/SideDrawer/SideDrawer';
import AppBar from 'components/AppBar/AppBar';
import AppFooter from 'components/AppFooter/AppFooter';

import routes from '../../routes';

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
            <p>Current route: {view.currentRoute}</p>
            {routes.map((route, index) => <Match
              key={index}
              pattern={route.pattern}
              component={route.main}
              exactly={route.exactly}
            />)}
            <Miss component={NotFound}/>
          </section>
          <AppFooter />
        </div>

      </Sidebar>
    </div>
  );
});

function NotFound() {
  return <div>404 - NOT FOUND</div>
}

// export default observer(["view", "layout"], App);
export default App;
