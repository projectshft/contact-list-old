import { Link } from 'react-router-dom'
import React from 'react'


const ContactId = (props) => {
  console.log(props)
  return (
      <div className = {props.contact.id}>
        <li>
          <Link to={`/ContactList/${props.contact.id}`}>
            {props.contact.name}
          </Link>
        </li>
      </div>
  )
}

export default ContactId