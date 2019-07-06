import { Link } from 'react-router-dom'
import React from 'react'

class Contact_Form extends React.Component {
  constructor(){
    super()

    this.state = {
      id:0,
      name: '',
      image_url: '',
      email: '',
      phone_number: ''
    }

    this.handleSubmitContact = this.handleSubmitContact.bind(this)
  }

  generateId(){
    return Math.round(Math.random() * 100000000)
  }

  handleSubmitContact(){
    const newContact = {
      id: this.generateId(),
      name: this.state.name,
      image_url: this.state.image_url,
      email: this.state.email,
      phone_number: this.state.phone_number
    };

    this.props.addContact(newContact)
    this.props.props.history.push('/contacts')
  }

  render(){
    return (
      <div>
        <form>
        <label>Name</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ name: event.target.value })
        }/>

        <br/>

        <label>Image</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ image_url: event.target.value })
        }/>

        <br/>

        <label>Email</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ email: event.target.value })
        }/>

        <br/>

        <label>Phone Number</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ phone_number: event.target.value })
        }/>

        <button type="button" onClick={this.handleSubmitContact}>Submit</button>
        </form>

        <Link to='/contacts'>Back</Link>
      </div>
    )
  }
}

export default Contact_Form
