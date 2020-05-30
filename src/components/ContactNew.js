import { Link } from 'react-router-dom'
import React from 'react';

class ContactNew extends React.Component {
  constructor() {
    super()

    this.state = {
      id: null,
      name: '',
      phoneNumber: '',
      email: ''
    }
  }
  

  
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

        </div>
      );
    }
}

export default ContactNew;