import React, { Component } from 'react';
import AddContact from './components/AddContact';
import Contacts from './components/Contacts';
import ContactDetail from './components/ContactDetail';

//import ReactDom to use broswer router
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

  //generate unique id
const generateId = () => Math.round(Math.random() * 100000000);

class App extends Component {
  state = {
    contacts: [
      {
          id: generateId(),
          fname: 'Zena',
          lname: 'Ryan',
          image_url: 'https://static1.squarespace.com/static/59bc843229f1875d2162cea4/59bc88e8f7e0ab3297d524fb/5bdb626d4d7a9c8118757a94/1541104241789/SQUARE+4.jpeg',
          email: 'jry@gmail.com',
          phone_number: '111-111-1111'
      },
      {
          id: generateId(),
          fname: 'James',
          lname: 'Bradley',
          image_url: 'https://ninaparkerstudios.com/wp-content/uploads/2018/07/LanceHuff-Headshot-Atlanta-NinaParkerStudios-9879-SQUARE-800x800.jpg',
          email: 'jbrad@gmail.com',
          phone_number: '222-222-2222'
      },
      {
          id: generateId(),
          fname: 'Simon',
          lname: 'React',
          image_url: 'https://photos.peterhurley.com/sites/default/files/styles/large/public/uploads/2018/03/23/43/hurley-square.jpg?itok=t3bMGCXV',
          email: 'simon@gmail.com',
          phone_number: '333-333-3333'
      }
    ]
  } 

  //add the new contact to the app level state

  addContact = (fname, lname, phone_number, email, image_url) => {
    //each time a new contact is created, a unique id should be generated for them
    const newContact = {
      id: generateId(),
      fname,
      lname,
      phone_number,
      email,
      image_url
    }
  
    this.setState({ contacts:
      [...this.state.contacts, newContact]})
  }
  //use Switch to ensure only one route renders at a time
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <h1>Contacts</h1>
            {/* each contact on the main route should be clickable; when clicked, it leads to a new route /counts/{the id of the contact} */}
            <Switch>
              <Route exact path={["/contacts", "/"]} render= {() => <Contacts contacts={this.state.contacts} /> } />
              <Route path="/contacts/new" render={props => <AddContact addContact={this.addContact} /> }/>
              <Route path="/contacts/:contactId" render={routerProps => <ContactDetail routerProps={routerProps} contacts={this.state.contacts} />} />
              {/* <Route path="/contacts/:contactId" render={props => <ContactDetail {...props} contacts={this.state.contacts} />} /> */}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;