import { Link } from 'react-router-dom'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class ContactNew extends React.Component {
  constructor() {
    super()

    this.state = {
      id: null,
      name: '',
      phoneNumber: '',
      email: ''
    }

    this.handleSubmitNewContact = this.handleSubmitNewContact.bind(this);
  };
  
  handleSubmitNewContact () {
    if (this.state.name === '' || this.state.phoneNumber === '' || this.state.email === '') {
      return alert('Please complete all fields and then hit submit')
    }
    
    //create a random number to automatically add an ID value to the "id" key
    const generateId = () => Math.round(Math.random() * 100000000)
    // creating a object based on the user's values from the form input
    const newContact = {
      id: generateId(),
      profileImage: '/images/unknown-image.png',
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email
    }
    //passing the newContact object as a parameter up to the addContact function in App component
    this.props.addContact(newContact);
    this.props.history.push('/contacts');
  };
  
  render() {
    return (
      <div className="row">
        {/* form to hold the values the user will submit to add a new contact */}
        
        <div className="col-md-6 offset-md-3 mt-5">
          <div className="page-header">
            <h1>Add New Contact</h1>
          </div>
          <form>
            <label><strong>Name</strong></label>
            {/* updating the state with the value of the input */}
            <input type='text' className='form-control' onChange={event => this.setState({ name: event.target.value })
            }/>

            <br/>

            <label><strong>Phone Number</strong></label>
            {/* changing the phone number input to a text to add to the state */}
            <input type='text' className='form-control' onChange={event => this.setState({ phoneNumber: parseInt(event.target.value, 10) })
            }/>

            <br/>

            <label><strong>Email</strong></label>
            <input type='text' className='form-control' onChange={event => this.setState({ email: event.target.value })
            }/>
            {/* button to handle the start of the function that will pass 
            the new contact info to App.js */}
            <button className="submit-contact mt-3" type="button" onClick={this.handleSubmitNewContact}>Submit</button>

          </form>
          
          <br/>

          <a class="btn btn-primary btn-primary"><Link className="text-white" to='/contacts'>Back to Contact List</Link></a>
        </div>
      </div>
    );
  }
}

export default ContactNew;