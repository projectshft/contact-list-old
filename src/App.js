import React, { Component } from 'react';
import './App.css';

// testing hardcoded contacts

let contacts = [
  {
    "id": 70219577,
    "name": "Albert Einstein",
    "image_url": "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
    "email": "aeinstein@example.com",
    "phone_number": "15555555555"
  },
  {
    "id": 70219578,
    "name": "Homer Simpson",
    "image_url": "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
    "email": "homer@compuglobalhypermeganet.com",
    "phone_number": "9395550113"
  },
  {
    "id": 70219579,
    "name": "Ghostbusters Inc.",
    "image_url": "https://upload.wikimedia.org/wikipedia/en/e/ee/Ghostbusters_logo.svg",
    "email": "pvenkmann@ghostbusters.com",
    "phone_number": "1234567890"
  }
]


// Creating a simple div header

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="Contacts-main col-md-6 offset-md-3">
          <header className="Contacts-header">
            <h1 className="Contacts-title">Contact List</h1>
          </header>
          </div>
          </div>
    );
  }
}

export default App;
