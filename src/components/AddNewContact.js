import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class AddNewContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      imageUrl: ''
    }
  }

  onInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.props.history.push('/contact');
  }

  render() {

    return (
      <div>
        <Link to="/contact">Go Back</Link>
        <form>
          <h1>Adding new contact</h1>
          <input
            onChange={this.onInputChange}
            value={this.state.name}
            name="name"
            placeholder='name'
          />
          <input
            value={this.state.email}
            onChange={this.onInputChange}
            name="email"
            placeholder='email'
          />
          <input
            value={this.state.phoneNumber}
            onChange={this.onInputChange}
            name="phoneNumber"
            placeholder='phone number'
          />
          <input
            value={this.state.imageUrl}
            onChange={this.onInputChange}
            name="imageUrl"
            placeholder='Image URL'
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
