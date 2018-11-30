import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ContactsPage from './ContactsPage'
import NewContact from './NewContact'


class App extends Component {
  constructor () {
    super()

    this.state = {
      contacts: [
        {
          "id": 12345,
          "name": "Joey Smith",
          "image_url": "http://everythingnac.com/wp-content/uploads/2013/02/joey-smith.jpeg",
          "email": "joeysmith@hotmail.com",
          "phone_number": "12349998888"
        }
      ]
    }

    this.addContact = this.addContact.bind(this);
  }

  addContact = (contact) => {
    this.state.setState({contacts: this.state.contacts.concat([contact])});
  }

  render() {
    const {contacts} = this.state;
    return (
      <div>
        <Switch>
          <Route exact path='/contacts' render={() => (
            <ContactsPage contacts={contacts}/>
          )}/>
          <Route path='/contacts/new' render={() => (
            <NewContact addContact={this.addContact} contacts={this.state.contacts} />
          )}/>
          <Redirect from='/' to='/contacts'/>
        </Switch>
      </div>
    );
  }
}

export default App
