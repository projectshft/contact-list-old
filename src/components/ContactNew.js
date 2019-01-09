import { Link } from 'react-router-dom'
import React, { Component } from 'react';

class ContactNew extends Component {
  constructor (props) {
    super (props);
//This is the state that creates 
    this.state = {
      name: '',
      image_url: '',
      email: '',
      phone_number: ''
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this);
    this.generateId = this.generateId.bind(this);
  

  }
//Handle enables us to submit the form for a new contact. 
  handleSubmitContactClick () {
    const newContact = {
      id: this.generateId(),
      name: this.state.name,
      image_url: this.state.image_url,
      email: this.state.email,
      phone_number: this.state.phone_number
    };
//This not only adds a new contact via the form filled out from below but it sends it to the main page where the link to it will show up in the form of the name of the contact. 
    this.props.addContact(newContact)
    this.props.props.history.push(`/`)
  }

  generateId() {
    return Math.round(Math.random() * 100000000)
  }


  render () {
    //This is the form where you put the contact info for a new contact that you want to add to the contact list. 
    return (
      <div>
        <form>
        <label>Name: </label>
        <input type='text' className='form-control' onChange={event =>
          this.setState({ name: event.target.value })
        } />

        <br/>

        <label>Image URL: </label>
        <input type='text' className='form-control' onChange={event =>
          this.setState({ image_url: event.target.value })
        } required />

        <br/>

        <label>Email: </label>
        <input type='email' className='form-control' onChange={event =>
          this.setState({ email: event.target.value })
        } required/>

        <br/>

        <label>Phone Number: </label>
        <input type='tel' className='form-control' onChange={event =>
          this.setState({ phone_number: event.target.value })
        } required />

        <br/>

        <button type="button" onClick={this.handleSubmitContactClick}>Submit</button>
        </form>

        <br/>
{/* If you decide not to add a new contact you can always go back to the main page.  */}
        <Link to='/'>Roster</Link>
  
      </div>
    )
  }
}

export default ContactNew
