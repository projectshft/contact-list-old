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

    //sets the condition that the name and email fields need to be filled in order for the contact to be added
    if (this.state.name === '' && this.state.email === ''){
      alert('Please enter a vaild name and email for your contact')
    } else {
      //addContact is passed down from App component. This adds the newContact state to the main state.
          this.props.addContact(newContact)
          // console.log(generateId())
          // console.log(newContact)

    }

  }
 //render collects the values of each input and sets them to NewContacts state
  render () {
    return (
      <div className="card">
        <form className="text-center border border-light p-5" action="#!">
          <p className="h4 mb-4">Add Contact</p>

          <input type="name" className="form-control mb-4" placeholder="Name" onChange={event =>
            this.setState({ name: event.target.value })
          }/>

            <br/>
          <input type="email" className="form-control mb-4" placeholder="Email Address" onChange={event =>
            this.setState({ email: event.target.value })
          }/>

            <br/>
          <input type="phone" className="form-control mb-4" placeholder="Phone Number" onChange={event =>
            this.setState({ phone_number: event.target.value })
          }/>

            <br/>
          <input type="text" className="form-control mb-4" placeholder="Image URL" onChange={event =>
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
