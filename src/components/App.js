import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import ContactsRoutes from '../routes/ContactsRoutes';

const App = () => (
  <Switch>
    <Route exact path='/'>
      <Redirect to='/contacts' />
    </Route>
    <Route path='/contacts' component={ContactsRoutes}></Route>
  </Switch>
);

export default App;
