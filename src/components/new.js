import PropTypes from 'prop-types';
import React, { Component } from 'react';

class New extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      image: '',
      phone: 0,
      key: 0
    }
    // bind this to its context
    this.sendAppState = this.sendAppState.bind(this)
    this.setNewState = this.setNewState.bind(this)
  }

  render(){
    return(
      <div>
        <h1>Add a New Contact</h1>
        <form className='form-group'>
          <label>Name</label>
          {/* give each input reference to get value later */}
          <input type='text' className='form-control' placeholder='Name' ref={(c) => this.name = c} />
          <label>Email</label>
          <input type='text' className='form-control' placeholder='Email' ref={(c) => this.email = c} />
          <label>Image</label>
          <input type='text' className='form-control' placeholder='Image' ref={(c) => this.image = c} />
          <label>Phone Number</label>
          <input type='text' className='form-control' placeholder='Phone #' ref={(c) => this.phone = c} />
        </form>
        <button className='btn btn-primary' onClick={event => this.setNewState()} type='button'>Submit</button>
      </div>
    )
  }

  emailIsValid (email) {
  return /\S+@\S+\.\S+/.test(email)
  }

  setNewState() {
    // give key a (fairly) unique number
    const generateId = () => Math.round(Math.random() * 100000000)
    // if the input is valid, set the state for each input
    // name must be present to submit
    if (this.name.value) {
    this.setState({name: this.name.value})
  } else return alert('Name input must contain a name to submit contact')
    // email must be valid
    if (this.emailIsValid(this.email.value)) {
      this.setState({email: this.email.value})
    } else return alert('That email address is invalid. Please follow the _@_._ format')
    // image input must be present
    if (this.image.value) {
      this.setState({image: this.image.value})
    } else return alert('Image input must contain image url to submit contact')
    // only accepts phone numbers of 10 digits without dashes
    if (this.phone.value.length === 10 && Number(this.phone.value)) {
      this.setState({phone: this.phone.value})
    } else return alert('That phone number is invalid. Please write phone number with zipcode and no dashes')
    // after all states have been set, run sendAppState()
    this.setState({key: generateId()}, () => {this.sendAppState()})
  }

  sendAppState() {
    // send App the state as an object
    this.props.addContact(this.state);
    // then reroute back to contacts page
    this.props.history.push('/contacts')
  }

}

New.propTypes = {
  // addContact must be a function
  addContact: PropTypes.func,
}

export default New
