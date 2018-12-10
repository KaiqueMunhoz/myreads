import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import Home from './pages/Home'
import Search from './pages/Search'

const Routes = () => {

  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/search' component={Search} />
    </Switch>
  );
}

export default Routes;