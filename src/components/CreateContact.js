import React, { Component } from 'react';
import { Link } from 'react-router-dom'

//create a way to get a random number
const generateKey = () => Math.round(Math.random() * 100000000);

class CreateContact extends React.Component {
  constructor() {
    super()
//set different state values that user can change
    this.state = {
      key: '',
      name: '',
      image_url: '',
      email: '',
      phone_number: ''
    }
    //binding the 'this' in handlesubmit to the 'this' of the CreateContact Component
  this.handleSubmit = this.handleSubmit.bind(this)
  }

//when submit button is clicked a contact is made from the user's input
  handleSubmit () {
    const newContact = {
      key: generateKey(),
      name: this.state.name,
      image_url: this.state.image_url,
      email: this.state.email,
      phone_number: this.state.phone_number
    };
//using the new contact as an argument for the apps addContact function
    this.props.addContact(newContact)
//once the new contact is added the page then automatically goes back to /contacts
    this.props.props.history.push('/contacts')
  }
//rendering input forms for user to input values to create a new contact
  render () {
    return (
      <div>
        <form>
          <label>Name</label>
            <input type ='text' onChange={event => this.setState({name:event.target.value})
          }/>
          <br />

          <label>Image</label>
            <input placeholder="URL" type='text' onChange={event => this.setState({image_url:event.target.value})
          }/>
          <br />


          <label>Email</label>
            <input type='text' onChange={event => this.setState({email:event.target.value})
          }/>
          <br />


          <label>Phone Number</label>
            <input type='text' onChange={event => this.setState({phone_number:event.target.value})
          }/>
          <br />
          <button type ='button' onClick={this.handleSubmit}>Submit</button>

        </form>

        <button>
          <Link to ='/contacts'>Back</Link>
        </button>

      </div>
    )
  }
}


export default CreateContact
