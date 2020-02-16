import { Link } from 'react-router-dom'
import React from 'react';
import PropTypes from 'prop-types'

const Contacts = ({contacts, addContact, updateContact, removeContact}) => (
    <div className="text-center">
      <br></br>
      <h1 className="text-center">Contacts</h1>
      <br></br>
      <table className="table table-bordered col-md-4 shadow p-3 mb-5 bg-white rounded">
        <tbody>
          <tr>
            <td className="text-left">
               {
                contacts.map(c => (
                  <div className="contact-div" key={c.key}>
                    <Link to={`/contacts/${c.key}`} className="text-info contact-name">{c.name}</Link>
                    <span><button type="button" className="btn btn-info btn-sm" onClick={(e)=> {if(window.confirm('Are you sure you want to delete?')){removeContact(c.key)}}}>Remove</button></span>
                    <span><Link to={`/contacts/edit/${c.key}`} className="text-info">Edit</Link></span>
                  </div>
                  ))
                }
              </td>
            </tr>
          </tbody>
        </table>
      <Link to='./contacts/new'><button type="button" className="btn btn-info">Add Contact</button></Link>
    </div>
  )

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
