import React, {Component} from 'react';

class EditContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.contact.name,
      email: this.props.contact.email,
      phone: this.props.contact.phone,
      image: this.props.contact.image
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    
    const updatedContact = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      image: this.state.image
    };

    this.props.editContact(updatedContact);
  }

  render() {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <form className="border rounded p-5" onSubmit={this.handleSubmit}>
              <h5 className="mb-5 text-center">Edit Contact</h5>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" value={this.state.name} name='name' onChange={this.handleChange} className="form-control" id="name" placeholder="Enter name" autoFocus required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" value={this.state.email} name='email' onChange={this.handleChange} className="form-control" id="email" placeholder="Enter email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" value={this.state.phone} name='phone' onChange={this.handleChange} className="form-control" id="phone" placeholder="Enter phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="image">Image</label>
                <input type="url" value={this.state.image} name='image' onChange={this.handleChange} className="form-control" id="image" placeholder="Enter image URL" required />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default EditContact;