import { Link } from 'react-router-dom'
import React from 'react'

class FullContactList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <ul className="list-group">
          {
            this.props.contacts.map(contact => (
              <li className="list-group-item" key={contact.id}>
                <Link id="contact-name-list" to={`/contacts/${contact.id}`}>{contact.name}</Link>
                <Link id='edit-link' to={`/contacts/${contact.id}/edit`}>edit</Link>
                <Link contactid={contact.id} id='delete-link' to={''} onClick={(e) => {
                  let contactid = e.target.attributes[0].value // grab contact id from target
                  let contactIdx = this.props.contacts.findIndex((contact) => contact.id === parseInt(contactid, 10)); // get the index of this contact in contacts array
                  this.props.deleteContact(contactIdx);

                }
                }>delete</Link>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}



export default FullContactList
