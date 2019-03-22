import React, { Component } from 'react';

//we will use a class component because Contact will be stateful
export class Contact extends Component {

    //each time a new contact is created, a unique id should be generated for them 

    //Contact should use props to access the state that Contacts holds

    //a "Back" button will takes the user back to the /contacts view and main contacts list.
  render() {

    const { name } = this.props.contact;

    return (
      <div>
            <ul className="list-group">
                <li className="list-group-item">Name: {name}</li>
                <li className="list-group-item">Name: {name}</li>
                <li className="list-group-item">Name: {name}</li>
            </ul>
      </div>
    )
  }
}

export default Contact;
