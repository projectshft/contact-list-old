import { Switch, Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ContactInfo from './ContactInfo';
import NewContactForm from './NewContactForm'
import ContactsList from './ContactsList';
import michaelImg from './michaelbluth.jpg'
import georgeImg from './georgebluth.jpg'
import lucilleImg from './lucillebluth.jpg'
import busterImg from './busterbluth.jpg'
import gobImg from './gobbluth.jpg'



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: [
        { id: 1, name: 'Michael Bluth', phone: "555-246-5932", email: 'michaelgbluth@gmail.com', img: new URL(michaelImg) },
        { id: 2, name: 'George Bluth', phone: "555-246-5933", email: 'georgebluth@gmail.com', img: new URL (georgeImg) },
        { id: 3, name: 'Lucille Bluth', phone: "555-246-9667", email: 'lucillebluth@gmail.com', img: new URL (lucilleImg) },
        { id: 4, name: 'Buster Bluth', phone: "555-246-3455", email: 'busterbluth@gmail.com', img: new URL (busterImg) },
        { id: 5, name: 'Gob Bluth', phone: "555-312-5742", email: 'gobbluth@gmail.com', img: new URL (gobImg) },
     ]
    }


  }
//this function will be a prop that is passed down to the new contact form component. We make sure to use setState and concat to adhere to React's functionality for determining change in state and its state immutability requirements, respectively
  addContact = contact => {
    this.setState({ contacts: this.state.contacts.concat([contact]) })
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/contact" render={() => (
            <ContactsList contacts={this.state.contacts} />
          )} />
         
          <Route exact path="/contact/new" render={(routerProps) => (
            <NewContactForm addContact={this.addContact} history={routerProps.history} />
          )} />

          <Route exact path="/contact/:id" render={(routerProps) => (
            <ContactInfo contactId={parseInt(routerProps.match.params.id, 10)} contacts={this.state.contacts} />
          )} />

           <Redirect from="/" to="/contact" />
        </Switch>
      </div>
    )
  }
}



export default App 