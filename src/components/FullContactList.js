import { Link } from 'react-router-dom'
import React from 'react'

const FullContactList = ({contacts}) => (
  <div>
    <div className="row">
      <div className="col-md-11 offset-md-1 d-flex mx-auto">
        <h1>Contact List</h1>
        <Link to='/contacts/new'>
          <button type="button" className="btn btn-primary mx-3 align-self-center">Add Contact</button>
        </Link>
      </div>
    </div>
    <br />
    <div className="row">
      <div className="col-md-11 offset-md-1 d-flex mx-auto">
        <span>
        {contacts.map(c => (
          <p className="text-capitalize contact" key={c.id}>
            <Link to={`/contacts/${c.id}`}>{c.name}</Link>
            <a className="mx-2">Edit</a>
            <a>Remove</a>
          </p>
        ))
        }
        </span>
      </div>
    </div>
  </div>
)


export default FullContactList