import { Link } from "react-router-dom"
import  React from "react"
import _ from 'lodash'

const ContactPage = ({props, contacts}) => {
  const contactPage = _.find(contacts, {id: parseInt(props.match.params.id, 10)})

  return (
    <div>
      <h1>Name: {contactPage.name}</h1>
      <h2>Email: {contactPage.email}</h2>
      <h2>Phone: {contactPage.phone}</h2>

      <Link to='/ContactList'>Back</Link>
    </div>

  )

}

export default ContactPage
