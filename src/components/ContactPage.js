import { Link } from "react-router-dom"
import  React from "react"
import _ from 'lodash'
import PropTypes from 'prop-types'

const ContactPage = ({props, contacts}) => {
  const contactPage = _.find(contacts, {id: parseInt(props.match.params.id, 10)})

  return (
    <div>
      <h1>{contactPage.name} ({contactPage.id})</h1>
      <h2>Email: {contactPage.email}</h2>
      <h2>Phone: {contactPage.phone}</h2>
      <h2>Thumbnail: {contactPage.thumbnail}</h2>

      <Link to='/ContactList'>Back</Link>
    </div>

  )

}

ContactPage.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired
}

export default ContactPage
