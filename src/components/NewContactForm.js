import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NewContactForm extends Component {
  render() {
    return (
      <div>
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

        <button type="button" className="btn btn-primary add-post">Create New Contact</button>
      </form>

      <Link to="/contacts">Back</Link>
      </div>
    );
  }
}

export default NewContactForm;
