import React from 'react';
import { Link } from 'react-router-dom'

class ContactView extends React.Component {

  render() {
    return (
      <div>
      <div>
        View Contact 
      </div>
      <button><Link to='/'>back</Link></button>
      </div>
    )
  }

}

export default ContactView; 