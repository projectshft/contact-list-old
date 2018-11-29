import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Contacts from './Contacts';

const App = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route path='/contacts' component={Contacts}></Route>
  </Switch>
);

export default App;
