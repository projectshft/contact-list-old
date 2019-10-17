import React, { Component } from 'react';

class ContactForm extends Component {
  constructor() {
    super()

    this.state = {
      id: 0,
      name: '',
      img: 'url',
      email: '',
      number: 0
    }


  }

  render() {
    return (
      <form>
        <h3>Add a New Post</h3>

        <div className="form-group">
          <input
            className="form-control"
            placeholder="Name"
             />

          <br/>

          <input
            className="form-control"
            placeholder="Picture"
            />

    <br/>
        <input
          className="form-control"
          placeholder="Email"
          />
    <br/>

      <input
        className="form-control"
        placeholder="Phone Number"
        
        />
    </div>

        <button onClick={this.handleClick} type="button" className="btn btn-primary add-post">Add Contact</button>
      </form>
    );
  }
}


export default ContactForm;
