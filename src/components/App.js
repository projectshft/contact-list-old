import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
//import PropTypes from 'prop-types';
//import './App.css';
import Contacts from './Contacts';
import ContactNew from './ContactNew';
import ContactView from './ContactView';
import ContactEdit from './ContactEdit';


class App extends React.Component {
  constructor() {
    super()
    const counter = 0;
    this.state = {
      contacts: [
        {
          id: counter,
          name: "Kristina",
          email: "kjb@gmail.com",
          phone_number: "2524527933",
          image_url: "link"
        }
      ],
      counter: counter
    }

    // bind functions 
    this.addContact = this.addContact.bind(this);
  }

  // declare functions 
  addContact(contact) {
    const nextId = this.state.counter + 1;
    contact.id = nextId;
    this.setState({
      contacts: this.state.contacts.concat([contact]),
      counter: nextId
    });
  }

  render() {
    return (
      <div className="App">
        <Link to="/">-Contacts-   </Link>
        <Link to="/new">-New Contact-   </Link>
        {/* <Link to="/view">-View Contact-   </Link> */}
        <Link to="/edit">-Edit Contact-   </Link>

        <Switch>
          <Route
            exact path='/'
            render={() => (
              <Contacts
                contacts={this.state.contacts}
              />
            )}
          />
          <Route path='/new' 
            render={(props) => 
              <ContactNew
                props={props}
                addContact={this.addContact}
              />
            } 
          />
          <Route path='/edit' component={ContactEdit} />
          <Route path='/:id'
            render={(props) =>
              <ContactView
                props={props}
                contacts={this.state.contacts}
              />
            }
          />
          
        </Switch>

      </div>
    )
  }
}

export default App;
