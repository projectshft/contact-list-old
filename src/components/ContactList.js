import React from 'react'
import { Link }  from 'react-router-dom'
import ContactId from './ContactId'

const ContactList = (props) => {
  const people = props.contacts.map((newContact, index) => {
    return (
      <ContactId key = {index} contact = {newContact} />
    )
  })

  console.log("here");

  return (
    <div>
      <ul className="col-md-4 list-group">
        <div>
          <Link to = {`/AddContact`}>Add Contact </Link>
        </div>

    <br />
    {people}
    <br />
        <div>
          <Link to ={`/`}> Back to Home </Link>
        </div>
      </ul>
    </div>



  )
}

export default ContactList
