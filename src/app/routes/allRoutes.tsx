import React from 'react';
import Home from '../../pages/Home';

const publicRoutes = [
  //dev temporary
  {path: '/', component: <Home />},
  // { path: '/menu', component: <Menu /> },

  //Partner
  {path: '/home', component: <Home />},

  //Error
  // {path: '/error', component: <PageNotFound />},
];

export {publicRoutes};
