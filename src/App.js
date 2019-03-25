import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts.js';
import New from './components/new.js';
import Id from './components/id.js';
import './App.css';


class App extends React.Component {


  state = {
      contacts: [
        {
          id: 1,
          fullName: 'Your full name',
          email: 'address@email.com',
          completed: false
        }
      ]
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
        <div className="App">
          <div className="container">

            <h1 style={headerStyle}>i.ROLO</h1>

            <Route exact path="/" render={props => (
              <React.Fragment>

                <Contacts 
                  contacts={this.state.contacts} 
                  markComplete={this.markComplete}
                  deleteId={this.deleteId}
                />

              </React.Fragment>
            )} />
        
            <Route path="/contacts" render={props => (
              <React.Fragment>

                <Contacts 
                  contacts={this.state.contacts} 
                  markComplete={this.markComplete}
                  deleteId={this.deleteId}
                />

              </React.Fragment>
            )} />

            <Route path="/new" render={props => (
              <React.Fragment>
     
                <New addContact={this.addContact} />

              </React.Fragment>
            )} />

            <Route path="/contacts/:id" render={props => (
              <React.Fragment>

                <Id />

              </React.Fragment>
            )} />

            
          
          </div>
        </div>
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
