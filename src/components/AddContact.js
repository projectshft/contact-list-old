import { Link } from 'react-router-dom'
import React from 'react'
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

    this.props.addContact(newContact)
    this.props.props.history.push('/contacts')
  }

  render () {
    return (
      <ContactForm handleFormChange={this.handleFormChange} handleSubmitContactClick={this.handleSubmitContactClick} contact={null}/>
    )
  }
}

export default AddContact
