import { Link } from 'react-router-dom'
import React from 'react'

const Individual = (props) => {
    // const individual = contactItems.get(props)

  return (
      <div className = {props.contact.id}>
        <li>
          <Link to={`/Contacts/${props.contact.id}`}>
            {props.contact.name}
          </Link>
        </li>
      </div>
  )


}
export default Individual
