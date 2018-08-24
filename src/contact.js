import React from 'react';

const Contact = (props) => {

  let person = props.contact
  console.log(person);

  return (
    <div>
        <div><strong>{person.name}</strong></div>
        <span>{person.number + ' - '}</span>
        <span>{person.email}</span>
        <p/>
    </div>
  )
}

export default Contact
