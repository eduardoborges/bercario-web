import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dash from '../pages/dash';
import Activity from '../pages/activity';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dash} />
    <Route path="/activities" component={Activity} />
  </Switch>
);

export default Routes;
