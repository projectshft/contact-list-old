import { Link } from "react-router-dom"
import  React from "react"
import _ from 'lodash'
import PropTypes from 'prop-types'

const ContactPage = ({ contacts, match }) => {
  const {id} = match.params;
  const contact = contacts.find(contact => contact.id === Number(id));
  

  return (
    <div>
      <h1>{contact.name} ({contact.id})</h1>
      <h2>Email: {contact.email}</h2>
      <h2>Phone: {contact.phone}</h2>
      <h2>Thumbnail: {contact.thumbnail}</h2>

      <Link to='/Contacts'>Back</Link>
    </div>

  )

}

ContactPage.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ContactPage