import {observable, computed, action} from 'mobx';
import {bind} from 'decko';
import {MatchMedia} from 'mobx-react-matchmedia';

export class LayoutStore {
  @observable sideBarOpen = false;
  @observable screen = null;

  @computed get breakpoint() {
    const width = this.screen.width;
    const active = {};
    if (width < 768) active.xs = true;
    if (width >= 768) active.su = true;
    if (width >= 768 && width < 992) active.sm = true;
    if (width >= 992 && width < 1200) active.md = true;
    if (width >= 992) active.mu = true;
    if (width >= 1200) active.lg = true;

    return active;
  }

  @computed get sideBarDocked() {
    return this.sideBarOpen && this.breakpoint.su;
  }

  constructor() {
    window.addEventListener('resize', this.handleResize);

    this.screen = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  @bind @action handleResize() {
    this.screen.width = window.innerWidth;
    this.screen.height = window.innerHeight;
  };

  @bind @action toggleSideBarOpen() {
    this.sideBarOpen = !this.sideBarOpen;

  }
}

const layoutStore = new LayoutStore();

export default layoutStore;
