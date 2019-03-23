import React from 'react';

const Contact = props => {
  return (
    <tr className="contact">
      <th scope="row">{props.number}</th>
      <td>{props.contact.fname}</td>
      <td>{props.contact.lname}</td>
      <td>{props.contact.phone}</td>
      <td>{props.contact.email}</td>
      <td className="delete">
        <i className="fas fa-times-circle" />
      </td>
    </tr>
  );
};

export default Contact;
