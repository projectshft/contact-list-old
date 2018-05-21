import React, { Component } from 'react';
import {Link } from 'react-router-dom'

import { queryState } from '../state';
import '../App.css';

class Contact extends Component {
  constructor(props) {
    super(props);
//load this.state with the contact that was clicked
  this.state = queryState('getContact', parseInt(this.props.match.params.number, 10))

  }

  render() {
//render error 404 if contact doesn't exist
    if(Boolean(!this.state)){
      return (
        <div> No Contact exists </div>
      )
    }
//render contact details if contact exists
    return (
      <div className="container box-center py-3 my-3 border border-dark">
        <div className="text-center">
          <h1 className="text-center mb-3">{this.state.firstName} {this.state.lastName}</h1>
          <img className="center default-img my-3" src={this.state.imgURL ? this.state.imgURL : 'https://storage.googleapis.com/lender-rate/CDN/megaloans/no-avatar.jpg'} alt=''/>
        </div>
        <div className="mx-5">
          <h4 className="my-3">email: {this.state.email}</h4>
          <h4 className="pb-3">phone: {this.state.phoneNumber}</h4>
          <Link to='/'>Back</Link>
        </div>
      </div>
    );
  }
}

export default Contact
