import { Link } from 'react-router-dom'
import React from 'react'

const FullContactList = ({contacts}) => (
  <div>
    <div className="row">
      <div className="col-md-11 offset-md-1 d-flex mx-auto">
        <h1>Contact List</h1>
        <Link to='/contacts/new'>
          <button type="button" className="btn btn-primary mx-3 align-middle">Add Contact</button>
        </Link>
      </div>
    </div>
    <br />
    <div className="row">
      <div className="col-md-11 offset-md-1 d-flex mx-auto">
        <span>
        {contacts.map(c => (
          <h4 className="text-capitalize" key={c.id}>
            <Link className="contact" to={`/contacts/${c.id}`}>{c.name}</Link>
            <button type="button" className="btn btn-link edit-contact ml-1">Edit</button>
            <button type="button" className="btn btn-link remove-contact ml-1">Remove</button>
          </h4>
        ))
        }
        </span>
      </div>
    </div>
  </div>
)


export default FullContactList