import { Link } from 'react-router-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../style.css'
import PropTypes from 'prop-types'

const FullContactsList = ({contacts}) => (
  <div className="row ">
    <div className="col-md-3 offset-md-5 contacts-container">
      <h1>Contacts</h1>
      <br/>
      <ul className="list-group">
        {
          contacts.map(contact => (
            <li className="list-group-item" key={contact.id}>
              <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
              <span>  edit  </span>
              <span>  delete  </span>
            </li>
          ))
        }
      </ul>
      <br/>
      <Link to={'/contacts/new'}>
        <button type="button" className="btn btn-primary">Add Contact</button>
      </Link>
    </div>
  </div>
)

FullContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.exact({
    "id": PropTypes.number.isRequired,
    "name": PropTypes.string.isRequired,
    "phone_number": PropTypes.string.isRequired,
    "img_url": PropTypes.string.isRequired,
    "email": PropTypes.string.isRequired
  }))
}

export default FullContactsList
