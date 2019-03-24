import React from 'react';
import PropTypes from 'prop-types';

const Contact = props => {
  const { id, fname, lname, phone, email } = props.contact;

  return (
    <tr
      id={id}
      className="contact"
      title="Click to view contact"
      onClick={props.detailView}
    >
      <th scope="row">{props.number}</th>
      <td>{fname}</td>
      <td>{lname}</td>
      <td style={{ whiteSpace: 'nowrap' }}>{phone}</td>
      <td>{email}</td>
      <td className="delete">
        <i
          id={id}
          className="fas fa-times-circle delete"
          title="Delete contact"
          onClick={props.deleteContact}
        />
      </td>
    </tr>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
  detailView: PropTypes.func.isRequired
};

export default Contact;
