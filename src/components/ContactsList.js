import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const ContactsList = (props) => {
  const handleDeleteContactClick = (contact) => {
    props.removeContact(contact);
  };
  
  const contactItems = props.contacts.map((contact) => {
    return (
      <tr key={contact.id}>
        <td>
          <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
        </td>
        <td>
          <button className='btn btn-danger' onClick={() => handleDeleteContactClick(contact)}>Delete contact</button>
        </td>
      </tr>
    )
  });

  //TODO: add no contacts conditional

  return (
    <table className='table table-hover'>
      <tbody>
        {contactItems}
      </tbody>
    </table>
  )
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
  removeContact: PropTypes.func
};

export default ContactsList;