import React from 'react';
import { Link } from 'react-router-dom';

const Contact = (props) => (
  <tr>
    <td>
      <Link to={`/contacts/${props.contact.id}`}>{props.contact.name}</Link>
    </td>
  </tr>
);

export default Contact;