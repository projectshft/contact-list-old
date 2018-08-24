import React from 'react';

const Contact = (props) => {

  return (
    <div>
      <li>
        <span>{props.contact.name} - <img src="{props.contact.image}" /></span>
        <p>{props.contact.phone}</p>
        <p>{props.contact.email}</p>
      </li>
    </div>
  )
}

export default Contact
