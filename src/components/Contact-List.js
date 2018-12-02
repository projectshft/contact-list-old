import React from 'react'
import Header from './Header.js'
import ContactListItem from './Contact-List-Item'


const ContactList = ({contacts}) => {
  /* instead of having hardcoded contacts at the start of the application,
     I decided to take the approach of having a notification to inform the
     user that no contacts have been entered */
    if (contacts.length  === 0) {
      return (
        <div>
          <Header />
        <div className="jumbotron">
        <p>Oh no, you have no friends :( Please add a contact using the 'Add Contacts' Button Above</p>
        </div>
        </div>
      )
    }
    const Contacts = contacts.map((contact, index) => {
      return (
        <ContactListItem key={index} contact={contact} />
      )
    })
    
    return (
     <div>
      <Header />
      <ul className="list-group">
        {Contacts}
        </ul>
      {/* <Contact-List-Item contacts={props}/>  */}
    </div>
    )
}



export default ContactList

