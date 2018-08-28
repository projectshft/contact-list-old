import { Route, Link } from 'react-router-dom'
import React from 'react'
// import Contact from './Contact';
// import Contacts from './Contacts';
import ContactNav from './ContactNav'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      contacts: [
        { image: 'http://cliparts.co/cliparts/6ip/5XK/6ip5XKxMT.png', name: "Benny B", email: 'benny@aol.com', phone: '(919) 123-1457', contactId: '1322132' },
        { image: 'https://pluspng.com/img-png/png-person-thinking-thinking-man-png-1169.png', name: "Davey D", email: 'davey@stuff.com', phone: '(301) 875-1234', contactId: '1041932' },
      ]

    }
    this.addContact = this.addContact.bind(this);
  }

  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])});
  }

  // not working
  removeContact(e) {
    var array = [...this.state.contacts]; // make a separate copy of the array
    var index = array.indexOf(e.target.value)
    array.splice(index, 1);
    // debugger;
    this.setState({contacts: array});
  }

  render() {
    return (
      <div>
      Contact List App
      <Link to='/contacts/add'>Add Contact</Link>
        <Route path='/contacts' render={() => (
          <ContactNav addContact={this.addContact} contacts={this.state.contacts} />
        )}/>
      </div>
    )
  }
}

export default App
