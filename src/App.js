import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <p className="App-intro">
          <div class="row">
            <div class="col-8">
              <h1 className="App-title">Contact List</h1>
            </div>
            <button type="button" className="btn btn-primary">Add New Contact</button>
          </div>
        </p>


        <div>
          <div className="contact-list">
            <ul className="list-group">
              <li className="list-group-item">Tom Englestain</li>
              <li className="list-group-item">Bob Odenkirk</li>
              <li className="list-group-item">Frida Mendoza</li>
              <li className="list-group-item">Bobby Babba</li>
              <li className="list-group-item">Franky the fish</li>
            </ul>
          </div>
         </div>

         
      </div>
    );
  }
}

export default App;
