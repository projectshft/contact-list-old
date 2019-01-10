//SHOW USER A LIST OF ALL OF THEIR CONTACTS
//HAS OWN ROUTE (/CONTACTS)
//Click "ADD CONTACT" --> /contacts/form

// import { Switch, Route } from 'react-router-dom';
import React from 'react';
import ContactList from './ContactList';


//PARENT COMPONENT
class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     contacts: { contacts }
  //   }
  // }
  

    // }

    //   this.addContact = this.addContact.bind(this);
    // }


    // addContact(contact) {
    //   this.setState({ contacts: this.state.contacts.concat([contact]) });
    // }

    render() {
      return (
        <div>
          <h1>My Contacts</h1>

          {/* PASS CONTACTS PROP TO CONTACT lIST CHILD */}
          <ContactList  contacts={this.props.contacts}/>
        </div>
      );
    };
  
};



export default App;
