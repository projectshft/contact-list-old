import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Contacts from './Contacts';
import ContactView from './contact-view';
import NewContact from './new-contact'
import EditContact from './edit-contact'
import PropTypes from 'prop-types';



class App extends Component {
  constructor () {
    super()

    //The state will hold the key contact information for the entire app.  When new contacts are added the state will be updated with the relevant information and then rendered to the /contacts page
    this.state = {
      contacts: []
    }

    this.addContact = this.addContact.bind(this);
    this.getContactById = this.getContactById.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
    this.editContact = this.editContact.bind(this);
  }

  //This function will take in the uniquely generated id for a contcact and use it later in the handleSubmitNewContactClick function in the ContactView component to create and navigate to the contact's unique webpage.
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

  //this function deletes the contact
  deleteContact(contact) {
    this.setState({contacts: this.state.contacts.filter(c => c !== contact)})
  }

  editContact(contact) {
    this.setState({contacts: this.state.contacts.map(c => {
      if (c.id === contact.id) {
        return contact
      } return c
    }) })

  }

  render () {
    return (
      <div>
        <Switch>

          <Route 
            exact path="/" 
            render={(props) => 
              <Contacts contacts={this.state.contacts} deleteContact={this.deleteContact} editContact={this.editContact}/>}  
          />

          <Route 
            exact path="/new" 
            render={(props) => 
              <NewContact addContact={this.addContact} contacts={this.state.contacts} />} 
          />

          <Route 
            exact path="/edit/:id" 
            render= {(props) => <EditContact editContact={this.editContact} getContactById={this.getContactById} {...props} />}
          />

          <Route 
            exact path="/:id" 
            render={(props) => 
              <ContactView getContactById={this.getContactById} id={props.match.params.id} /> } 
          />
          
        </Switch>
      </div>
    )
  }
}

export default App;
