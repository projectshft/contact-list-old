import '../ContactForm.css';
import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';


class ContactForm extends React.Component {
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

  handleSubmitContact(e){

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
      <div className='container'>
      <form onSubmit={e => {this.handleSubmitContact(e)}}>
      <div className='row'>

        <div className='form-group col-md-8'>
        <h3>Add New Contact</h3>
        <label>Name</label>
        <input type='text' required className='form-control'onChange={event =>
          this.setState({ name: event.target.value })
        }/>

        <br/>

        <label>Image Link</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ image_url: event.target.value })
        }/>

        <br/>

        <label>Email</label>
        <input type='email' className='form-control'onChange={event =>
          this.setState({ email: event.target.value })
        }/>

        <br/>

        <label>Phone Number</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ phone_number: event.target.value })
        }/>

        <button type="submit" value='Submit'>Submit</button>

        </div>
        </div>
        </form>
        <Link to='/contacts'>Back</Link>
      </div>

    )
  }
}

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  image_url: PropTypes.string,
  phone_number: PropTypes.string
}

export default ContactForm
