import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'open-iconic/font/css/open-iconic-bootstrap.css'

class NewContact extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      imageUrl: '',
      email: '',
      number: ''
    }
  }

  handleClick = (props) => {
    const contact = {
      name: this.state.name,
      imageUrl: this.state.imageUrl,
      email: this.state.email,
      number: this.state.number
    }
    //TODO add validation for name, imageUrl, email, and number
    this.props.addContact(contact);
    this.props.history.push('/')
  }

  render() {
    return (<table className="text-center">
      <tbody>
        <tr className="ml-3">
          <td >
            <button className="mb-3 btn btn-sm btn-primary">
              <Link to='/' style={{
                  textDecoration: 'none',
                  color: 'white'
              }}>Back</Link>
            </button>
          </td>
        </tr>

        <tr>
          <td className="ml-2 label">
            Name:
          </td>
          <td>
            <input style={{
                width: 300
            }} className="name" placeholder="Contact's name" value={this.state.name} onChange={event => this.setState({name: event.target.value})}/>
          </td>
        </tr>
        <tr>
          <td className="ml-2 label">
            Image Url:
          </td>
          <td>
            <input style={{
                width: 300
            }} className="imageUrl" placeholder="Contact's image url" value={this.state.imageUrl} onChange={event => this.setState({imageUrl: event.target.value})}/>
          </td>
        </tr>
        <tr>
          <td className="ml-2 label">
            Email:
          </td>
          <td>
            <input style={{
                width: 300
            }} className="email" placeholder="Contact's email address" value={this.state.email} onChange={event => this.setState({email: event.target.value})}/>
          </td>
        </tr>
        <tr>
          <td className="ml-2 label">
            Phone #:
          </td>
          <td>
            <input style={{width: 300}} className="number" placeholder="Contact's phone number" value={this.state.number} onChange={event => this.setState({number: event.target.value})}/>
          </td>
        </tr>

        <tr className="ml-3">
          <td></td>
          <td>
            <button className="mt-3 btn btn-sm btn-primary" style={{
                textDecoration: 'none',
                color: 'white'
            }} onClick={this.handleClick}>Submit</button>
          </td>
        </tr>

      </tbody>
    </table>)
  }
}

export default NewContact
