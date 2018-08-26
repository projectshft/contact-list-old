import React from 'react';
import { Link } from 'react-router-dom'

const Contact = (props) => {

  let person = props.contact

  let makeSelection = function () {
    props.updateSelectedContact(person)
  }

  return (
    <div onClick={makeSelection} key={person.id}>
        <div><strong><Link to={`/contacts/${person.id}`}>{person.name}</Link></strong></div>
        <span>{person.number + ' - '}</span>
        <span>{person.email}</span>
        <p/>
    </div>
  )
}

export default Contact
