import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super()

  this.state = {
    contacts: [
    { ID: 1, name: "Ben Blocker", imageURL: "G", email: 'test@123.com', phone: '123-456-7890' },
    { ID: 2, name: "John Jacobs", imageURL: "G", email: 'test@123.com', phone: '123-456-7890' }
  ],
};
console.log(this.state.contacts[0].name);

}


  render() {
    return (<div className="container-fluid">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="page-header">
            <h1>Contact List</h1>
            <hr/>
          </div>
          <button type="button" className="btn btn-primary">New Contact</button>

          <hr/>
        <div className="contacts-list">
          <h1>Contact</h1>
        <div className="contact1">
        <h2>Name: { this.state.contacts[0].name } </h2>
      <button type="button" className="btn btn-primary btn-sm">Edit</button>
    <button type="button" className="btn btn-secondary btn-sm">Delete</button>
        </div>
        </div>
        </div>
      </div>
    </div>);
  }
}


export default App;
