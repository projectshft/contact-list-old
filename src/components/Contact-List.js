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
   return (
     <div>
     <Home />
     <ul>
      <Contact-List-Item contacts={contacts}/> 
      </ul>
      </div>
    )
}



export default ContactList

