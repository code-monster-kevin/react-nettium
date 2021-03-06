import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home2 from '../pages/Home2';
import AboutUs from '../pages/AboutUs';
import Shop from '../pages/Shop';
import Terms from '../pages/Terms';

const AppRoutes2 = props => {
  return (
    <Switch>
      <Route exact path="/" component={Home2} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/shop" component={Shop} />
      <Route path="/terms" component={Terms} />
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRoutes2;
