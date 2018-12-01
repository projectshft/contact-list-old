import React from 'react'
import ContactsTable from './ContactsTable'
import StyledLinkWhite from './StyledLinkWhite.js'


const ContactsPage = ({contacts}) => {

    return (
      <div className="container">
          <div className="row d-flex justify-content-center">
            <h1>Contacts</h1>
            <StyledLinkWhite to='/contacts/new'><button className="btn btn-primary addContactButton" type="button" name="button">Add Contact</button></StyledLinkWhite>
          </div>
          <div className="row d-flex justify-content-center">
            <table className="table contacts-list">
              <ContactsTable contacts={contacts}/>
            </table>
          </div>
      </div>
  )
}

export default ContactsPage
