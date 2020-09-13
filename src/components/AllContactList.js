import { Link } from 'react-router-dom';
import React from 'react';

const AllContactList = ({ contacts }) => (
  <div>
    <ul>
      {contacts.map((contact) => (
        <li
          key={contact.id}
          contact={contact}>
          {/* // editContact={editContact}
          // deleteContact={deleteContact} */}
          <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default AllContactList;

// render() {
//   // destructuring to use the keys (id, name) below
//   const { id, name } = this.props.contact;
//   return (
//     <div className='container contact-item'>
//       <div className='row'>
//         <div class='col-md-3 offset-md-2' style={{ fontWeight: 'bold' }}>
//           {name}
//         </div>
//         <div
//           class='col-md-1 '
//           style={{ textDecoration: 'underline', cursor: 'pointer' }}
//           onClick={this.props.editContact.bind(this, id)}>
//           edit
//         </div>
//         <div
//           class='col-md-1 '
//           style={{ textDecoration: 'underline', cursor: 'pointer' }}
//           onClick={this.props.deleteContact.bind(this, id)}>
//           delete
//         </div>
//       </div>
//     </div>
//   );
// }
// }
