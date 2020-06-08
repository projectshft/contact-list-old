import React, { Component } from 'react';
import '../App.css';
import Contacts from './ContactList'
import NewContact from './NewContact'


const generateId = () => Math.round(Math.random() * 100000000);


class App extends Component {
  constructor () {
    super();


    this.state: = {

      contacts: [
          {
            id: generateId(),
            name: "Albert Einstein",
            image_url: "https://i.pinimg.com/236x/95/8f/7a/958f7acae61910da05f327a38eb63530--innovation-design-imagination.jpg",
            email: "aeinstein@example.com",
            phone: "15555555555"
          },
          {
            id: generateId(),
            name: "Homer Simpson",
            image_url: "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
            email: "homer@compuglobalhypermeganet.com",
            phone: "9395550113"
          },
          {
            id: generateId(),
            name: "Ghostbusters Inc.",
            image_url: "https://upload.wikimedia.org/wikipedia/en/e/ee/Ghostbusters_logo.svg",
            email: "pvenkmann@ghostbusters.com",
            phone: "1234567890"
          }
        ]


    }

  }


  render() {
    return (
      <div className="row">
        <div className="Contacts-main col-md-6 offset-md-3">
          <header className="Contacts-header">
            <h1 className="Contacts-title">Contacts</h1> <button>Add Contact</button> //TODO Link to NewContact
          </header>
            <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
