import { render } from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home.js';
import Contact from './Contact.js';



const Main = () => (
<main>
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/contact' component={Contact}/>
  </Switch>
</main>
)

export default Main;
