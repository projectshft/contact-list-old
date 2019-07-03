import React from 'react';
import { Link } from 'react-router-dom'
//import _ from 'lodash'

class ContactView extends React.Component {

  render() {

    const contacts = this.props.contacts; 
    // hard code id value as placeholder 
    const contact = contacts.find((contact) => { return contact.id === 0; });

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