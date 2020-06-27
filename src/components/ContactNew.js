import { Link, withRouter } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types';

//For generating new ids
const generateId = () => Math.round(Math.random() * 100000000);

class ContactNew extends React.Component {
  constructor () {
    super ()

    this.state = {
      id:'',
      name: '',
      phone: '',
      email: '',
      image_url: ''
    }

    this.handleSubmitPersonClick = this.handleSubmitPersonClick.bind(this)
  }

   //Click event to submit data

  handleSubmitPersonClick () {
    const newPerson = {
      id: generateId(),
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      image_url: this.state.image_url
    };

    this.props.addPerson(newPerson)
    this.props.history.push('/contacts')
  }


  // Creating a form for input for a new contact.

  render () {
    return (
      <div>
      <form onSubmit={e => e.preventDefault()}>
      <h3>Add a New Contact</h3>

      <div className="form-group">
        <input
          className="form-control"
          placeholder="Name"
          value={this.state.name}
          onChange={event => this.setState({name: event.target.value})}
           />

        <br/>
        <input
          className="form-control"
          placeholder="Phone Number"
          value={this.state.phone}
          onChange={event => this.setState({phone: event.target.value})}
           />

        <br/>
        <input
          className="form-control"
          placeholder="Email"
          value={this.state.email}
          onChange={event => this.setState({email: event.target.value})}
           />

        <br/>
        <input
          className="form-control"
          placeholder="Photo"
          value={this.state.image_url}
          onChange={event => this.setState({image_url: event.target.value})}
           />
          <br/>
          <button onClick={this.handleSubmitPersonClick.bind(this)} type="button" className="btn btn-primary add-person">Submit</button>

        <br/>
        <br/>
        <br/>
        <Link to="/contacts"><button type="button" className="btn btn-primary">Previous Page</button></Link>
      </div>

    </form>
      </div>
    )

  }
  
}

export default withRouter(ContactNew)
