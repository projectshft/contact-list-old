import React from 'react';
import Contact from './Contact'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faEdit from '@fortawesome/fontawesome-pro-regular/faEdit'
import faSortNumericDown from '@fortawesome/fontawesome-pro-regular/faSortNumericDown'
const ContactList = (props) => {
  console.log(props.contactInfo)
  const contactList = props.contactInfo.map((contact, i) => <Contact key={i} contact={contact} /> )
  return (
    <div>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#<FontAwesomeIcon icon={faSortNumericDown}/></th>
          <th scope="col">Name:</th>
          <th scope="col">email</th>
          <th scope="col">image:</th>
          <th scope="col">Telephone:</th>
          <th scope="col"><FontAwesomeIcon icon={faEdit} /></th>
        </tr>
      </thead>
      <tbody>
        {
          props.contactInfo.map((contact, i) => {
            return <Contact key={i} id={i} contact={contact} />
          })
        }
      </tbody>
    </table>
    </div>
  );
};

export default ContactList;