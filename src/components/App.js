import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import ContactList from './ContactList'
import AddContact from './AddContact'
import ContactDetails from './ContactDetails'

class App extends Component {
  constructor() {
    super()

    this.state = {
      contacts: 
      [
      ]
    }
  }

  // Adds contacts to end of contacts array in state
  addContact = contact => {
    this.setState({ contacts: this.state.contacts.concat([contact])})
  }

  // This deleteContactfunction is passed down into the ContactListItem component.
  // Removes contact by first creating a copy of the current contacts in state
  // Then filters out the ID of the contact clicked.
  // Sets the state with the resulting contactsAfterDeletion array
  deleteContact = contactID => {
    const confirmDelete = window.confirm("Are you sure about this? There's no going back..")
    if (confirmDelete) {
      const contactsCopy = [...this.state.contacts]
      const contactsAfterDeletion = contactsCopy.filter(c => c.id !== contactID)
      this.setState({contacts: contactsAfterDeletion})
    }
  }
  
  render() {
    //Switch/route logic and passing of props for inheritance
    return (
        <Switch>
          <Redirect exact from="/" to="/contacts" />

          <Route exact path="/contacts" 
            render={() => (<ContactList 
              contacts={this.state.contacts}
              deleteContact={this.deleteContact} />)} 
          />

          <Route path="/contacts/new" 
            render={() => (<AddContact 
              addContact={this.addContact} />)} 
          />

          <Route path="/contacts/:id" 
          // match allows the use of specified id param in ContactDetails component
            render={({ match }) => (<ContactDetails
              contacts={this.state.contacts}
              match={match} />)} 
          />
        </Switch>
    )
  }
}
export default App;