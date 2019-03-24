import React from 'react';
import PropTypes from 'prop-types';

const Contact = props => {
  const { id } = props.contact;

  return (
    <tr id={id} className="contact" onClick={props.detailView}>
      <th scope="row">{props.number}</th>
      <td>{props.contact.fname}</td>
      <td>{props.contact.lname}</td>
      <td style={{ whiteSpace: 'nowrap' }}>{props.contact.phone}</td>
      <td>{props.contact.email}</td>
      <td className="delete">
        <i
          id={id}
          className="fas fa-times-circle delete"
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
