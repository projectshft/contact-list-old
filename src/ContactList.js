import { Link } from 'react-router-dom'
import React from 'react'
import Contact from './contact'

const ContactList = ({contacts, updateSelectedContact, routerProps}) => {
  // console.log(props);
  const contactList = contacts.map((contact, index) => {
    return (
      <Contact routerProps={routerProps} contact={contact} key={index} updateSelectedContact={updateSelectedContact}/>
    )
  })

console.log(contacts)

  return (
    <div>
    <header className="App-header">
      <h1 className="App-title">Recontact</h1>
    </header>
    <p/>

    <Link to='/contacts/new'>Add New Contact</Link>
    <p/>

    <div className="contacts">
      {contactList}
    </div>
    </div>
  )
}

export default ContactList
