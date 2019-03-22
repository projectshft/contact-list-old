import React, { Component } from 'react';
import Contact from './Contact';

export class ContactList extends Component {
  state = {
    contactsArr: [
      {
        id: 1,
        avatar: 'this is my avatar',
        name: 'Elinor Hurt',
        email: 'elinor.hurt@gmail.com',
        phone: '7042130348'
      },
      {
        id: 2,
        avatar: 'this is my avatar',
        name: 'Jane Williams',
        email: 'jane.williams@gmail.com',
        phone: '9104897382'
      },
      {
        id: 3,
        avatar: 'this is my avatar',
        name: 'Jackie Johnson',
        email: 'jackie.johnson@gmail.com',
        phone: '9198024312'
      }
    ]
  };

  render() {
    const { contactsArr } = this.state;

    return (
      <React.Fragment>
        {contactsArr.map(index => (
          <Contact key={index.id} contact={index} />
        ))}
      </React.Fragment>
    );
  }
}

export default ContactList;
