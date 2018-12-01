import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


class NewContact extends Component {
  constructor () {
    super()

    this.state = {
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired
    }
  }

  handleNewContact () {
    const newContact = {
      id: Math.round(Math.random() * 100000000),
      name: this.state.name,
      image: this.state.image,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber
    };

    this.props.addContact(newContact);
    // this.props.history.push('/');
    alert('New Contact Added!')
    console.log(newContact);
  }


  render() {
    return (
      <div className="form-group mb-2">
            <input type="text" className="form-control" 
            onChange={event => this.setState({ name: event.target.value })} placeholder="Name"></input>

            <input type="email" className="form-control"
            onChange={event => this.setState({ email: event.target.value })} placeholder="Email Address"></input>

            <input type="text" className="form-control"
            onChange={event => this.setState({ phoneNumber: event.target.value })} placeholder="Phone Number"></input>

            <input type="text" className="form-control"
            onChange={event => this.setState({ image: event.target.value })} placeholder="Image Link URL"></input> 

          <button className="btn btn-success" id='add-contact' onClick={event => this.handleNewContact()}>Add New Contact</button>        
          <Link to={`/`}><button className="btn btn-warning">Back</button></Link> 
      </div>
    )
  }

}


export default NewContact