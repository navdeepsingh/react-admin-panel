import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './Login';
import Dashboard from './Dashboard';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;