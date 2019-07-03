import React from 'react';
import { Link } from 'react-router-dom'

class Contacts extends React.Component {

  render() {
    return (
      <div>
      <div>
        Contacts
      </div>
      <button><Link to='/new'>add</Link></button>
      </div>
    )
  }

}

export default Contacts; 