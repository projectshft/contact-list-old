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
    //create a random number to automatically add an ID value to the "id" key
    const generateId = () => Math.round(Math.random() * 100000000)
    // creating a object based on the user's values from the form input
    const newContact = {
      id: generateId(),
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
      <div>
        {/* form to hold the values the user will submit to add a new contact */}
        <form>
          <label>Name</label>
          {/* updating the state with the value of the input */}
          <input type='text' className='form-control' onChange={event => this.setState({ name: event.target.value })
          }/>

          <br/>

          <label>Phone Number</label>
          {/* changing the phone number input to a text to add to the state */}
          <input type='text' className='form-control' onChange={event => this.setState({ phoneNumber: parseInt(event.target.value, 10) })
          }/>

          <br/>

          <label>Email</label>
          <input type='text' className='form-control' onChange={event => this.setState({ email: event.target.value })
          }/>
          {/* button to handle the start of the function that will pass 
          the new contact info to App.js */}
          <button type="button" onClick={this.handleSubmitNewContact}>Submit</button>

        </form>
        
        <br/>

        <Link to='/contacts'>Back to Contacts List</Link>
      </div>
    );
  }
}

export default ContactNew;