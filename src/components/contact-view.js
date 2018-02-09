import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

const ContactView = (props) => {
  const contact = ContactAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!contact) {
    return <div>Sorry, but the contact was not found</div>
  }
  return (
    <div>
      <h1>{contact.name} (Speed Dial #{contact.number})</h1>
      <h2>Name: {contact.name}</h2>
      <h2><img src={contact.imageurl}/></h2>
      <h2>Email: {contact.email}</h2>
      <h2>Phone Number: {contact.phone}</h2>
      <Link to='/list'>Back</Link>
    </div>
  )
}

export default ContactView
