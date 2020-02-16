import { Link } from 'react-router-dom'
import React from 'react';
import PropTypes from 'prop-types'

// Create a stateless component that passes in all of the properties it will need
const Contacts = ({contacts, addContact, updateContact, removeContact}) => (
    <div className="text-center">
      <br></br>
      <h1 className="text-center">Contacts</h1>
      <br></br>
      <table className="table table-bordered col-md-4 shadow p-3 mb-5 bg-white rounded">
        <tbody>
          <tr>
            <td className="text-left">
               {/* Map all of the contacts in the array to render the list of Contacts */}
                {
                contacts.map(c => (
                  <div className="contact-div" key={c.key}>
                    {/* Create a link to the contact detail using the unique key for each contact name */}
                    <Link to={`/contacts/${c.key}`} className="text-info contact-name">{c.name}</Link>
                    {/* Create a remove button that confirms the user's decision and then invokes the removeContact function */}
                    <span><button type="button" className="btn btn-info btn-sm" onClick={(e)=> {if(window.confirm('Are you sure you want to delete?')){removeContact(c.key)}}}>Remove</button></span>
                    {/* Create a link that will take the user to the contact edit page */}
                    <span><Link to={`/contacts/edit/${c.key}`} className="text-info">Edit</Link></span>
                  </div>
                  ))
                }
              </td>
            </tr>
          </tbody>
        </table>
       {/* Create a link that will take the user to the new contact page */}
      <Link to='./contacts/new'><button type="button" className="btn btn-info">Add Contact</button></Link>
    </div>
  )

// Add proptypes to benefit myself and other devs working on this code in the future
Contacts.propTypes = {
  contact: PropTypes.shape({
    key: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }),
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
  contactKey: PropTypes.number
};

export default Contacts
