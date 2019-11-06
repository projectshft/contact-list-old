import React from 'react';
import { Link } from 'react-router-dom';

 //I know this is ugly.  A page break wouldnt work because it would be on the next line.  Added spaces so the phone number appears next to the name
const Contact = ({contact}) => (
        <tr>
           
          <td><Link to={`/contacts/${contact.id}`}>{contact.name}  -                        {contact.number}</Link></td>
        </tr>

      )
export default Contact