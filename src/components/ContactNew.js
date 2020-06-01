import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

// This class allows the user to create a new contacts
// and updates state accordingly.
class ContactNew extends React.Component {

  constructor () {
    super ()

    // Basic architecture of a Contact object.
    this.state = {
      id: '',
      name: '',
      image_url: '',
      email: '',
      phone_number: '',
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
  }


  handleSubmitContactClick () {

    // Sets state
    const newContact = {
    id: this.generateId(), //creates unique Id on user click
    name: this.state.name,
    image_url: this.state.image_url,
    email: this.state.email,
    phone_number: this.state.phone_number
  }

    // name is the only required key value. If the user does
    // not enter a name, alert message is displayed and the contact
    // is not added
    if (newContact.name === '' || newContact.name === null) {
      alert('Please enter a name')

    // By contrast, all other key values are optional. If nothing is entered
    // for an input, that key is given a value of 'N/A'
    } else {
      if (newContact.image_url === '' || newContact.image_url === null) {
        newContact.image_url = 'https://static.thenounproject.com/png/340719-200.png';
        this.setState({ image_url: "https://static.thenounproject.com/png/340719-200.png" })
      }
      if (newContact.email === '' || newContact.email === null) {
        newContact.email = 'N/A';
        this.setState({ email: "N/A" })
      }
      if (newContact.phone_number === '' || newContact.phone_number === null) {
        newContact.phone_number = 'N/A';
        this.setState({ phone_number: "N/A" })
      }

    // Using props passed to add new Contact to app
    // and creates new link in the main view
    this.props.addContact(newContact);
    this.props.history.push('/contacts');
    }
  }

  // Random number generator
  generateId() {
    return Math.round(Math.random() * 100000000);
  }

  render() {

    // On click (line 108), sets state of new contact to user input for each
    // key value
    return (
      <div>
      <form className="new-contact-form">
        <h3>Add a New Contact</h3>

        <div className="form-group">

          <label>Name (required) &nbsp;&nbsp;</label>
          <input type="text" id="contact-name" className="form-control" placeholder="Jane Doe"    onChange={event => this.setState({ name: event.target.value })
        }/>

          <br/>
          <br/>

          <label>Phone Number &nbsp;&nbsp;</label>
          <input type="text" className="form-control" placeholder="###-###-####"
          onChange={event => this.setState({ phone_number: event.target.value })
        }/>

          <br/>
          <br/>

          <label>Email Address &nbsp;&nbsp;</label>
          <input type="text" className="form-control" placeholder="example@example.com" onChange={event => this.setState({ email: event.target.value })
        }/>

          <br/>
          <br/>

          <label>Image URL &nbsp;&nbsp;</label>
          <input type="text" className="form-control" placeholder="https://sample.org/image.jpg" onChange={event => this.setState({ image_url: event.target.value })
        }/>

        </div>

        <br/>

        <button type="button" onClick={this.handleSubmitContactClick}>Submit</button>
      </form>

      <br/>

      <Link to="/contacts">Back</Link>
      </div>
    );
  }
}

// Using propTypes to alert developer
ContactNew.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  image_url: PropTypes.string,
  phone_number: PropTypes.string,
}

ContactNew.propTypes = {
  email: 'N/A',
  phone: 'N/A',
  image_url: '',
}



export default ContactNew;
