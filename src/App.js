import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ContactList from './ContactList';
import IndividualContact from './IndividualContact';
import AddContact from './AddContact'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


class App extends Component {
  constructor() {
    super()

    this.state = {
      contacts: [
        { id: 1, name: 'Tom Franks', number: '919-450-2551', email: 'tom@gmail.com' },
        { id: 2, name: 'Betty Draper', number: '919-450-2111', email: 'betty@gmail.com' },
        { id: 3, name: 'Barry Smith', number: '919-450-2431', email: 'barry@gmail.com' }
      ]

    }
    // this.addContact = this.addContact.bind(this);

  }
  handleClick() {
    this.addContact();
  }

  addContact(name, number, email) {
    const generateId = () => Math.round(Math.random() * 100000000);
    const newContact = {
      id: generateId(),
      name: name,
      number: number,
      email: email

    }
    // this.setState({ contacts: this.state.contacts.concat([contact]) });
  }


  render() {

    return (

      <Switch>

        

        <Route exact path='/' render={() => (
          <div className="App">
            <header className="App-header">
            </header>
            <div className="App-intro">
              <div className="row">
                <div className="col-8">
                  <h1 className="App-title">Contact List</h1>
                </div>
                <button onClick={this.handleClick()} type="button" className="btn btn-primary">Add New Contact</button>
              </div>
            </div>
          </div>
        )} />
        <Route path='/AddContact' render={() => (
          <AddContact />
        )} />

      </Switch>





      // </div>

    );
  }

};


{/* </div> */ }
{/* <AddContact /> */ }

export default App;

{/* <Route exact path="/" component={ContactList} /> */ }

{/* <Route path="/contact/:number" component={ContactList} /> */ }


  // <Switch>
  //   <Route exact path="/" component={App} />
  //   <Route path="/AddContact" component={AddContact} />
  //   <Route path="/contact/id:" component={IndividualContact} />
  //   <Route path="/ContactList" component={ContactList} />
  // </Switch>
