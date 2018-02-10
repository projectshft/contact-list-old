import React from 'react';
import './App.css';
import { Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'open-iconic/font/css/open-iconic-bootstrap.css'

const AllContacts = (props) => {
  const contactsList = props.getContacts(props.match.path.slice(1))
  const handleXClick = (contact) => {
    if (window.confirm(`Are you sure you want to delete ${contact.name}?`)) {
      props.deleteContact(contact)
    }
    props.history.push('/')
  }
  const handleEditClick = (contact) => {
    props.history.push(`/${contact.id}/edit`)
  }

  const handleAddContact = (contact) => {
    props.history.push('/new')
  }

  return (<div className="container-fluid">
    <div className="row">
      <ul>
        {
          contactsList.map(c => (<li key={c.id}>
            <button type="button" onClick={() => { handleEditClick(c) }} className="mb-1 btn btn-sm btn-outline-primary">
              <span className="oi oi-pencil"></span>
            </button>
            <button type="button" onClick={() => { handleXClick(c) }} className="ml-1 mr-2 mb-1 btn btn-sm btn-outline-danger">
              <span className="oi oi-x"></span>
            </button>
            <Link to={`/${c.id}`}>{c.name}</Link>

          </li>))
        }
      </ul>
    </div>
    <div className="row">
      <button className="ml-5 btn btn-sm btn-primary" onClick={handleAddContact}>
        Add a contact
      </button>
    </div>
  </div>)
}

export default AllContacts
