import React, { Component } from 'react';
import Contacts from './contacts';

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="page-header">
            <p>Contacts <button>Add Contact</button></p>
          </div>

          <Contacts />

        </div>
      </div>
    );
  }
}

export default App;
