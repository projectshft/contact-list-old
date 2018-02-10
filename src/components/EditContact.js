import React, {Component} from 'react';
import './App.css';
import { Link} from 'react-router-dom'
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
      number: this.contact.number
    }
  }

  handleXClick = (props) => {
    if (window.confirm(`Are you sure you want to delete ${this.contact.name}?`)) {
      this.props.deleteContact(this.contact)
    }
    this.props.history.push('/')
  }

  handleClick = () => {
    const editedContact = {
      id: this.state.id,
      name: this.state.name,
      imageUrl: this.state.imageUrl,
      email: this.state.email,
      number: this.state.number
    }
    console.log(editedContact)
//TODO add validation for name, imageUrl, email, and number
    this.props.editContact(editedContact);
    this.props.history.push('/')
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
          <img  src={this.contact.imageUrl} alt=""></img>
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
        <button className="mt-3 btn btn-sm btn-primary" style={{
            textDecoration: 'none',
            color: 'white'
        }} onClick={this.handleClick}>Submit</button>
      </div>)
  }
}

export default EditContact
