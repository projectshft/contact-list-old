import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Don't need to import Contact because it will be brought in with ContactList
// import Contact from './components/Contact';

import ContactList from './components/ContactList';
import Header from './components/Header';
// import AddContact from './components/AddContact';
// import EditContact from './components/EditContact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="PS Contact List" />
        <div className="container">
          <ContactList />
        </div>
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Contact from './components/Contact';
// import ContactList from './components/ContactList';
// import Header from './components/Header';
// import AddContact from './components/AddContact';
// import EditContact from './components/EditContact';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header psTitle="PS Contact List" />
//         <Contact
//           name="Charles Mingus"
//           image_url="#"
//           email="mingus@gmail.com"
//           phone="1-800-fat-bass"
//         />
//         <Contact
//           name="Patty Smith"
//           image_url="#"
//           email="PattySmith@gmail.com"
//           phone="1-800-hip-poet"
//         />
//       </div>
//     );
//   }
// }

// export default App;
