import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import FilmDetail from './FilmDetail';

const MainPage = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/film/:id">
          <FilmDetail />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainPage;
