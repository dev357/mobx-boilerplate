import {h} from 'preact';

const SideDrawer = ({title}) => {
  return (
    <div>
      <div>{title}</div>
      <ul>
        <li>
          <li>1. Tere</li>
          <li>2. Hommik</li>
        </li>
      </ul>
    </div>
  );

};

export default SideDrawer;