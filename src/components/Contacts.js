import React from 'react';
import { Link } from 'react-router-dom'

class Contacts extends React.Component {

  constructor() {
    super()

    this.handleDelete = this.handleDelete.bind(this); 
  }

  handleDelete(event) {
    event.preventDefault();
    const thisId = Number(event.target.value); 
    const contacts = this.props.contacts;
    const contact = contacts.find((contact) => { return contact.id === thisId; });
    const name = contact.name; 
    if (window.confirm(`Delete ${name} from contacts?`)) { 
      this.props.deleteContact(thisId);
    }
    //this.props.deleteContact(thisId);
  }

  render() {

    const contacts = this.props.contacts; 
    const list = contacts.map((contact) => (
      <li key={contact.id}> 
        <Link to={`/${contact.id}`}>
          {contact.name}
        </Link>
        <Link to={`/${contact.id}/edit`}>
          Edit
        </Link>
        <button value={contact.id} onClick={this.handleDelete}>Delete</button>
      </li>
      )
    );

    return (
      <div className="row">
        <div>
          <h2>Contacts</h2>
        </div>
        <ul className='col-md-4 list-group'>
          {list}
        </ul>
        <button><Link to='/new'>Add Contact</Link></button>
      </div>
    )
  }

}

export default Contacts; 