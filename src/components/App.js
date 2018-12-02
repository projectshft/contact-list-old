import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ContactsPage from './ContactsPage'
import NewContact from './NewContact'
import Contact from './Contact.js'


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
        },
        {
          "id": 12346,
          "name": "Martha Roberts",
          "image_url": "http://www.grahammawchristie.com/uploads/4/0/4/1/40418183/screen-shot-2017-10-27-at-15-41-24_orig.png",
          "email": "marty8877@hotmail.com",
          "phone_number": "12341112222"
        }
      ]
    }

    this.addContact = this.addContact.bind(this);
  }

  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])});
  }

  render() {
    const {contacts} = this.state;
    return (
      <div>
        <Switch>
          <Route exact path='/contacts' render={() => (
            <ContactsPage contacts={contacts}/>
          )}/>
          <Route path='/contacts/new' render={(props) => (
            <NewContact props={props} addContact={this.addContact}/>
          )}/>
          <Route path='/contacts/:contactID' render={(props) => (
            <Contact props={props} contacts={this.state.contacts} />
          )}/>
          <Redirect to='/contacts'/>
        </Switch>
      </div>
    );
  }
}

export default App
