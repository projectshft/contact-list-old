import React, { Component } from 'react'
import Contact from './Contact'

//generate a random ID number for all contacts
const generateId = () => Math.round(Math.random() * 100000000)

//Full list of all contacts
class ContactList extends Component {

  render() {
    const { contacts } = this.props;
    return (
      <div>
        {contacts.map(contact =>
          <Contact 
          key={contact.id}
          name={contact.name} 
          email={contact.email} 
          phone={contact.phone} 
          img={contact.imgUrl}
          />
        )}
      </div>
    )
  }
}

export default ContactList
