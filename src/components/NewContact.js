import React, { Component } from 'react';

class NewContact extends Component {
  handleClick () {
    console.log('click!')
  }


// Creating a form for input for a new contact.

  render() {
    return (
      <form className="contact-form">
        <h3>Add a New Contact</h3>

        <div className="form-group">
          <input type="text" id="contact-name" className="form-control" placeholder="Name"/>

          <br/>

          <input type="text" id="contact-image" className="form-control" placeholder="Image URL"/>
          <br/>

          <input type="text" id="contact-image" className="form-control" placeholder="Email"/>
          <br/>

          <input type="text" id="contact-image" className="form-control" placeholder="Phone Number"/>

        </div>

        <button type="button" className="btn btn-primary add-contact">Create</button>
      </form>
    );
  }
}

    export default NewContact;
