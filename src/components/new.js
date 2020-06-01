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

  setNewState() {
    // give key a (fairly) unique number
    const generateId = () => Math.round(Math.random() * 100000000)
    // set the state for each input
    this.setState({name: this.name.value})
    this.setState({email: this.email.value})
    this.setState({image: this.image.value})
    this.setState({phone: this.phone.value})
    // after all states have been set, run sendAppState()
    this.setState({key: generateId()}, () => {this.sendAppState()})
  }

  sendAppState() {
    // send App the state as an object
    this.props.addContact(this.state);
    // then reroute back to contacts page

  }

}

New.propTypes = {
  // name must be a string and is required, etc.
  name: PropTypes.string,
  email: PropTypes.string,
  image: PropTypes.string,
  phone: PropTypes.number,
  key: PropTypes.number
}

New.defaultProps = {
  // set default properties to be eith N/A or 0
  name: 'N/A',
  email: 'N/A',
  image: 'N/A',
  phone: 0,
  key: 0
}

export default New
