import React, { Component } from 'react';

//we will use a class component because Contact will be stateful
export class Contact extends Component {

    //each time a new contact is created, a unique id should be generated for them 

    //Contact should use props to access the state that Contacts holds

    //a "Back" button will takes the user back to the /contacts view and main contacts list.
  render() {
    return (
      <div>
          <h4>This is the Contact Component</h4>
      </div>
    )
  }
}

export default Contact;
