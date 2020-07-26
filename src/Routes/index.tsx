import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DashboardCard from '../pages/DashboardCard';

const Routes: React.FC = () => (
  <Switch>
    <Route component={DashboardCard} path="/" exact />
  </Switch>
);
export default Routes;
