import React, { Component } from 'react';
import { Switch , Route, Redirect } from 'react-router-dom'
import Contacts from './Contacts'
import AddContact from './AddContact'

class App extends Component {
  constructor() {
    super()

    this.state = {
      "contacts": [
        {
          "id": 70219577,
          "name": "Albert Einstein",
          "image_url": "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
          "email": "aeinstein@example.com",
          "phone_number": "15555555555"
        },
        {
          "id": 70219578,
          "name": "Bob the coder",
          "image_url": "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
          "email": "bobn@example.com",
          "phone_number": "1234567890"
        },
        {
          "id": 70219570,
          "name": "3rd dude",
          "image_url": "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
          "email": "3rd@example.com",
          "phone_number": "33333333"
        }
      ]
    }
    this.addContact = this.addContact.bind(this); //binding App to addContact
  }

  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])});
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/Contacts' render={(props) => <Contacts {...props} contacts={this.state.contacts}/>} />
          <Route exact path='/Contacts/New' render={(props) => <AddContact {...props} contacts={this.state.contacts} addContact={this.addContact}/>} /> 
          <Redirect to='/Contacts'/>
        </Switch>
      </div>
    );
  }
}

export default App;
