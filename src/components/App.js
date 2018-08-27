import { Switch, Route } from 'react-router-dom'
import ContactList from './ContactList'
import Home from './Home';
import React from 'react';
import logo from '../book-icon.jpg'
import '../App.css'


class App extends React.Component {
  constructor () {
    super()

    this.state = {
      contacts: [
        {
          id: this.generateId(),
          firstName: "Ezio",
          lastName: "Auditore",
          imageUrl: "https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/ezio-auditore-da-firenze-assassins-creed-revelations-66.1.jpg",
          email: "ezioauditore@carrierpigeon.org",
          phoneNumber: "0040070023"
        },
        {
          id: this.generateId(),
          firstName: "Gordon",
          lastName: "Freeman",
          imageUrl: "https://lh3.googleusercontent.com/--4ZelXuSy5I/AAAAAAAAAAI/AAAAAAAAACo/kyl0yimvnog/photo.jpg?sz=328",
          email: "thefreeman@blackmesa.org",
          phoneNumber: "4055122791"
        },
        {
          id: this.generateId(),
          firstName: "Master",
          lastName: "Chief",
          imageUrl: "http://images.goodsmile.info/cgm/images/product/20141126/4749/31502/large/b7b205b3540fc9034da0d2a129aa12e0.jpg",
          email: "john-117@unscn.org",
          phoneNumber: "97992115465221"
        }
      ]
    }

    this.addContact = this.addContact.bind(this);
  }

  generateId () {
   return Math.round(Math.random()*100000000)
 }

  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])});
  }

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Contacts</h1>
          </header>
        </div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/contactList' render={() => (
            <ContactList contacts={this.state.contacts} />
          )}/>
        </Switch>
      </div>
    )
  }
}

export default App;
