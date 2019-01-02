import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Pages
import Home from './pages/Home'
import Search from './pages/Search'

const Routes = (props) => {

    return (
      <Switch>
        <Route path='/' exact render={() => (
            <Home {...props}/>
        )} />
        <Route path='/search' render={() => (
            <Search {...props}/>
        )} />
      </Switch>
    );
}

export default Routes;