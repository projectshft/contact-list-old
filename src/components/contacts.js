import { Link } from 'react-router-dom'
import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table'

// the contacts array and the addContact, updateContact and DeleteContact are passed down as props
const Contacts = ({contacts, addContact, updateContact, deleteContact}) => (

  <div>

    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th colSpan="3" className = "contacttitle">Contact List</th>
          {/* Link to the contactNew component where you create a new contact */}
          <th colSpan="3"><Link to ='/contacts/new'><button type="button" className="btn btn-primary addcontact" onClick={this.addContact}> Add new contact  </button> </Link></th>
        </tr>
      </thead>
      <tbody>

    {contacts.map(c => (
      <tr  key={c.id} >
      {/* From the /contacts route, each contact should be clickable. Clicking the contact will navigate you to /contacts/{the id of your contact}, and show the data for just that contact.*/}
        <td colSpan="3"><Link to={`/contacts/${c.id}`}>{c.name}</Link></td>

        {/* Link to the contactEdit component where you edit and update the existing contact */}
        <td><Link to={`/contacts/${c.id}/edit`}><button type="button" className = "btn btn-outline-success"> Edit </button></Link></td>
        {/* Delete button with windown confirmation before you delete the contact. */}
        <td><button href = "#" onClick={(e)=> {if(window.confirm(`Are you sure you want to delete ${c.name} from your Contact List?`)) {deleteContact(c.id)}}} className = "btn btn-outline-danger"> Delete </button></td>

      </tr>

    ))}
    </tbody>
    </Table>

  </div>

)



export default Contacts

//PropTypes required 
Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired
  }),
  addContact: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired
}
