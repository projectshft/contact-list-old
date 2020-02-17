import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react'
import uuid from 'uuid';

import Home from './Home'
import Contacts from './Contacts'

class App extends Component {
  constructor() {
    super()
    // uuid invoked generates a random id number
    this.state = {
      people: [
        { id: uuid(), name: "Tom Ford", email: "tford@gmail.com", phone_number: '3361234567', imgURL: "https://randomuser.me/api/portraits/men/3.jpg" },
        { id: uuid(), name: "Jimbo Dixon", email: "jdixon@gmail.com", phone_number: '3361887913', imgURL: "https://randomuser.me/api/portraits/men/3.jpg" },
        { id: uuid(), name: "Zach Kring", email: "zkring@gmail.com", phone_number: '3364568210', imgURL: "https://randomuser.me/api/portraits/men/63.jpg" },
        { id: uuid(), name: "Dana Cox", email: "danaCox@gmail.com", phone_number: '336456888', imgURL: "https://randomuser.me/api/portraits/women/21.jpg" },
        { id: uuid(), name: "Kate Spade", email: "katespade@gmail.com", phone_number: '336456999', imgURL: "https://randomuser.me/api/portraits/women/69.jpg" }
      ]
    }

    // this.addContact = this.addContact.bind(this);
  }

  // addContact: (contact) {
  //   this.setState({})
  // }


  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contacts' render={ () => (
            <Contacts people={this.state.people} />
          )} />
          
        </Switch>
      </div>
    );
  }
}

export default App;