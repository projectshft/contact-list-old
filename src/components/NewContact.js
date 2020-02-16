import { Link } from 'react-router-dom'
import React from 'react';
import PropTypes from 'prop-types'

class NewContact extends React.Component {
  constructor () {
    super ()

    this.state = {
      name: '',
      phone: 0,
      email: '',
      image:'',
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
  }

  handleSubmitContactClick () {
    // Function will be invoked on submit button click
    const newContact = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      image: this.state.image
    };
    // Check the validity of the input and empty fields
    if(this.state.name ==='') {
      alert('Name is a required field')
    } else if(!isNaN(this.state.name)) {
      alert('Name cannot be a number')
    } else if (!this.state.email.includes('@')){
      alert('Please enter a valid email')
    } else if (this.state.email === '') {
      alert('Email is a required field')
    } else if (isNaN(this.state.phone) || this.state.phone.toString().length !== 10) {
      alert('Please enter a valid phone number')
    } else if (this.state.phone === ''){
      alert('Phone number is a required field')
    } else {
      // If the input is valid invoke the add contact function and pass in the new contact
      this.props.addContact(newContact)
      // Bring the user back to the contacts page on submit
      this.props.history.push('/contacts')
    }
  }

  render() {
    return (
     <div>
        <h1 className="text-center">Add Contact</h1>
        <br></br>
        <form className="col-md-6 offset-md-3">
          <label>Name</label>
          <input type='text' className='form-control' onChange={event =>
            this.setState({ name: event.target.value })}/>
          <br></br>

          <label>Phone Number</label>
          <input type='text' className='form-control' onChange={event =>
            this.setState({ phone: event.target.value })}/>
          <br></br>

          <label>E-mail</label>
          <input type='text' className='form-control' onChange={event =>
            this.setState({ email: event.target.value })}/>
          <br></br>

          <label>Image</label>
          <input type='text' className='form-control' onChange={event =>
            this.setState({ image: event.target.value })}/>
          <br></br>

          <button type="button" className="btn btn-info" onClick={this.handleSubmitContactClick}>Submit</button>
          <br></br>
          <Link to='/contacts' className="text-info">Back to Contacts</Link>
      </form>
    </div>
    )
  }
}

// Add proptypes to benefit myself and other devs working on this code in the future
NewContact.propTypes = {
  contact: PropTypes.shape({
    key: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }),
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
  contactKey: PropTypes.number
};

export default NewContact
