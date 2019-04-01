import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts.js';
import New from './components/new.js';
import Id from './components/id.js';
import './App.css';


class App extends React.Component {

// Constructor function
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        {
          id: 1,
          fullName: 'First Last', // change to firstName, lastName
          email: 'address@email.com', // add img key

        }
      ]
    }
  }
          
  

  // Takes the id of the person whose checkbox was ticked
  // from {Id} component, and finds the matching id in the state
  // Then, toggles that person's completed status to the opposite of what it was
  markComplete = (id) => {
    this.setState({ contacts: this.state.contacts.map(each => {
      if(each.id === id) {
        each.completed = !each.completed
      }
      return each;
    }) });
  }

  // Takes the id of the person whose delete button was clicked
  // from {Id} component, and resets the state for every id except for the one that was passed in
  // (filtering out the id that was clicked)
  // Thus, removing that person's entire contact info from the state
  deleteId = (id) => {
    this.setState({ contacts: [...this.state.contacts.filter(each => each.id !== id )] });
  }

  // Add new contact info with input from {New} component
  // by making a copy of the current state and attaching the new contact
  addContact = (fullName, email) => {

    const generateId = () => Math.round(Math.random() * 100000000);

    const newContact = {
      id: generateId(),
      fullName: fullName,
      email: email,
      completed: false
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
                  <Contacts 
                    contacts={this.state.contacts} 
                  />  
                )} 
              />
          
              <Route 
                path="/contacts" 
                render={props => (
                  <Contacts 
                    contacts={this.state.contacts} 
                  />
                )} 
              />

              <Route 
                path="/new" 
                render={props => (
                  <New 
                    contacts={this.state.contacts}
                    addContact={this.addContact} 
                  />
                )} 
              />

              <Route 
                path="/contacts/:id" 
                render={props => (  
                  <Id 
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
