import { Link } from 'react-router-dom'
import React, { Component } from 'react';

class New extends Component {
  render() {
    return (
      <Link to='/contacts'>
        <button type='button'>Submit</button>
      </Link>
    )
  }
}

export default New
