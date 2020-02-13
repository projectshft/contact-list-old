import React from 'react'
import { Link } from 'react-router-dom'

class NewContact extends React.Component {
  render() {
    return (
      <div>
      	New Contact
      	<div><Link to='/contacts'>Back</Link></div>
      </div>

    )
  }
}

export default NewContact;