import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dash from '../pages/dash';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dash} />
  </Switch>
);

export default Routes;
