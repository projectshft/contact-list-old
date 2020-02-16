import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Home from './Home.js'
import ContactsList from './ContactsList.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppCSS from '../App.css';

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      // Hard code contacts in the contacts array to appear when page is initially rendered
      contacts: [
          { name: 'Pam Halpert', phone: 8582164505, email: 'pamhalpert@dundermifflin.com', image: 'https://images-cdn.9gag.com/photo/azXy2QK_460s.jpg', key: 88199},
          { name: 'Jim Halpert', phone: 8282124505, email: 'jimhalpert@dundermifflin.com', image: 'https://miro.medium.com/max/2510/0*Xz-_cHSO6txphvHt.png', key: 88198},
          { name: 'Dwight Schrute', phone: 9196554334, email: 'beetlover@schrutefarms.com', image: 'https://pbs.twimg.com/media/DLKU4vbW4AAI7OE.jpg:large', key: 57920},
          { name: 'Michael Scott', phone: 8572471999, email: 'worldsbestboss@dundermifflin.com', image: 'https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png', key: 88197},
          { name: 'Stanley Hudson', phone: 8582174305, email: 'crosswordslegend@dundermifflin.com', image: 'https://theofficefanbase.weebly.com/uploads/7/9/8/5/7985207/3926170.jpg', key: 88196},
          { name: 'Phyllis Vance', phone: 9191107384, email: 'phyllisvance@dundermifflin.com', image: 'https://peopledotcom.files.wordpress.com/2019/10/phyllis-smith.jpg?w=2700&h=1800', key: 88195}
        ]
      }
      this.addContact = this.addContact.bind(this)
      this.updateContact = this.updateContact.bind(this)
      this.removeContact = this.removeContact.bind(this)
    }

  // Create a function that takes in the contact and adds it
  addContact (contact) {
    // Generate a 'unique' key for every contact that is added
    const generateKey = () => Math.round(Math.random() * 100000000)
    contact['key'] = generateKey();
    // Set the state to contacts + the new contact being added
    this.setState({contacts: this.state.contacts.concat([contact])});
  }

  // Create a function that takes in the contact and updates its information
  updateContact (contact) {
    // Create a variable to store the new array
    const newContacts = this.state.contacts.map((c) => {
      if (contact.key === c.key) {
        // If the key of the contact being passed in matches one of the contact's keys
        // in the array, save the updated contact
        c = contact;
      }
    // Return all of the new contacts
    return c;
  });
    // Set the state to the new contacts array
    this.setState({contacts: newContacts});
  }

  // Create a function that takes in the contact key and removes the contact
  removeContact(key) {
    // Create a variable to store the filtered array
    const removeContact = this.state.contacts.filter((c) => {
      if(c.key !== key) {
        // Return all of the contacts that do not match the key being passed in
        return c
      }
    });
    // Set the state to the filtered array that does not contain the removed contact
    this.setState({contacts: removeContact})
  }

  render() {
    return (
      <div>
        <Switch>
          {/* Create a route to home that re-directs to the Contacts component */}
          <Route exact path='/' component={Home}/>
          {/* Create a route that links Contacts to the ContactsList component */}
          <Route path='/contacts' render={() => (
            <ContactsList addContact={this.addContact} contacts={this.state.contacts} updateContact={this.updateContact} removeContact={this.removeContact}/>
          )}/>
        </Switch>
      </div>
    )
  }
}

export default App;
