import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Shop from '../pages/Shop';
import Terms from '../pages/Terms';

const AppRoutes = props => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home {...props} />} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/shop" component={Shop} />
      <Route path="/terms" component={Terms} />
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRoutes;
