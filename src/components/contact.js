import React from 'react';


const Contact = (props) => {
  return (
    <li>
      <span>{props.contact.name} - {props.contact.id} </span>
    </li>
  )
}


export default Contact
