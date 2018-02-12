import '../../node_modules/bootstrap/dist/js/bootstrap.js'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link, withRouter} from 'react-router-dom'
import ContactModal from './ContactModal'
import ContactList from './ContactList'
import ContactInfo from './ContactInfo'
import Layout from './Layout'
import { queryState, printState } from '../state'
import history from '../history'


import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faUsers from '@fortawesome/fontawesome-pro-regular/faUsers'
import faPlus from '@fortawesome/fontawesome-pro-regular/faPlus'


export default class HomePage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      contacts: [{
        name: '',
        email: '',
        url: '',
        tel: ''
      }],
      isOpen: false
      
    }
    const locationKey = props.location.pathname
    // this.state.contacts = [...this.state.contacts];
  }

  onChange = (e) => {
    const state = this.state.contacts
    // debugger 
    state[e.target.name] = e.target.value;
    // this.setState({ contacts: [...this.state.contacts, contactInfo]})
    // this.setState({state: }, () => console.log('changing state...', this.state));
  }
  
  handleSubmit = (info) => {
    queryState('getName', info)
    // debugger
    console.log(printState())
    
    
    // ^^ Callback function, remember to do this when you want to log your recently changed state
  }
  onSubmit = (e) => {
    e.preventDefault()
    // let tempArray = [...this.state.contacts]
    const contactInfo = {
      name: this.state.contacts.name,
      email: this.state.contacts.email,
      url: this.state.contacts.url,
      tel: this.state.contacts.tel
    }
    console.log('Inside Submit:', this.state)
    // tempArray.push(contactInfo);
    let tempArray = [...this.state.contacts, contactInfo]
    // this.setState({tempArray});
    console.log(tempArray)
    this.setState({contacts: tempArray }, () => history.push('/contacts', this.state.contacts));
    // history.push('/contacts', this.state.contacts)
    // this.setState({contacts: tempArray }, () => console.log(this.state));
    // window.history.replaceState({
    //   key: history.location.key,
    //   state: this.state
    // })
    // debugger
    this.toggleModal()
    const {name, email, url, tel} = this.state.contacts

    // this.setState({
    //   contacts: this.state.contacts.concat([contactInfo])
    // }, () => console.log(this.state) ) 
    // console.log('name', name)
    // queryState('saveName', name)
    // console.log('Printing.... STATE')
    // printState();
    // this.props.onSubmit(contactInfo)
    // this.props.push(`${this.state.name}/${this.state.name}`)
  }

  toggleModal = () => {
    console.log('Clicked')
    this.setState({ isOpen: !this.state.isOpen });
  }
  
  render() {
    return (
        <div className='container'>
          <h2>Your Contact ContactList</h2>
          <div className="row">
            <div className="container">
              <Link to="/"><h1><FontAwesomeIcon icon={faUsers} />Contacts</h1></Link>
            <div>
            
            <button onClick={this.toggleModal} type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal">
              <FontAwesomeIcon icon={faPlus} /> Add contact
            </button>
            </div>
              <ContactModal 
              // onClose={this.toggleModal}
              onChange={this.onChange}
              onSubmit={this.onSubmit} 
              contactInfo={this.state} />
            </div>
          </div>
        </div>
    )
  }
}
