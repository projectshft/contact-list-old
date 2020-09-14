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
import Contacts from './Contacts'


class App extends Component {
  constructor () {
    super()
    this.state = {
      // Hardcoded contact for example of template
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
    this.deleteContact = this.deleteContact.bind(this);
  }
  
  //Argument is passed from within NewContact
  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])});
  }
  //Argument is passed from within AllContacts
  //updates State to new array without the deleted contact
  deleteContact (deletedContactArray) {
    this.setState({contacts: deletedContactArray})
  }

  render() {
    return (
      <div>
        <Switch>
          {/* deleteContact is passed to AllContacts and Contacts so its available on render paths of '/' and '/contacts' */}
          <Route exact path='/' render={() => (
            <AllContacts contacts={this.state.contacts} deleteContact={this.deleteContact}/> // 
          )}/>
          {/* addContact is passed down into Contacts and from there onto NewContact for use within handleSubmitContactClick() */}
          <Route path='/contacts' render={() => (
            <Contacts addContact={this.addContact} contacts={this.state.contacts} deleteContact={this.deleteContact}/> //  
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;
