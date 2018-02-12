import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import ContactInfo from './ContactInfo'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/fontawesome-free-solid'
export default class Contact extends Component {
  constructor(props) {
    super(props);
    console.log('Contact DATA: ', this.props)
  }
  
  render() {
    return (
      <tr>
        <th scope="row">{this.props.id}</th>
        <td>
        <Link to={{
          pathname: `${this.props.data.data.match.url}/${this.props.id}`,
          // pathname: `contacts/${this.props.id}`,
          // TODO: history state working except when clicking in contacts, make a Link Obj and pass history
          // Also make sure you fix the error when no history is present
          // How to edit and update its history state
          state: this.props.data.data.history.location.state[this.props.id]
        }} >
        {this.props.contactData.name}
        </Link>
        </td>
        <td>{this.props.contactData.email}</td>
        <td>{this.props.contactData.imageUrl}</td>
        <td>{this.props.contactData.tel}</td>
        <td><FontAwesomeIcon icon={faUser}/>Coffee</td>
        <td><FontAwesomeIcon icon={faUser}/>Coffee</td>
      </tr>
    )
  }
}
