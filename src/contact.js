import React from 'react';
import { Link, matchPath } from 'react-router-dom'
import _ from 'lodash'


//stuck here because match does not exist at this point, so i can't match anything to it
//ex: console.log(person) -- person is empty because match is empty
//seems like it has something to do with the order that things are rendering in, but i'm stuck

const Contact = (props) => {

  const person = _.find(props.contact, { id: parseInt(props.routerProps.match.params.id, 10) });

  console.log(props)
  console.log(props.contact)
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
