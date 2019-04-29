import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactList from './components/contactLIst.js';
import AddContact from './components/addContact.js';
import ContactDetail from './components/contactDetail.js';
import './App.css';


class App extends React.Component {

// Constructor function
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        {
          id: 1,
          firstName: 'Jenny', 
          lastName: 'Smith',
          email: 'address@email.com', 
          phone: '555-5555',
          image: 'https://image.shutterstock.com/image-vector/woman-avatar-design-260nw-1013591908.jpg'

        }
      ]
    }
  }
          

  // Add new contact info with input from {New} component
  // by making a copy of the current state and attaching the new contact
  addContact = (firstName, lastName, email, phone, image) => {

    const generateId = () => Math.round(Math.random() * 100000000);

    const newContact = {
      id: generateId(),
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      image: image
    }

    this.setState({ contacts: [...this.state.contacts, newContact] });
  }

  render() { 
    
    return (
      <BrowserRouter>
        <Switch>
          <div className="App">
            <div className="container">

              <h1 style={headerStyle}>i.ROLO</h1>

              <Route 
                exact path="/" 
                render={props => (
                  <ContactList
                    contacts={this.state.contacts} 
                  />  
                )} 
              />
          
              <Route 
                path="/contacts" 
                render={props => (
                  <ContactList
                    contacts={this.state.contacts} 
                  />
                )} 
              />

              <Route 
                path="/new" 
                render={props => (
                  <AddContact 
                    contacts={this.state.contacts}
                    addContact={this.addContact} 
                  />
                )} 
              />

              <Route 
                path="/contacts/:id" 
                render={props => (  
                  <ContactDetail
                    key={this.state.id} 
                    contacts={this.state.contacts} 
                    routerProps={props}
                  />
                )} 
              />
    
            </div>
          </div>
        </Switch>
      </BrowserRouter> 
    );
  }

}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

export default App;
