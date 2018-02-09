import React, { Component } from 'react'

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
        <td>edit</td>
      </tr>
    )
  }
}
