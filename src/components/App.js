import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Contact from './Contact'
import Contacts from './Contacts'
import ContactNew from './ContactNew'
import AllContacts from './AllContacts'

class App extends React.Component {
  constructor () {
      super()
      this.state = {
      contacts: [
        {id: 70219577,
        name: "Albert Einstein",
        image_url: "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
        email: "aeinstein@example.com",
        phone_number: "15555555555"},
        {id: 70219578,
        name: "Winston Churchill",
        image_url: "https://en.wikipedia.org/wiki/Winston_Churchill#/media/File:Sir_Winston_Churchill_-_19086236948.jpg",
        email: "wchurchill@example.com",
        phone_number: "15555555556"}
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
            <Contacts addContact={this.addContact} contacts={this.state.contacts} />
          )}/>
          <Route path='/contact' render={() => (
            <Contacts addContact={this.addContact} contacts={this.state.contacts} />
          )}/>
        </Switch>
      </div>
    )
  }
}

export default App;
