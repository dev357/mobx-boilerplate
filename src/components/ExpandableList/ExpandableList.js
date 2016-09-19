// import {h, Component} from 'preact';
import React, {Component} from 'react';
import styles from './styles.css';
import {observable, action} from 'mobx';
import {observer} from 'mobx-react';

@observer
export default class ExpandableList extends Component {
  @observable isOpen = false;

  @action toggleOpen = () => {
    this.isOpen = !this.isOpen;
  };

  render() {
    const {title, children} = this.props;
    return (
      <div>
        <strong onClick={this.toggleOpen}>
          {title}
        </strong>
        <div>
          {this.isOpen
            ? <ul className={styles.list}>
                {children}
              </ul>
            : null }
        </div>
      </div>
    );
  }
}