//ALL OF THE ROUTING

//SHOW USER A LIST OF ALL OF THEIR CONTACTS
//HAS OWN ROUTE (/CONTACTS)


import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ContactForm from './ContactForm';
import Contacts from './Contacts';


//PARENT COMPONENT - stateful --> render
class App extends React.Component {
  
render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'  component={Contacts} />
          <Route path='/new' component={ContactForm} />
        </Switch>
      </BrowserRouter>
    )  
  };

};



export default App;
