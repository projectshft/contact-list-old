import React, { Component } from 'react';
import { Button } from 'reactstrap';
// import logo from './logo.svg';
// import '../index.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      contacts: []
  }
}
  render() {
    return (
      <div className="App">
        <h1>My Contacts <Button color="primary">Add Contact </Button>{''}</h1>
        {/* add link above to newcontact page */}
        <ul className="ClassList">
        </ul>
      </div>
    );
  }
}

export default App;
