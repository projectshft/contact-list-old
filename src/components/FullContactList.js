import { Link } from 'react-router-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../css/FullContactList.css'

const FullContactList = ({contacts}) => (
  <div>
        {
          //mapping all contacts from App.js to render the full list 
          contacts.map(contact => (
            <div className="row py-2 mb-3 bg-light contact-list"> 
              <div className="col-md-4" key={contact.id}>
                {/* creating a link for each contact to route to it's own "details" page
                the contacts details will be rendered with the "ContactInfo" component */}
                <h5 className="pt-2"><Link to={`/contacts/${contact.id}`}>{contact.name}</Link></h5>
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary w-100">Edit</button>
              </div>
              <div className="col-md-2">
                <button className="btn btn-danger w-100">Delete</button>
              </div>
            </div>
          ))
        }
  </div>
)

export default FullContactList