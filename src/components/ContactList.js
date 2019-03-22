import React, { Component } from 'react'
import Contact from './Contact'

//Full list of all contacts
class ContactList extends Component {

  render() {
    const { contacts } = this.props;
    return (
      <section className="full-page padding-lg">
        <div className="container"> 
          <ul className="row">
          {contacts.map(contact =>
            <Contact 
            key={contact.id}
            name={contact.name} 
            email={contact.email} 
            phone={contact.phone} 
            img={contact.imgUrl}
            />
          )}
          </ul>
        </div>
      </section>
    )
  }
}

export default ContactList
