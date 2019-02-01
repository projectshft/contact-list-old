//ALL OF THE ROUTING

//SHOW USER A LIST OF ALL OF THEIR CONTACTS
//HAS OWN ROUTE (/)


import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import State from './State';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Contact from './Contact';


//PARENT COMPONENT - stateful --> render
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          "id": '1',
          "name": "Albert Einstein",
          "image_url": "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
          "email": "aeinstein@example.com",
          "phone_number": 15555555555
        },
        {
          "id": '2',
          "name": "Niels Bohr",
          "image_url": "https://en.wikipedia.org/wiki/Niels_Bohr#/media/File:Niels_Bohr.jpg",
          "email": "nbohr@example.com",
          "phone_number": 15553355555
        },
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

          <Route path='/contact/:id' render={(props) => (
            <Contact contacts={this.state.contacts}  {...props}/>
          )} />

        
        </Switch>
      </BrowserRouter>
    )
  };

};



export default App;
