import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dash from '../pages/dash';
import ActivityList from '../pages/activityList';
import ActivityForm from '../pages/activityForm';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dash} />
    <Route exact path="/activities" component={ActivityList} />
    <Route path="/activities/create" component={ActivityForm} />
    <Route path="/activities/edit/:id" component={ActivityForm} />
  </Switch>
);

export default Routes;
