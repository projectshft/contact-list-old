import React from 'react';
import './App.css';
import { Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'open-iconic/font/css/open-iconic-bootstrap.css'

const AllContacts = (props) => {
  // Get the specific contact list for the route selected (all, family, etc.)
  const contactsList = props.getContacts(props.match.path.slice(1))
  // Display contacts in alphabetical order
  contactsList.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
});

  const handleXClick = (contact) => {
    if (window.confirm(`Are you sure you want to delete ${contact.name}?`)) {
      props.deleteContact(contact)
    }
    props.history.push('/')
  }

  const handleEditClick = (contact) => {
    props.history.push(`/${contact.id}/edit`)
  }

  //routes user to the "new" page where they can create a new contact
  const handleAddContact = (contact) => {
    props.history.push('/new')
  }

  //only displays the "Add Google Contacts" button if the contacts have not been added yet
  const synced = props.getSyncStatus() ? "hide" : ""

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
    <div>
      <button className="ml-3 btn btn-sm btn-primary" onClick={handleAddContact}>
        Add a contact
      </button>
    </div>
    <div className="mb-5" >
      <button className={`${synced} btn btn-primary btn-sm mt-3 ml-3`} id="authorize-button" onClick={props.handleAuthClick}>Add Google Contacts</button>
    </div>
    <div className="spacer"></div>
  </div>)
}

export default AllContacts
