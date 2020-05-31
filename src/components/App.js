import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Contact from './Contact'
import 'bootstrap/dist/css/bootstrap.css';
import '../css/App.css'


class App extends React.Component {
  constructor() {
    super()
    //state to hold all of the App's contacts
    this.state = {
      contacts: [
        { id: 1,
          name: "Sauron of Mordor",
          profileImage: '/images/Sauron.png',
          phoneNumber: "667-666-6655", 
          email: "lordofevil@comcast.net" 
        },
        { id: 2,
          name: "Balrog of Moria", 
          profileImage: '/images/balrog.png',
          phoneNumber: "666-666-6666", 
          email: "moria@comcast.net" 
        },
        { id: 3,
          name: "Gandalf the Grey", 
          profileImage: '/images/Gandalf_the_Grey.png',
          phoneNumber: "812-456-6788", 
          email: "calltheeagles99@wizardry.com" 
        },
        { id: 4,
          name: "Peregrin Took", 
          profileImage: '/images/Pippin.png',
          phoneNumber: "242-456-9769",
          email: "foolofatook@gmail.com" 
        },
        { id: 5,
          name: "Aragorn Elessar", 
          profileImage: '/images/Aragorn.png',
          phoneNumber: "902-486-9769",
          email: "king@gondor.gov" 
        },
      ]
    }
    
    this.addContact = this.addContact.bind(this);
  }

  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])})
  }

  
  render() {
    return (
      <div>
        {/* Routing exact path of the list of contacts to be the home page
        and the /contacts route */}
        <Switch>
          <Route exact path='/' render={() => (
            <Contact addContact={this.addContact} contacts={this.state.contacts} />
          )}/>
          <Route path='/contacts' render={() => (
            // passing addContact function and this.state to the Contact component
            <Contact  addContact={this.addContact} contacts={this.state.contacts} />
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
