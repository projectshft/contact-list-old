import React, { Component } from 'react';
import ContactForm from './Contact-Form';
import ContactList from './Contact-List';

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="page-header">
            <h1>Contact List</h1>
          </div>

          <div className="contacts">
          </div>

          <ContactForm />

        </div>
      </div>
    );
  }
}

export default App;
