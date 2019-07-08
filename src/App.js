import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Contacts from './Contacts';
import ContactView from './contact_view';
import NewContact from './new_contact'

class App extends Component {
  constructor () {
    super()

    //The state will hold the key contact information for the entire app.  When new contacts are added the state will be updated with the relevant information and then rendered to the /contacts page
    this.state = {
      contacts: []
    }

    this.addContact = this.addContact.bind(this)
    this.getContactById = this.getContactById.bind(this)

  }

  //This function will take in the uniquely generated id for a contcact and use it later in the handleSubmitNewContactClick function in the Contact=View component to create and navigate to the contact's unique webpage.
  getContactById (uniqueId) {
    const foundContact = this.state.contacts.find(contact => contact.id === uniqueId)
    if (!foundContact) {
      return window.alert('Contact with unique ID not found')
    }
    return foundContact
  }

  //this function will be used to set the app state and add the new contact generated from the NewContact component.
  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat(contact)});
  }

  //This function makes sure the app state was successfullly set with the New Contact information.
  componentDidUpdate () {
    window.alert('Contact Added!')
  }

  render () {
    return (
      <div>
        <Switch>
          <Route exact path="/contacts" render={(props) => <Contacts {...props} contacts={this.state.contacts}/>}  />
          <Route path="/contacts/new" render={(props) => <NewContact {...props} addContact={this.addContact} contacts={this.state.contacts} />} />
          <Route path="/contacts/:id" render={(props) => <ContactView {...props} getContactById={this.getContactById} /> } />
        </Switch>
      </div>
    )
  }
}

export default App;
