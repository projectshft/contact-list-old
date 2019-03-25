import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Don't need to import Contact because it will be brought in with ContactList... but need it here for routing??
import Contact from './components/Contact';

import ContactList from './components/ContactList';
import Header from './components/Header';
import AddContactForm from './components/AddContactForm';
// import EditContact from './components/EditContact';
// import { Provider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// class App extends Component {
//   render() {
//     return ({
//       // Wrap entire return in <Provider> to allow global access to state in context.

//         {/* Wrap everything but Provider inside the BrowserRouter */}

//         <BrowserRouter>
//           <div className="App">
//             <Header branding="PS Contact List" />
//             {/* <div className="container"> */}
//               {/* Replace AddContactForm and ContactList with Routes. Wrap in a Switch. */}
//               <Switch>
//                 {/* <AddContactForm />
//               <ContactList /> */}
//                 <Route exact path="/" component={ContactList} />
//                 <Route exact path="/" component={Contact} />
//                 <Route exact path="/contact/add" component={AddContactForm} />
//               </Switch>
//             {/* </div> */}
//           </div>
//         </BrowserRouter>
//   });
//   }

// export default App;

class App extends Component {
  render() {
    return (
      // <Provider>
      <BrowserRouter>
        <div className="App">
          <Header branding="PS Contact List" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={ContactList} />
              <Route exact path="/" component={Contact} />
              <Route exact path="/contact/add" component={AddContactForm} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
      // </Provider>
    );
  }
}

export default App;
