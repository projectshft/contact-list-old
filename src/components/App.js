import React from 'react';
import ReactDOM from 'react-dom';
import ContactList from './ContactList';
import Header from './Header';
import NewContact from './NewContact'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
        {/* create a switch for contacts, indvidual contact & create new contact */}
        
        <ContactList />

        <NewContact />
        </div>

      </div>
    );
  }
}

export default App;
