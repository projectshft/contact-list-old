import React from 'react';
import { Link } from 'react-router-dom';

const ContactsList = (props) => {
  const contactItems = props.contacts.map((contact) => {
    return (
      <tr>
        <td>
          <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
        </td>
      </tr>
    )
  });

  return (
    <table className='table table-hover'>
      <tbody>
        {contactItems}
      </tbody>
    </table>
  )
};

export default ContactsList;