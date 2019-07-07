import React from 'react';
import { Link } from 'react-router-dom';

const Contact = ({contact}) => (
        <tr>
          <td><Link to={`/contacts/${contact.id}`}>{contact.name}</Link></td>
          <td><img src={contact.image_url} className='img-fluid'/></td>
        </tr>

      )
export default Contact
