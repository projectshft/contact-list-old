import React from 'react';
import { Link } from 'react-router-dom'

class Contacts extends React.Component {

  constructor() {
    super()

    this.handleDelete = this.handleDelete.bind(this); 
  }

  handleDelete(event) {
    event.preventDefault();
    const thisId = event.target.value; 
    this.props.deleteContact(thisId);
  }

  render() {

    const contacts = this.props.contacts; 
    const list = contacts.map((contact) => (
      <li key={contact.id}> 
        <Link to={`/${contact.id}`}>
          {contact.name}
        </Link>
        <button value={contact.id} onClick={this.handleDelete}>Delete</button>
      </li>
      )
    );

    return (
      <div>
        <div>
          Contacts
        </div>
        <ul>
          {list}
        </ul>
        <button><Link to='/new'>Add Contact</Link></button>
      </div>
    )
  }

}

export default Contacts; 