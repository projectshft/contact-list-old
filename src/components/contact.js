import _ from 'lodash'
import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Contacts from './Contacts'
import ContactsList from './contacts_list';

class SingleContact extends Component {
  constructor(props) {
    super(props);
    console.log('properties passed to contact are ', this.props)
    const id = Number(this.props.match.params.id);

  }


render(){
  return (
    <div>
      <h1> helllooooo </h1>
      <h1> {this.props.name}</h1>
    </div>
  )
}
}

export default SingleContact
