import React from 'react';
import { Link } from 'react-router-dom'
import _ from 'lodash'

const Contact = (props, contacts) => {
  const person = _.find(props.contacts, { id: parseInt(props.routerProps.match.params.id, 10) });
  console.log(props)
  console.log(person)

  const makeSelection = function () {
    props.updateSelectedContact(person.id)
  }

  const editContact = function () {
    alert('clicked edit on id ' + person.id +'!')
  }

  const deleteContact = function () {
    alert('clicked delete on id ' + person.id +'!')
  }

  if (!person) {
    return <div>Sorry, but the person was not found</div>
  }

  return (
    <div onClick={makeSelection} key={person.id}>
        <div><strong><Link to={`/contacts/${person.id}`}>{person.name}</Link></strong></div>
          <span>{person.number + ' - '}</span>
          <span>{person.email}</span>
        <div>
          <span><button onClick={editContact}>Edit</button></span>
          <span><button onClick={deleteContact}>Delete</button></span>
        </div>
        <p/>
    </div>
  )
}

export default Contact
