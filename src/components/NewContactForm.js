import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NewContactForm extends Component {
  render() {
    return (
      <form className="new-contact-form">
        <h3>Add a New Contact</h3>

        <div className="form-group">
          <input type="text" id="contact-name" className="form-control" placeholder="Post Text"/>

          <br/>

          <input type="text" id="contact-number" className="form-control" placeholder="Ex: ##########"/>

          <br/>

          <input type="text" id="post-email" className="form-control" placeholder="example@sample.com"/>

          <br/>

          <input type="text" id="post-image-url" className="form-control" placeholder="https://sample.org/image.jpeg"/>

        </div>

        <button type="button" className="btn btn-primary add-post">Post</button>
      </form>
    );
  }
}

export default NewContactForm;
