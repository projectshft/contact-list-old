import React from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash'

const Contact = (props) => {
  debugger
  const contactId = parseInt(props.search.match.params.id, 10)
  let contact = _.find(props.stateHandler.state.contacts, {id: contactId})

  const handleChange = (event) => {
    this.tempContact.name = event.target.value
  }


  if(!contact) {
    return ( <div>
      <h1> Test </h1>
          <h1>{props.name} (#{props.number})</h1>
          <h2>Email: {props.email}</h2>
          <img src={props.image_url}/>
          <Link to='/'>Back</Link>
        </div>
      )
    }

      let tempContact = {
        name: contact.name,
        email: contact.email,
        image_url: contact.image_url,
        phone_number: contact.phone_number

      }
      return (
          <div>
            <input value={tempContact.name}
            onChange={this.handleChange}/>
             <h1>(#{tempContact.phone_number})</h1>
            <h2>Email: {tempContact.email}</h2>
            <img src={tempContact.image_url}/>
            <Link to='/'>Back</Link>
          </div>
    )
}

Contact.defaultProps = {
  name: "Enter Name",
  number: 11111111,
  email: "Test@gmail.com",
  image_url: "http://via.placeholder.com/350x150"

}

export default Contact
