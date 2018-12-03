import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


class NewContact extends Component {
  constructor (props) {
    super(props)

    //the state object represents the properties of a new contact
    this.state = {
      id: null,
      name: '',
      image: '',
      email: '',
      phoneNumber: '',
    }
  }

  handleNewContact () {
    // assign values for the contacts
    const newContact = {
      id: Math.round(Math.random() * 100000000),
      name: this.state.name,
      image: this.state.image || 'https://upload.wikimedia.org/wikipedia/commons/9/93/Default_profile_picture_%28male%29_on_Facebook.jpg',
      email: this.state.email || 'No email address provided',
      phoneNumber: this.state.phoneNumber || 'No phone number provided'
    };

    this.props.addContact(newContact);
  }


  render() {
    return (
      <div className='container container-fluid' id='new-contact-form'>
      <form className='form-inline'>
      <div className="form-group">
        <input type="text" className="form-control" 
        onChange={event => this.setState({ name: event.target.value })} placeholder="Name"></input>

        <input type="email" className="form-control"
        onChange={event => this.setState({ email: event.target.value })} placeholder="Email Address"></input>
        </div>
        </form>
        <form className='form-inline'>
        <div className="form-group">
        <input type="text" className="form-control"
        onChange={event => this.setState({ phoneNumber: event.target.value })} placeholder="Phone Number (no dashes)"></input>

        <input type="text" className="form-control"
        onChange={event => this.setState({ image: event.target.value })} placeholder="Image Link URL"></input> 
      </div>
      </form>
        <div>
        <Link to={`/contacts`}><button className="btn btn-success" id='add-contact' 
        onClick={event => this.handleNewContact()}>Add New Contact</button></Link>

        {/* added a back button to this form in case the user accidentally clicked this button without wanting to add a contact */}
        <Link to={`/contacts`}><button className="btn btn-warning">Back</button></Link> 
      </div>
      </div>
    )
  }

}

NewContact.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string
}

NewContact.defaultProps = {
  id: null,
  email: 'No email address provided',
  image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Default_profile_picture_%28male%29_on_Facebook.jpg',
  phoneNumber: 'No phone number provided'

}
//add required section from custom styles forms on bootstrap

export default NewContact


// this.state = {
//   id: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phoneNumber: PropTypes.number.isRequired
// }
// }