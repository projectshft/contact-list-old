import React from 'react'
import ContactsTable from './ContactsTable'
import StyledLinkWhite from './StyledLinkWhite.js'

/*
 The normal React Link component's CSS was modified by creating two new components, SyledLinkWhite and StyledLink. Details can be found by looking at the StyledLink.js and StyledLinkWhite.js files in the components folder. They function exactly as the Link component would.
*/


const ContactsPage = ({contacts, removeContact}) => {

    return (
      <div className="container">
          <div className="row d-flex justify-content-center">
            <h1>Contacts</h1>
            <StyledLinkWhite to='/contacts/new'><button className="btn btn-primary addContactButton" type="button" name="button">Add Contact</button></StyledLinkWhite>
          </div>
          <div className="row d-flex justify-content-center">
            <table className="table contacts-list">
              <ContactsTable contacts={contacts} removeContact={removeContact}/>
            </table>
          </div>
      </div>
  )
}

export default ContactsPage
