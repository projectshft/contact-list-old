import React from 'react';
import { Link } from 'react-router-dom'; 
import { sendEvent } from './State';

class ContactEdit extends React.Component {

  constructor() {
    super()
    // state for updating contacts 
    this.state = {
      id: 0,
      name: '',
      email: '',
      phone_number: '',
      image_url: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleEdit(event) {
    event.preventDefault();
    const updatedContact = this.state;
    sendEvent('editContact', updatedContact);
    this.props.props.history.push('/');
  }

  componentDidMount() {
    const thisId = Number(this.props.props.match.params.id);
    const contacts = this.props.contacts;
    const contact = contacts.find((contact) => { return contact.id === thisId; });
    this.setState({ id: contact.id, name: contact.name, email: contact.email, phone_number: contact.phone_number, image_url: contact.image_url });
  }

  render() {
    return (
      <div>
        <div className='page-title'>
          Edit Contact
        </div>
        <div>
        <button className="btn btn-light"><Link to='/'>&laquo; Back to Contacts</Link></button>
        </div>
        <form onSubmit={this.handleEdit} className="input-form">
          <input className="form-control" type="text" id="name" value={this.state.name} onChange={this.handleChange} placeholder="Name" />
          <input className="form-control" type="text" id="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
          <input className="form-control" type="text" id="phone_number" value={this.state.phone_number} onChange={this.handleChange} placeholder="Phone Number" />
          <input className="form-control" type="text" id="image_url" value={this.state.image_url} onChange={this.handleChange} placeholder="Image URL" />
          <button className="btn btn-primary" type="submit">Save Changes</button>
        </form>
      </div>
    )
  }
}

export default ContactEdit; 