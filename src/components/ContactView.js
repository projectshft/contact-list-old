import React from 'react';
import { Link } from 'react-router-dom'
//import _ from 'lodash'

class ContactView extends React.Component {

  render() {

    const thisId = Number(this.props.props.match.params.id);
    const contacts = this.props.contacts; 
    const contact = contacts.find((contact) => { return contact.id === thisId; });

    return (
      <div>
      <div>
        View Contact 
      </div>
      <div>
        {contact.name}
      </div>
      <button><Link to='/'>back</Link></button>
      </div>
    )
  }

}

export default ContactView; 