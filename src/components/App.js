import { Route } from 'react-router-dom'
import React from 'react'
import Contact from './Contact'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      "contacts": [
        {
          "id": this.generateId(),
          "name": "Lebron James",
          "email": "lebron@james.com",
          "phone_number": "9199199119",
          "img_url": "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png"
        },
        {
          "id": this.generateId(),
          "name": "Zion Williamson",
          "email": "zion@williamson.com",
          "phone_number": "1234567890",
          "img_url": "https://d.newsweek.com/en/full/1568895/zion-williamson-new-orleans-pelicans.jpg"
        },
        {
          "id": this.generateId(),
          "name": "James Harden",
          "email": "james@harden.com",
          "phone_number": "9876543210",
          "img_url": "https://www.mercurynews.com/wp-content/uploads/2018/05/harden2.jpg"
        }
      ]
    }
    //binding addContact to this context
    this.addContact = this.addContact.bind(this)

  }

  //generates an ID for each contact
  generateId() {
    return Math.round(Math.random() * 100000000);
  }

  //function to add a next contact
  addContact (contact) {
    this.setState({"contacts": this.state.contacts.concat([contact])});
  }

  render() {
    return (
      <div>
        <Route path='/' render={() => (
          <Contact contacts={this.state.contacts} addContact={this.addContact}/>
        )}/>
      </div>
    )
  }
}


export default App
