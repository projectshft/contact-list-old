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
      contacts: [
          { name: 'Pam Halpert', phone: 8582164505, email: 'pamhalpert@dundermifflin.com', image: 'https://images-cdn.9gag.com/photo/azXy2QK_460s.jpg', key: 88199},
          { name: 'Jim Halpert', phone: 8282124505, email: 'jimhalpert@dundermifflin.com', image: 'https://miro.medium.com/max/2510/0*Xz-_cHSO6txphvHt.png', key: 88198},
          { name: 'Dwight Schrute', phone: 9196554334, email: 'beetlover@schrutefarms.com', image: 'https://pbs.twimg.com/media/DLKU4vbW4AAI7OE.jpg:large', key: 57920},
          { name: 'Michael Scott', phone: 8572471999, email: 'worldsbestboss@dundermifflin.com', image: 'https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png', key: 88197},
          { name: 'Stanley Hudson', phone: 8582174305, email: 'crosswordslegend@dundermifflin.com', image: 'https://theofficefanbase.weebly.com/uploads/7/9/8/5/7985207/3926170.jpg', key: 88196},
          { name: 'Phyllis Vance', phone: 9191107384, email: 'phyllisvance@dundermifflin.com', image: 'https://peopledotcom.files.wordpress.com/2019/10/phyllis-smith.jpg?w=2700&h=1800', key: 88195}
        ]
      }
    }

  addContact (contact) {
    const generateKey = () => Math.round(Math.random() * 100000000)
    contact['key'] = generateKey();
    this.setState({contacts: this.state.contacts.concat([contact])});
  }

  updateContact (contact) {
    const newContacts = this.state.contacts.map((c) => {
      if (contact.key === c.key) {
        c = contact;
      }

   return c;
  });

    this.setState({contacts: newContacts});
  }

  removeContact(key) {
    const removeContact = this.state.contacts.filter((c) => {
      if(c.key !== key) {
        return c
      }
    })
    this.setState({contacts: removeContact})
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/contacts' render={() => (
            <ContactsList addContact={this.addContact} contacts={this.state.contacts} updateContact={this.updateContact} removeContact={this.removeContact}/>
          )}/>
        </Switch>
      </div>
    )
  }
}

export default App;
