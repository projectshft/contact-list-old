import { render } from 'react-dom';
import React, { BrowserRouter, Switch, Route, Link,  Component } from 'react';
import Home from './Home.js';
import Contact from './Contact.js';
import Header from './Header.js';


const Main = () => (
<main>
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/contact' component={Contact}/>
  </Switch>
</main>
)

export default Main;
