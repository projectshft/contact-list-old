import React from 'react'
import ContactsTable from './ContactsTable'

const ContactsPage = ({contacts}) => {
    console.log(contacts);
    return (
      <div className="container">
          <div className="row d-flex justify-content-center">
            <h1>Contacts</h1>
            <button className="btn btn-primary btn-sm" type="button" name="button">Add Contact</button>
          </div>
          <div className="row d-flex justify-content-center">
            <table className="table contacts-list border">
              <ContactsTable contacts={contacts}/>
            </table>
          </div>
      </div>
  )
}

export default ContactsPage
