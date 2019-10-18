import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactList from './contactlist'

class App extends Component {
  constructor() {
    super()

    this.state = {
      contacts: [
        {
          Id: 1,
          name: "Ben Blocker",
          imageURL: "G",
          email: 'test@123.com',
          phone: '123-456-7890'
        }, {
          Id: 2,
          name: "John Jacobs",
          imageURL: "G",
          email: 'test@123.com',
          phone: '123-456-7890'
        }
      ]
    };


    const contactData = this.state.contacts.map(function(b, index) {
      const contact = {
        Id: b.Id,
        name: b.name
      }
      console.log(contact.name)
      // return contact
      return (<div className="contact1">
        {contact.name}
      </div>);

    });
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
        <ContactList contacts={this.state.contacts} />
          <hr/>
          <div className="contacts">
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default App;
