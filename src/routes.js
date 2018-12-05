import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Components
import Home from './pages/Home'

const Routes = () =>  {

  return(
    <Switch>
      <Route path='/' exact component={Home}/>
    </Switch>
  );
}

export default Routes;