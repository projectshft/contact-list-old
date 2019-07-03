import React from 'react';
import { Link } from 'react-router-dom'

class Contacts extends React.Component {

  // constructor() {
  //   super()

  // }
  render() {

    const contacts = this.props.contacts; 
    const list = contacts.map((contact) => (
      <li key={contact.id}> 
        <Link to={"/"+contact.id}>
          {contact.name}
        </Link>
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
        <button><Link to='/new'>add</Link></button>
      </div>
    )
  }

}

export default Contacts; 