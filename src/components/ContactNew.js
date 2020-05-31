import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ContactNew extends Component {
  constructor () {
    super ()

    this.state = {
      id: '',
      name: '',
      image_url: '',
      email: '',
      phone_number: "15555555555"
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
  }

  handleSubmitContactClick () {
    const newContact = {
    id: this.generateId(),
    name: this.state.name,
    image_url: this.state.image_url,
    number: this.state.email,
    position: this.state.phone_number
  }

    console.log(this.props)

    this.props.addContact(newContact);
    this.props.history.push('/contacts');
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
          <input type="text" id="contact-name" className="form-control"          onChange={event => this.setState({ name: event.target.value })
        }/>

          <br/>

          <input type="text" className="form-control" placeholder="Ex: ##########"
          onChange={event => this.setState({ phone: event.target.value })
        }/>

          <br/>

          <input type="text" className="form-control" placeholder="example@sample.com" onChange={event => this.setState({ email: event.target.value })
        }/>

          <br/>

          <input type="text" className="form-control" placeholder="https://sample.org/image.jpeg" onChange={event => this.setState({ image_url: event.target.value })
        }/>

        </div>

        <button type="button" onClick={this.handleSubmitContactClick}>Submit</button>
      </form>

      <Link to="/contacts">Back</Link>
      </div>
    );
  }
}

export default ContactNew;
