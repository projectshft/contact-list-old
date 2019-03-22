import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './Contact';
import Header from './Header';
import NewContact from './NewContact'


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {/* create a switch for contacts, indvidual contact & create new contact */}
        
        <Contact />

        <NewContact />

      </div>
    );
  }
}

export default App;
