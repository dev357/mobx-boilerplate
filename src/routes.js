import React from 'react';

const routes = [
  {
    name: 'Home',
    path: '/',
    pattern: '/',
    exactly: true,
    main: () => <div>Home!</div>,
  }, {
    name: 'About',
    path: '/about',
    pattern: '/about',
    main: () => <div>About</div>
  }, {
    name: 'Counter',
    path: '/counter',
    pattern: '/counter',
    main: () => <div>Counter</div>
  }
];

export default routes;