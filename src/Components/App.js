//ALL OF THE ROUTING

//SHOW USER A LIST OF ALL OF THEIR CONTACTS
//HAS OWN ROUTE (/)


import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import State from './State';
import ContactForm from './ContactForm';




//PARENT COMPONENT - stateful --> render
class App extends React.Component {
  
render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'  component={State} />
          <Route path='/new' component={ContactForm} />
        </Switch>
      </BrowserRouter>
    )  
  };

};



export default App;
