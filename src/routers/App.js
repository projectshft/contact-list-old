import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Contacts from './Contacts';

const App = () => (
  <Switch>
    <Route exact path='/'>
      <Redirect to='/contacts' />
    </Route>
    <Route path='/contacts' component={Contacts}></Route>
  </Switch>
);

export default App;
