import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

class ContactNew extends React.Component {
  constructor () {
    super ()

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
    const newContact = {
    id: this.generateId(),
    name: this.state.name,
    image_url: this.state.image_url,
    email: this.state.email,
    phone_number: this.state.phone_number
  }

    if (newContact.name === '' || newContact.name === null) {
      alert('Please enter a name')
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
    this.props.addContact(newContact);
    this.props.history.push('/contacts');
    }
  }

  generateId() {
    return Math.round(Math.random() * 100000000);
  }

  render() {
    return (
      <div>
      <form className="new-contact-form">
        <h3>Add a New Contact</h3>

        <div className="form-group">
          <input type="text" id="contact-name" className="form-control" placeholder="Jane Doe"    onChange={event => this.setState({ name: event.target.value })
        }/>

          <br/>
          <br/>

          <input type="text" className="form-control" placeholder="###-###-####"
          onChange={event => this.setState({ phone_number: event.target.value })
        }/>

          <br/>
          <br/>

          <input type="text" className="form-control" placeholder="example@example.com" onChange={event => this.setState({ email: event.target.value })
        }/>

          <br/>
          <br/>

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
