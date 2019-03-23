import React from 'react';

const Contact = props => {
  const { id } = props.contact;

  return (
    <tr id={id} className="contact" onClick={props.detailView}>
      <th scope="row">{props.number}</th>
      <td>{props.contact.fname}</td>
      <td>{props.contact.lname}</td>
      <td>{props.contact.phone}</td>
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

export default Contact;
