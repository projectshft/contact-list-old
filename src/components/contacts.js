import { Link } from 'react-router-dom'
import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table'

const Contacts = ({contacts, addContact, updateContact, deleteContact}) => (

  <div>

    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th colSpan="3" className = "contacttitle">Contact List</th>
          <Link to ='/contacts/new'><button type="button" className="btn btn-primary addcontact" onClick={this.addContact}><th colspan="3" className = "text-center"> Add new contact </th> </button> </Link>
        </tr>
      </thead>
      <tbody>

    {contacts.map(c => (
      <tr  key={c.id} >
        <Link to={`/contacts/${c.id}`}><td colSpan="3">{c.name}</td></Link>
        <td></td>
        <Link to={`/contacts/${c.id}/edit`}><button type="button" className = "btn btn-outline-success"><td> Edit </td></button></Link>
        <td><button href = "#" onClick={(e)=> {if(window.confirm(`Are you sure you want to delete ${c.name} from your Contact List?`)) {deleteContact(c.id)}}} className = "btn btn-outline-danger"> Delete </button></td>

      </tr>

    ))}
    </tbody>
    </Table>

  </div>

)



export default Contacts


//edge cases
//empty
//phone numbers with letters
//email address that don't have an at  - specific email rules
//specific url rules
//


//edit rules

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired
}
