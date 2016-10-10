import React from 'react';
import Counter from 'views/Counter/Counter';

const routes = [
  {
    // Keep 404 as first element!
    name: 'not-found',
    main: () => <div>404 - NOT FOUND</div>
  }, {
    name: 'Home',
    path: '/',
    exactly: true,
    main: () => <div>Home</div>
  }, {
    name: 'About',
    path: '/about',
    main: () => <div>About</div>
  }, {
    name: 'Counter',
    path: '/counter',
    main: () => <Counter />
  }
];

export default routes;