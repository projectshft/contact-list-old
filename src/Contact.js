import { Link } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'

const Contact = ({keyNo, contact}) => {
  console.log('in Contact');
  console.log('Contact received ', contact);
  return (
    <li>
      <Link to={`/contacts/${keyNo}`} key="{keyNo}" className="text-reset"> {contact} </Link>- <a href="#edit">edit</a>&nbsp;<a href="#delete">delete</a>
    </li>
  )
}
Contact.proptypes = {
  keyNo: PropTypes.number.isRequired,
  contact: PropTypes.array.isRequired
}
export default Contact