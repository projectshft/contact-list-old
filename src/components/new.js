import { Link } from 'react-router-dom'
import React, { Component } from 'react';

class New extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      image: '',
      phone: ''
    }
  }

  render() {
    return (
      <div>
        <input type='text' placeholder='Name'/>
        <input type='text' placeholder='Email'/>
        <input type='text' placeholder='Image'/>
        <input type='text' placeholder='Phone #'/>
        <Link to='/contacts'>
          <button type='button'>Submit</button>
        </Link>
      </div>
    )
  }
}

export default New
