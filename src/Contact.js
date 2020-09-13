import React from 'react'

const Contact = ({contact}) => {
  console.log('in Contact');
  console.log('Contact received ', contact);
  return (
    <li>
      <span data-key="{ index }">{contact} - <a href="#edit">edit</a>&nbsp;<a href="#delete">delete</a></span>
    </li>
  )
}

export default Contact