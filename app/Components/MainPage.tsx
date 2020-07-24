import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';

const MainPage = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainPage;
