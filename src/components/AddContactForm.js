import React, { Component } from 'react';
// import { Link } from 'react-router-dom;';

class AddContactForm extends Component {
  // Each field of input on form will be a part of state

  state = {
    name: '',
    image_url: '',
    email: '',
    phone: '',
    deleted: false,
    errors: {}
  };
  // constructor() {
  //   super();

  //   this.state = {
  //     name: '',
  //     image_url: '',
  //     email: '',
  //     phone: '',
  //     deleted: false,
  //     errors: {}
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {
  //   // Generate id for new contact
  //   const generateId = () => Math.round(Math.random() * 100000000);

  //   console.log(
  //     "generateId has been invoked, and here's the proof: ",
  //     generateId()
  //   );

  //   //  Create new contact from user input
  //   const contact = {
  //     name: this.state.name,
  //     image: this.state.image,
  //     email: this.state.email,
  //     phone: this.state.phone,
  //     deleted: false,
  //     id: generateId()
  //   };
  // }
  // Prevent default submitting of add-contact form
  onSubmit = e => {
    e.preventDefault();
    console.log('State at contact-form submission is: ', this.state);

    // Error Handling
    // NOTE: image_url is left out of error handling and is not a required field.
    const { name, image_url, email, phone } = this.state;
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

    const newContact = {
      name,
      image_url,
      email,
      phone
    };
    // TODO: Add contact to ContactList

    // Empty out the state of the add-contact form;
    this.setState({
      name: '',
      image_url: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  // Define handlers for form input fields)
  onNameChange = e => this.setState({ name: e.target.value });
  onImageChange = e => this.setState({ image_url: e.target.value });
  onEmailChange = e => this.setState({ email: e.target.value });
  onPhoneNumberChange = e => this.setState({ phone: e.target.value });

  // Could implement the above more efficiently, with just one method, utilizing brackets:
  // onChange = e => this.setState({ [e.target.value]: e.target.value });
  render() {
    // Destructure the data
    const { name, image_url, email, phone } = this.state;
    return (
      // Use Bootstrap to create card with styling
      <div className="card mb-3">
        <div className="card-header">
          <div className="row justify-content-center">
            <h5>Add Contact</h5>
          </div>
          <div className="card-body">
            {/* Create form with submit-button handler */}
            <form onSubmit={this.onSubmit.bind(this)}>
              {/* <form onSubmit={this.onSubmit.bind(this, dispatch)}> */}
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-lg"
                  placeholder="Enter name"
                  // The use of value necessitates an event handler, "onChange" that will change the state value upon data entry.
                  value={name}
                  onChange={this.onNameChange}
                  // onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="image_url">Image</label>
                <input
                  // type="email" covers validation: html5 will required correct entry into email field.
                  type="url"
                  name="image_url"
                  className="form-control form-control-lg"
                  placeholder="Enter image url"
                  value={image_url}
                  onChange={this.onImageChange}
                  // onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  // type="email" covers validation: html5 will required correct entry into email field.
                  type="email"
                  name="email"
                  className="form-control form-control-lg"
                  placeholder="Enter email"
                  value={email}
                  onChange={this.onEmailChange}
                  // onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control form-control-lg"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={this.onPhoneNumberChange}
                  // onChange={this.onChange}
                />
              </div>
              <div className="row justify-content-center">
                <input value="Submit Contact" className="btn btn-info" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default AddContactForm;
