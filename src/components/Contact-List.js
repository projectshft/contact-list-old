import React from 'react'
// import ContactListItem from './Contact-List-Item'


const ContactList = ({contacts}) => {
  // debugger;
    if (contacts.length  === 0) {
      return (
        <div className="jumbotron">
        <p>Oh no, you have no friends :( Please add a contact using the 'Add Contacts' Button Above</p>
        </div>
      )
    }
   return (
      <Contact-List-Item contacts={this.contacts}/> 
    )
}



export default ContactList

