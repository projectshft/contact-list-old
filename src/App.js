import React, {Component} from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {onUpdate, forceUpdate, sendEvent, queryState} from './state'
import 'open-iconic/font/css/open-iconic-bootstrap.css'

const App = () => {
  return (<div>
    <Header/>
    <Contacts/>
  </div>)
}

const Contacts = () => {
  return (<Switch>
    <Route exact path='/' component={AllContacts}/>
    <Route path='/new' render={(params) => (
      <NewContact {...params} addContact={addContact} />
    )}/>
    <Route path='/:id' component={Contact}/>
  </Switch>)
}

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
    return (
      <table className="text-center">
        <tbody>
          <tr className="ml-3">
            <td ><button className="mb-3 btn btn-sm btn-primary">
              <Link to='/' style={{
                textDecoration: 'none',
                color: 'white'
              }}>Back</Link>
            </button></td>
          </tr>

          <tr>
            <td className="ml-2 label">
              Name:
            </td>
            <td>
              <input
                style={{width:300}}
                className="name"
                placeholder="Contact's name"
                value={this.state.name}
                onChange={event => this.setState({name: event.target.value})}
              />
            </td>
          </tr>
          <tr>
            <td className="ml-2 label">
              Image Url:
            </td>
            <td>
              <input
                style={{width:300}}
                className="imageUrl"
                placeholder="Contact's image url"
                value={this.state.imageUrl}
                onChange={event => this.setState({imageUrl: event.target.value})}
              />
            </td>
          </tr>
          <tr>
            <td className="ml-2 label">
              Email:
            </td>
            <td>
              <input
                style={{width:300}}
                className="email"
                placeholder="Contact's email address"
                value={this.state.email}
                onChange={event => this.setState({email: event.target.value})}
              />
            </td>
          </tr>
          <tr>
            <td className="ml-2 label">
              Phone #:
            </td>
            <td>
              <input
                style={{width:300}}
                className="number"
                placeholder="Contact's phone number"
                value={this.state.number}
                onChange={event => this.setState({number: event.target.value})}
              />
            </td>
          </tr>

          <tr className="ml-3">
            <td></td>
            <td><button className="mt-3 btn btn-sm btn-primary" style={{
              textDecoration: 'none',
              color: 'white'
            }} onClick={this.handleClick}>Submit</button></td>
          </tr>

        </tbody>
      </table>)
  }
}

const getContacts = () => {
  return queryState("getContacts")
}

const getSpecificContact = (id) => {
  return queryState("getSpecificContact", id)
}

const addContact = (data) => {
  return sendEvent("addContact", data)
}

const deleteContact = (data) => {
  sendEvent("deleteContact", data)
}

const AllContacts = (props) => {
  const contactsList = getContacts()
  return (<div className="container-fluid">
    <div className="row">
      <ul>
        {
          contactsList.map(c => (<li key={c.id}>
            <Link to={`/${c.id}`}>{c.name}</Link>
            <button type="button" className="ml-3 btn btn-sm btn-outline-primary">
              <span className="oi oi-pencil"></span>
            </button>
            <button type="button" className="ml-1 btn btn-sm btn-outline-danger">
              <span className="oi oi-x"></span>
            </button>
          </li>))
        }
      </ul>
    </div>
    <div className="row">
      <button className="ml-5 btn btn-sm btn-primary">
        <Link to={'/new'} style={{
            textDecoration: 'none',
            color: 'white'
          }}>Add a contact</Link>
      </button>
    </div>
  </div>)
}

const Contact = (props) => {
  const contact = getSpecificContact(parseInt(props.match.params.id))
  const handleClick = () => {
    if (window.confirm(`Are you sure you want to delete ${contact.name}?`)) {
      deleteContact(contact)
    }
    props.history.push('/')
  }
  return (<div className="container-fluid">
    <div className="row ml-3">
      <button className="btn btn-sm btn-primary">
        <Link to='/' style={{
            textDecoration: 'none',
            color: 'white'
        }}>Back</Link>
      </button>
    </div>
    <div className="row ml-3">
      <img src={contact.imageUrl}></img>
    </div>
    <div className="row ml-3">
      <h2>{contact.name}<button type="button" className="ml-3 btn btn-sm btn-outline-primary">
        <span className="oi oi-pencil"></span>
      </button>
        <button type="button" onClick={handleClick} className="ml-1 btn btn-sm btn-outline-danger">
          <span className="oi oi-x"></span>
        </button>
      </h2>

    </div>
    <div className="row ml-3">
      <h4>email: {contact.email}</h4>
    </div>
    <div className="row ml-3">
      <h4>phone number: {contact.number}</h4>
    </div>
  </div>)
}

const Header = () => (<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand">Contact List</a>
  <ul className="navbar-nav">
    <li className="nav-item nav-link">
      <Link to={'/'} style={{
          textDecoration: 'none'
        }}>All Contacts</Link>
    </li>
  </ul>
</nav>)

export default App;
