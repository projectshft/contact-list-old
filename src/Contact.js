import { Link } from 'react-router-dom'
import React from 'react'

const Contact = ({keyNo, contact}) => {
  console.log('in Contact');
  console.log('Contact received ', contact);
  return (
    <li>
      <Link to={`/contacts/${keyNo}`} className="text-reset"> {contact} </Link>- <a href="#edit">edit</a>&nbsp;<a href="#delete">delete</a>
    </li>
  )
}

export default Contact