import '../../node_modules/bootstrap/dist/js/bootstrap.js'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import ContactModal from './ContactModal'
import ContactList from './ContactList'


import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faUsers from '@fortawesome/fontawesome-pro-regular/faUsers'
import faPlus from '@fortawesome/fontawesome-pro-regular/faPlus'


export default class HomePage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      contacts: [{
        name: 'Aaron H.',
        email: 'Aaron@projectshift.com',
        url: 'projectshift.jpeg',
        tel: '919-555-1234'
      }],
      isOpen: false
      
    }
    this.props.history.push('/contacts', this.state.contacts)

  }

  onChange = (e) => {
    const state = this.state.contacts
    state[e.target.name] = e.target.value;
  }
  
  onSubmit = (e) => {
    e.preventDefault()
    const contactInfo = {
      name: this.state.contacts.name,
      email: this.state.contacts.email,
      url: this.state.contacts.url,
      tel: this.state.contacts.tel
    }

    let tempArray = [...this.state.contacts, contactInfo]

    this.setState({contacts: tempArray }, () => this.props.history.push('/contacts', this.state.contacts));
    this.toggleModal()

  }

  toggleModal = () => {
    console.log('Clicked')
    this.setState({ isOpen: !this.state.isOpen });
  }

  myFunction = () => this.props.history.push("/contacts");
  
  render() {
    return (
      <div className='container'>
        <h2>Your Contact List</h2>
        <div className="row">
          <div className="container">
            <h1><FontAwesomeIcon icon={faUsers} />Contacts</h1>
          <div>
          
          <button onClick={this.toggleModal} type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal">
            <FontAwesomeIcon icon={faPlus} /> Add contact
          </button>
          </div>
            <ContactModal 
            onClose={this.toggleModal}
            onChange={this.onChange}
            onSubmit={this.onSubmit} 
            contactInfo={this.state} />
          </div>
        </div>
        <div className="row">
          <ContactList contactsState={this.state.contacts} data={this.props} />
        </div>
      </div>
    )
  }
}
