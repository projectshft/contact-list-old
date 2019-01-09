import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Contacts from './Contacts'



class App extends React.Component {
  constructor (props) {
      super(props);
//Here is the contacts array in the state.
      this.state = {
        contacts: [
        {
        id: this.generateId(),
        name: "Albert Einstein",
        image_url: "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
        email: "aeinstein@example.com",
        phone_number: "15555555555",
        },
        {
        id: this.generateId(),
        name: "Winston Churchill",
        image_url: "https://en.wikipedia.org/wiki/Winston_Churchill#/media/File:Sir_Winston_Churchill_-_19086236948.jpg",
        email: "wchurchill@example.com",
        phone_number: "15555555556",
        },
      ]
  }
  
    this.addContact = this.addContact.bind(this);
    this.generateId = this.generateId.bind(this);
  }

  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])});
  }

  generateId() {
    return Math.round(Math.random() * 100000000)
  } 

  render() {
    return (
      <div>
        <Switch>
        {/* This gives us an index page. */}
          <Route exact path='/' render={() => (
            <Contacts addContact={this.addContact} contacts={this.state.contacts} />
          )}/>
          {/* This Router allows us to access the id in the Contacts Id page. Without contact, contact/:id in Contacts.js would not work. */}
          <Route path='/contact' render={() => (
            <Contacts addContact={this.addContact} contacts={this.state.contacts} />
          )}/>    
        </Switch>
       
      </div>
      )
    }
  }


export default App;
