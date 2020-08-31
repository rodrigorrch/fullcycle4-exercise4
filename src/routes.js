import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Users from './pages/Users';
import Main from './pages/Main';

function Routes(){
  return(
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/users" component={Users} />
      </Switch>
    </Router>
  )
};

export default Routes;

