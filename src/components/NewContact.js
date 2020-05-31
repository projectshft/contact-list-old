import { Link } from 'react-router-dom';
import React from 'react';


class NewContact extends React.Component {
  constructor () {
    super ()
//default state container for new contact information. is added to main stae in App.js
    this.state = {
      id: '',
      name: '',
      image_url: '',
      email: '',
      phone_number: '',

    }
    //binds add contact button to this state and scope
    this.handleAddContactClick = this.handleAddContactClick.bind(this)
  }

  handleAddContactClick () {
    //takes the input values from the add contact section and assigns a random number when button is pressed
    const generateId = () => Math.round(Math.random() * 100000000)
    const newContact = {
      id: generateId(),
      name: this.state.name,
      email: this.state.email,
      image_url: this.state.image_url,
      phone_number: this.state.phone_number,
    };

//addContact is passed down from App component. This adds all inew input info to the main state.
    this.props.addContact(newContact)
    // console.log(generateId())
    // console.log(newContact)
  }

  render () {
    return (
      <div>
        <form>
        <label>Name </label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ name: event.target.value })
        }/>

        <br/>


        <label>Email Address </label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ email: event.target.value })
        }/>

        <br/>

        <label>Phone Number </label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ phone_number: event.target.value })
        }/>

        <br/>

        <label>Image URL </label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ image_url: event.target.value })
        }/>

        <Link to='/contacts'>
          <button type="button" className="btn btn-primary" onClick={this.handleAddContactClick}>Submit</button>
        </Link>
        </form>


      </div>
    )
  }
}


export default NewContact;
