import { Link } from 'react-router-dom'
import React, { Component } from 'react';

class New extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      image: '',
      phone: '',
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
        <Link to='/contacts'>
          <button onClick={event => this.setNewState()} type='button'>Submit</button>
        </Link>
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
    this.setState({key: generateId()})
    this.sendAppState()
  }

  sendAppState() {
    this.props.addContact(this.state);
  }

}

export default New
