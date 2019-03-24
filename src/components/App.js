import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import SubmitContact from './SubmitContact';
import ContactItem from './ContactItem';
import ContactList from './ContactList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts = [
        {
          "id": "1",
          "name": "Dean Smith",
          "image_url": "",
          "phoneNumber": 3363174563,
          "email": "CoachSmith@unc.edu"
        },
        {
          "id": "2",
          "name": "Roy Williams",
          "image_url": "",
          "phoneNumber": 9305091719,
          "email": "CoachWilliams@unc.edu"
        }
      ]
    }
  }
newContact(contact){
  this.setState({contacts: this.state.contacts.concat([contact])}, ()=>{
    console.log("contacts added", this.state.contacts)
  });
}

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;
