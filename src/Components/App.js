import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'
import FullContactList from './FullContactList';
import Contacts from './Contacts';
import ContactDetails from './ContactDetails'
import NewContact from './NewContact'

class App extends Component {
  constructor(props) {
  super() 


  this.state = {
    contacts : [
      { name:'Albert', id: Math.round(Math.random() * 100000000), email: 'something@gmail.com', phone: 333333333}
    ]
  }

  this.addContact = this.addContact.bind(this);
}

addContact  (contact) {
  console.log(this.state.contacts)
  this.setState({contacts: this.state.contacts.concat([contact])});
  
}
  render() {
    return (
      <div>
        
      <Switch>

      <Route exact path='/contacts/new' render={(routerProps) => (
        <NewContact routerProps={routerProps} contacts={this.state.contacts} addContact={this.addContact} />
      )}/>

      <Route exact path='/contacts' render={(props) => (
        <FullContactList contacts={this.state.contacts} />
     )} />
     
      <Route exact path='/contacts/:id' render={(props) => (
        <ContactDetails props={props} contacts={this.state.contacts} />
     )}/>

      </Switch> 

      </div>
    );
  }
}


export default App;
