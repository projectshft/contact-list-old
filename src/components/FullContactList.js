import { Link } from 'react-router-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const FullContactList = ({contacts}) => (
  <div className="row">
        {
          //mapping all contacts from App.js to render the full list 
          contacts.map(contact => (
            <div> 
              <div className="col-md-5" key={contact.id}>
                {/* creating a link for each contact to route to it's own "details" page
                the contacts details will be rendered with the "ContactInfo" component */}
                <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
              </div>
              <div ClassName="col-md-5">
                <button className="btn btn-primary"><Link className="text-white" to='/contacts/new'>Add a Contact</Link></button>
              </div>
            </div>
          ))
        }
  </div>
)

export default FullContactList