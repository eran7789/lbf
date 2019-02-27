import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from 'components/root/root';
import Home from 'components/home/home';

const MainRoutes = [
  {
    component: Home,
    exact: true,
    path: '/'
  }
];

const routes = [{
  component: Root,
  routes: MainRoutes
}];

export default routes
