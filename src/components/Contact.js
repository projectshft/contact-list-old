import React, { Component } from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/fontawesome-free-solid'
export default class Contact extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <tr>
        <th scope="row">{this.props.id + 1}</th>
        <td>{this.props.contact.name}</td>
        <td>{this.props.contact.email}</td>
        <td>{this.props.contact.imageUrl}</td>
        <td>{this.props.contact.tel}</td>
        <td><FontAwesomeIcon icon={faUser}/>Coffee</td>
        <td><FontAwesomeIcon icon={faUser}/>Coffee</td>
      </tr>
    )
  }
}
