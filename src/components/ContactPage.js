import { Link } from "react-router-dom"
import  React from "react"
import _ from 'lodash'
import PropTypes from 'prop-types'

const ContactPage = ({ contacts, match }) => {
  const {id} = match.params;
  const contact = contacts.find(contact => contact.id === Number(id));
  

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-4">
          <h1>{contact.name} ({contact.id})</h1>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
        </div>
        <div className="col-lg-auto"></div>
          <img src={contact.thumbnail} alt="" />
        </div>  
          <Link to='/Contacts'>Back</Link>
      </div>   
  )
}

ContactPage.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ContactPage