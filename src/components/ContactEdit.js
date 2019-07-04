import React from 'react';

class ContactEdit extends React.Component {
  constructor() {
    super()
    
    // state for updating contact 
    this.state = { 
      id: 0,
      name: '',
      email: '',
      phone_number: '',
      image_url: ''
    }

    // bind functions 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleFill = this.handleFill.bind(this); 
  }

  handleChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state); 
    this.props.editContact(this.state);
    this.props.props.history.push('/');
  }

  componentDidMount() {
    const thisId = Number(this.props.props.match.params.id);
    const contacts = this.props.contacts;
    const contact = contacts.find((contact) => { return contact.id === thisId; });
    this.setState({id: contact.id, name: contact.name, email: contact.email, phone_number: contact.phone_number, image_url: contact.image_url}); 
  }

  render() {

    return (
      <div>
      <div>
        Edit Contact 
      </div>
      <form onSubmit={this.handleSubmit} className="edit-form">
      <input type="text" id="name" value={this.state.name} onChange={this.handleChange} placeholder="Name" /> 
      <input type="text" id="email" value={this.state.email} onChange={this.handleChange} placeholder="Email"/> 
      <input type="text" id="phone_number" value={this.state.phone_number} onChange={this.handleChange} placeholder="Phone Number"/> 
      <input type="text" id="image_url" value={this.state.image_url} onChange={this.handleChange} placeholder="Image URL"/>  
      <button type="submit">Save</button>
    </form>
    </div>
    )
  }

}

export default ContactEdit; 