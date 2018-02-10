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
      number: '',
      personal:false,
      business:false,
      family:false,
      other:false
    }
  }

  handleClick = (props) => {
    const contact = {
      name: this.state.name,
      imageUrl: this.state.imageUrl,
      email: this.state.email,
      number: this.state.number,
      personal: this.state.personal,
      business: this.state.business,
      family: this.state.family,
      other:this.state.other
    }
    console.log(contact)
    //TODO add validation for name, imageUrl, email, and number
    this.props.addContact(contact);
    this.props.history.push('/')
  }

  render(props) {
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
                width: 450
            }} className="name" placeholder="Contact's name" value={this.state.name} onChange={event => this.setState({name: event.target.value})}/>
          </td>
        </tr>
        <tr>
          <td className="ml-2 label">
            Image Url:
          </td>
          <td>
            <input style={{
                width: 450
            }} className="imageUrl" placeholder="Contact's image url" value={this.state.imageUrl} onChange={event => this.setState({imageUrl: event.target.value})}/>
          </td>
        </tr>
        <tr>
          <td className="ml-2 label">
            Email:
          </td>
          <td>
            <input style={{
                width: 450
            }} className="email" placeholder="Contact's email address" value={this.state.email} onChange={event => this.setState({email: event.target.value})}/>
          </td>
        </tr>
        <tr>
          <td className="ml-2 label">
            Phone #:
          </td>
          <td>
            <input style={{
                width: 450
            }} className="number" placeholder="Contact's phone number" value={this.state.number} onChange={event => this.setState({number: event.target.value})}/>
          </td>
        </tr>

        <tr>
          <td className="ml-2 label">
            Label:
          </td>
          <td className="text-left">
            <div className="row">
              <div className="col-sm-3 label-selector">
                <input className="" type='checkbox' onChange={event => this.setState({personal: event.target.checked})}/> Personal
              </div>
              <div className="col-sm-3 label-selector">
                <input className="" type='checkbox' onChange={event => this.setState({business: event.target.checked})}/> Business
              </div>
              <div className="col-sm-3 label-selector">
                <input className="" type='checkbox' onChange={event => this.setState({family: event.target.checked})}/> Family
              </div>
              <div className="col-sm-3 label-selector">
                <input className="" type='checkbox' onChange={event => this.setState({other: event.target.checked})}/> Other
              </div>
            </div>
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
