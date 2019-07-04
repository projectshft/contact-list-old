import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

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
  contacts: PropTypes.array
};

export default ContactsList;