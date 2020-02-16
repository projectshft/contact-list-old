import { Switch, Route } from 'react-router-dom'
import React from 'react';


class App extends React.Component {
  constructor () {
    super()

    this.state = {
      contacts: [
          { name: 'Pam Halpert', phone: 8582164505, email: 'pamhalpert@dundermifflin.com', image: 'https://images-cdn.9gag.com/photo/azXy2QK_460s.jpg', key: 88199}
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
