import React from 'react'
import PropTypes from 'prop-types'
import ContactForm from './ContactForm'

class AddContact extends React.Component {
  constructor () {
    super ()

    this.state = {
      id: '',
      name: '',
      image_url: '',
      email: '',
      phone_number: ''
    }
        
    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)
  }

  generateId = () => Math.round(Math.random() * 100000000);

  handleFormChange (object){
    this.setState(object)
  }

  handleSubmitContactClick () {
    
    const newContact = {
      id: this.generateId(),
      name: this.state.name,
      image_url: this.state.image_url,
      email: this.state.email,
      phone_number: this.state.phone_number,
      favorite: false
    };

     // Edge case error handling. Checks for empty required inputs and for correct values
     if (newContact.name === ''  ||
     newContact.email === '' ||
     newContact.phone === '') 
     {
       throw alert("Name, email, and phone are REQUIRED. Please fill in to continue")
     }
  

    this.props.addContact(newContact)
    this.props.props.history.push('/contacts')
  }

  render () {
    return (
      <ContactForm handleFormChange={this.handleFormChange} handleSubmitContactClick={this.handleSubmitContactClick} contact={null}/>
    )
  }
}

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired
};

export default AddContact