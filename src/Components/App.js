// //SHOW USER A LIST OF ALL OF THEIR CONTACTS
// //HAS OWN ROUTE (/CONTACTS)
// //Click "ADD CONTACT" --> /contacts/form

import { Switch, Route } from 'react-router-dom';


import React from 'react';
import Contacts from './Contacts';                           //Home
import ContactList from './ContactList';                    //Roster


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: [
        {
          "id": '1',
          "name": "Albert Einstein",
          "image_url": "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
          "email": "aeinstein@example.com",
          "phone_number": 15555555555
        },
      ],
    }

    this.addContact = this.addContact.bind(this);
  }


  addContact(contact) {
    this.setState({ contactList: this.state.contacts.concat([contact]) });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/contacts' component={Contacts} />

{/* render f() passes props: contacts and addContact */}
          <Route path="/contactList" render={() => (
            <ContactList addContact={this.addContact} contacts={this.state.contacts} />)} />
        </Switch>
      </div>
    );
  }
}

export default App;
