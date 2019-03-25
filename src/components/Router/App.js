import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactForm from '../NewContact';
import ContactList from '../ContactList';
import Contact from '../Contact';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        {
          "id": 1,
          "name": "Jason Park",
          "image_url": "https://belkcollege.uncc.edu/sites/belkcollege.uncc.edu/files/fields/stories/field_stories_image/Park%2C%20Jason_Web.jpg",
          "email": "jason.j.park79@gmail.com",
          "phone_number": 9804280008
        },
        {
          "id": 2,
          "name": "David Malan",
          "image_url": "https://cs.harvard.edu/malan/malan6.jpg",
          "email": "dmalan@cs50.com",
          "phone_number": 123456789
        },
        {
          "id": 3,
          "name": "Vitalik Buterin",
          "image_url": "https://www.cryptonewsz.com/wp-content/uploads/2019/03/vitalik-buterin-990x523.jpg",
          "email": "vbuterin@ethereum.com",
          "phone_number": 123456781
        },
        {
          "id": 4,
          "name": "Joe Lubin",
          "image_url": "https://3mgj4y44nc15fnv8d303d8zb-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Ethereums-Co-Creator-Joe-Lubin-Blockchain-696x449.jpg",
          "email": "jlubin@consensys.com",
          "phone_number": 123456782
        }

      ]
    }

    this.addContact = this.addContact.bind(this);
  }


  addContact(newContact) {
    this.setState({ contacts: this.state.contacts.concat([newContact]) }, () => {
      console.log('contacts updated', this.state.contacts)
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => (
            <ContactList contacts={this.state.contacts} />
          )} />
          <Route path='/new' render={(props) => (
            <ContactForm addContact={this.addContact} contacts={this.state.contacts} {...props} />
          )} />

          <Route path='edit' render={(props) => (
            <Contact contacts={this.state.contacts}  {...props}/>
          )} />

          <Route path='/contact/:id' render={(props) => (
            <Contact contacts={this.state.contacts}  {...props}/>
          )} />


        </Switch>
      </BrowserRouter>
    )
  };
};



export default App;
