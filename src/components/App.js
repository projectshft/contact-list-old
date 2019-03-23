import React, { Component } from 'react';
import { Switch , Route, Redirect } from 'react-router-dom'
import AddContact from './AddContact'
import ContactDetail from './ContactDetail'
import Contacts from './Contacts'

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
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/Contacts' render={(props) => <Contacts {...props} contacts={this.state.contacts} />} />
          <Route exact path='/Contacts/New' component={AddContact}/>
          <Route exact path='/Contacts/70219577' component={ContactDetail}/>
          <Redirect to='/Contacts'/> {/* Redirects navigation to /Contacts if it doesn't match a switch value */}
        </Switch>
      </div>
    );
  }
}

export default App;
