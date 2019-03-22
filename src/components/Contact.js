import React, { Component } from 'react';
import PropTypes from 'prop-types';

//we will use a class component because Contact will be stateful
export class Contact extends Component {

    //each time a new contact is created, a unique id should be generated for them

    //a "Back" button will takes the user back to the /contacts view and main contacts list.
  render() {

    const { name } = this.props.contact;

    return (
      <div>
        <ul className="list-group">
            <li className="list-group-item shadow-sm bg-white rounded" style={contactNameStyle}>{name}</li>
        </ul>
      </div>
    )
  }
}

const contactNameStyle = {
    padding: '1em'
}

//Contact should use props to access the state that Contacts holds
Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

export default Contact;
