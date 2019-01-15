import React from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'

const Contact = ({props, contacts}) => {
  const contact = _.find(contacts, { id: parseInt(props.match.params.id, 10) });
    if (!contact) {
        return <div>Sorry, but the user was not found</div>
    }

  return (
    <div className='container'>
     <div className='row'>
      <h1>{contact.name} (ID#{contact.id})</h1>
      <p>Email: {contact.email}</p>  
      <p>Phone: {contact.phone}</p>
     </div>
      <p>
          <img className="profile-pic" src='http://pixelartmaker.com/art/cb7c1daa279eeed.png'></img>
      </p>
      
      <Link to='/contacts'>Back</Link>
    </div>
  )
}  
export default Contact