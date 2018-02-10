import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/js/bootstrap.js'
import ContactModal from './ContactModal'
import ContactList from './ContactList'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faUsers from '@fortawesome/fontawesome-pro-regular/faUsers'
import faPlus from '@fortawesome/fontawesome-pro-regular/faPlus'


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
        <h1><FontAwesomeIcon icon={faUsers} />Contacts</h1>
        <div>
        
        <button onClick={this.toggleModal} type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal">
          <FontAwesomeIcon icon={faPlus} /> Add contact
        </button>
        </div>
        <ContactModal 
          show={this.state.isOpen} 
          onClose={this.toggleModal} 
          handleSubmit={this.handleContacts} 
          contactInfo={this.state} />
        </div>
        
        <div className="row">
          <ContactList contactInfo={this.state.contacts} />
        </div>
      </div>
    )
  }
}
