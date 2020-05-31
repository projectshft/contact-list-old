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

    this.sendAppState = this.sendAppState.bind(this)
    this.setNewState = this.setNewState.bind(this)
  }

  render(){
    return(
      <div>
        {/* give each input reference to get value later */}
        <input type='text' placeholder='Name' ref={(c) => this.name = c} />
        <input type='text' placeholder='Email' ref={(c) => this.email = c} />
        <input type='text' placeholder='Image' ref={(c) => this.image = c} />
        <input type='text' placeholder='Phone #' ref={(c) => this.phone = c} />
        <button onClick={event => this.setNewState()} type='button'>Submit</button>
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
    console.log(this.context)
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
  // name must be a string and is required, etc.
  name: 'N/A',
  email: 'N/A',
  image: 'N/A',
  phone: 0,
  key: 0
}

export default New
