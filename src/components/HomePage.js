import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'
import ContactModal from './ContactModal'
import ContactList from './ContactList'

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      isOpen: false

    }
    
  }

  handleContacts = (info) => {
    this.setState({
      contacts: this.state.contacts.concat([info])
    }, () => console.log(this.state)) 
    // ^^ Callback function, remember to do this when you want to log your recently changed state
  }

  toggleModal = () => {
    console.log('Clicked')
    this.setState({ isOpen: !this.state.isOpen });
  }
  
  render() {
    return (
      <div className=''>
        <div className="row">
        <h1>Contacts</h1>
        <button onClick={this.toggleModal} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Add contact</button>
        <ContactModal 
          show={this.state.isOpen} 
          onClose={this.toggleModal} 
          handleSubmit={this.handleContacts} 
          contactInfo={this.state} />
        </div>
        
        <div className="row">
          <ContactList contactInfo={this.state} />
        </div>
      </div>
    )
  }
}
