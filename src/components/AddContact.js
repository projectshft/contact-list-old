import React, { Component } from 'react';

//we will use a class component because add contact will be stateful
export class AddContact extends Component {
    //addContact should hold it's own state from the input fields

    //addContact should also have access to Contacts state because it will need to add to it

    //addContact should have input fields to create a new contact

    // After clicking "submit", the user should be re-routed back to the /contacts view where they'll see all their contact.
    
  render() {
    return (
      <h1>This is the Add Contact Component</h1>
    )
  }
}

export default AddContact;
