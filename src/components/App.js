//Show user list of contacts
//Allow user to add a contact with name, email, phone number
//Use proptypes
//Clicking 'add contact' takes user to new route (/contacts/new)
    //shows form for adding new contact
    //after clicking submit user is routed to /contacts
//include edit/delete buttons
//From '/contacts' each contact should be clickable
    //clicking contact navigates to (/contacts/{contact id}) 
//Generate id for each new contact
//Individual contact view should include a "back" button




import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import AllContacts from './AllContacts';
import Contacts from './contacts'


class App extends Component {
  constructor () {
    super()
    this.state = {
      contacts: [
        {
          "id": 90876377,
          "name": "Amelia Earhart",
          "image_url": "https://www.ameliaearhart.com/wp-content/uploads/2017/04/gallery23.jpg",
          "email": "aearhart@example.com",
          "phone_number": "15555897555"
        }
      ]
    }
    
    this.addContact = this.addContact.bind(this);
  }
  
  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])});
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={() => (
            <AllContacts contacts={this.state.contacts}/>
          )}/>
          <Route path='/contacts' render={() => (
            <Contacts addContact={this.addContact} contacts={this.state.contacts}/>
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;
