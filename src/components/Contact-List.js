import React from 'react'
import Home from './Home.js'
import ContactListItem from './Contact-List-Item'


const ContactList = ({contacts}) => {
  // debugger;
    if (contacts.length  === 0) {
      return (
        <div>
          <Home />
        <div className="jumbotron">
        <p>Oh no, you have no friends :( Please add a contact using the 'Add Contacts' Button Above</p>
        </div>
        </div>
      )
    }
    const Contacts = contacts.map((contact, id) => {
      return (
        <ContactListItem key={id} contact={contact} />
      )
    })
    
    return (
     <div>
      <Home />
      <ul className="list-group">
        {Contacts}
        </ul>
      {/* <Contact-List-Item contacts={props}/>  */}
    </div>
    )
}



export default ContactList

