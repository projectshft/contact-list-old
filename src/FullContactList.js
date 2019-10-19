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
                <Link id='delete-link' to={``} onClick={(e) => {
                  let id = e.target.parentElement.firstChild.attributes[1].nodeValue.match(/\d+/)[0];
                  let contactIdx = this.props.contacts.findIndex((contact) => contact.id === parseInt(id));
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
