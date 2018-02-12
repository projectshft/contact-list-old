import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'open-iconic/font/css/open-iconic-bootstrap.css'

class EditContact extends Component {
  constructor(props) {
    super(props)

    this.contact = props.getSpecificContact(parseInt(props.match.params.id,10))

    this.state = {
      id: this.contact.id,
      name: this.contact.name,
      imageUrl: this.contact.imageUrl,
      email: this.contact.email,
      number: this.contact.number,
      personal:this.contact.personal,
      business:this.contact.business,
      family:this.contact.family,
      other:this.contact.other,
      fromGoogle: this.contact.fromGoogle
    }
  }

  // if the url given does not display correctly, use this default image
  addDefaultImg = (event) => {
    event.target.src = 'http://www.oebmidsummit.com/img/noavatar.jpg'
  }

  handleXClick = (props) => {
    if (window.confirm(`Are you sure you want to delete ${this.contact.name}?`)) {
      this.props.deleteContact(this.contact)
    }
    this.props.history.push('/')
  }

  //updates the contact's information in the state of this function and then updates the global state
  handleClick = () => {
    const editedContact = this.state

    //validate that the phone number and email address are valid formats
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if ((editedContact.number && phoneRegex.test(editedContact.number)) || !editedContact.number) {
    const formattedPhoneNumber =
        editedContact.number.replace(phoneRegex, "($1) $2-$3");
        editedContact.number = formattedPhoneNumber
        if ((editedContact.email && emailRegex.test(editedContact.email)) || !editedContact.email) {
          if (editedContact.name) {
            this.props.editContact(editedContact);
            this.props.history.push(`/${this.state.id}`)
          }
          else {
            alert("please enter a name for this contact")
            return
          }
        } else
        alert("please enter a valid e-mail address")
        return
      } else {
    alert("please enter a valid 10-digit phone number in the format (xxx) xxx-xxxx")
    return
      }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row ml-3 mb-3">
          <button className="btn btn-sm btn-primary">
            <Link to='/' style={{
                textDecoration: 'none',
                color: 'white'
            }}>Back</Link>
          </button>
          <button onClick={this.handleXClick} className="ml-1 btn btn-sm btn-danger">
            <Link to='/' style={{
                textDecoration: 'none',
                color: 'white'
            }}>Delete Contact</Link>
          </button>
        </div>
        <div className="row ml-3 mb-1">
          <img  src={this.contact.imageUrl} onError={this.addDefaultImg} alt=""></img>
        </div>
        <div className="row ml-3 mb-1">
          image url: <input className="ml-2" style={{width: 401}} onChange={event => this.setState({imageUrl: event.target.value})} value={this.state.imageUrl} />
        </div>
        <div className="row ml-3">
          <h2><input className="ml-2" style={{width: 475}} onChange={event => this.setState({name: event.target.value})} value={this.state.name}/>

          </h2>

        </div>
        <div className="row ml-3">
          <h4>email:<input className="ml-2" style={{width: 413}} onChange={event => this.setState({email: event.target.value})} value={this.state.email}/></h4>
        </div>
        <div className="row ml-3">
          <h4>phone number: <input className="ml-2" style={{width: 313}} onChange={event => this.setState({number: event.target.value})} value={this.state.number}/></h4>
        </div>
        <div className="row">
          <div className="col-sm-3 col-md-2 label-selector">
            <input className="" type='checkbox' checked={this.state.personal} onChange={event => this.setState({personal: event.target.checked})}/> Personal
          </div>
          <div className="col-sm-3 col-md-2 label-selector">
            <input className="" type='checkbox' checked={this.state.business} onChange={event => this.setState({business: event.target.checked})}/> Business
          </div>
          <div className="col-sm-3 col-md-2 label-selector">
            <input className="" type='checkbox' checked={this.state.family} onChange={event => this.setState({family: event.target.checked})}/> Family
          </div>
          <div className="col-sm-3 col-md-2 label-selector">
            <input className="" type='checkbox' checked={this.state.other} onChange={event => this.setState({other: event.target.checked})}/> Other
          </div>
        </div>
        <button className="mt-3 btn btn-sm btn-primary" style={{
            textDecoration: 'none',
            color: 'white'
        }} onClick={this.handleClick}>Submit</button>
      </div>)
  }
}

export default EditContact
