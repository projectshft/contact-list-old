import React from 'react'
import ContactForm from './ContactForm'
import _ from 'lodash'

class EditContact extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      id: parseInt(this.props.props.match.params.id, 10)
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)
  }

  handleFormChange(object) {
    this.setState(object)
  }

  handleSubmitContactClick () {
    const newContact = {};
    for (let [key, value] of Object.entries(this.state)) {
      newContact[key] = value;
    };
    
    this.props.editContact(newContact)
    this.props.props.history.push('/contacts')
  }

  render () {
    const contact = _.find(this.props.contacts, { id: parseInt(this.props.props.match.params.id, 10) });
    return (
      <ContactForm handleFormChange={this.handleFormChange} handleSubmitContactClick={this.handleSubmitContactClick} contact={contact}/>
    )
  }
}

export default EditContact
