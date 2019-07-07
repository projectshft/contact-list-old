import React from 'react';
import { Link } from 'react-router-dom';
//each contact is own component when rendered into contact list to eventually make deletion and editing easier with key but I probably won't make it to the extensions :)
const Contact = ({contact}) => (
        <tr>
          <td><Link to={`/contacts/${contact.id}`}>{contact.name}</Link></td>
          <td><img src={contact.image_url} className='img-fluid'/></td>
        </tr>

      )
export default Contact
