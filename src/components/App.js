import React, { Component } from 'react';
import { Switch , Route } from 'react-router-dom'
import AddContact from './AddContact'
import ContactDetail from './ContactDetail'


class App extends Component {
  constructor() {
    super()

    this.state = {
      "contacts": [
        {
          "id": 70219577,
          "name": "Albert Einstein",
          "image_url": "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
          "email": "aeinstein@example.com",
          "phone_number": "15555555555"
        }
      ]
}
  }
  render() {
    return (
      <div>
        <h1>Contact</h1>
      </div>
    );
  }
}

export default App;
