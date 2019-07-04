import React, { Component } from 'react';
import { Link } from 'react-router-dom'


const generateId = () => Math.round(Math.random() * 100000000);

class CreateContact extends React.Component {
  constructor() {
    super()

    this.state = {
      id: '',
      name: '',
      image_url: '',
      email: '',
      phone_number: ''
    }
  }


  handleSubmit () {
    const newContact = {
      id: generateId(),
      name: this.state.name,
      image_url: this.state.image_url,
      email: this.state.email,
      phone_number: this.state.phone_number
    };

    this.props.addContact(newContact)
    this.props.props.history.push('/contacts')
  }

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

        <Link to ='/contacts'>Contacts</Link>
      </div>
    )
  }
}


export default CreateContact
