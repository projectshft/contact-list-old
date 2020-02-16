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
          <th colSpan="3"><Link to ='/contacts/new'><button type="button" className="btn btn-primary addcontact" onClick={this.addContact}> Add new contact  </button> </Link></th>
        </tr>
      </thead>
      <tbody>

    {contacts.map(c => (
      <tr  key={c.id} >
        <td colSpan="3"><Link to={`/contacts/${c.id}`}>{c.name}</Link></td>

        <td><Link to={`/contacts/${c.id}/edit`}><button type="button" className = "btn btn-outline-success"> Edit </button></Link></td>
        <td><button href = "#" onClick={(e)=> {if(window.confirm(`Are you sure you want to delete ${c.name} from your Contact List?`)) {deleteContact(c.id)}}} className = "btn btn-outline-danger"> Delete </button></td>

      </tr>

    ))}
    </tbody>
    </Table>

  </div>

)



export default Contacts


Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image_url: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.number
  }),
  addContact: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired
}
