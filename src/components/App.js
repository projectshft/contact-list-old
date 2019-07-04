import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { sendEvent } from './State';
import PropTypes from 'prop-types';
//import './App.css';
import Contacts from './Contacts';
import ContactNew from './ContactNew';
import ContactView from './ContactView';
import ContactEdit from './ContactEdit';


class App extends React.Component {
  constructor() {
    super()
    // const counter = 0;
    this.state = {
      contacts: [
        {
          id: 1,
          name: "Kristina",
          email: "kjb@gmail.com",
          phone_number: "2524527933",
          image_url: "link"
        }
      ]
      // counter: counter
    }

    // bind functions 
    //this.addContact = this.addContact.bind(this);
    //this.deleteContact = this.deleteContact.bind(this); 
    //this.editContact = this.editContact.bind(this);
  }

  // declare functions 
  // addContact(contact) {
  //   const nextId = this.state.counter + 1;
  //   contact.id = nextId;
  //   this.setState({
  //     contacts: this.state.contacts.concat([contact]),
  //     counter: nextId
  //   });
  // }

  // deleteContact(id) {
  //   this.setState({contacts: this.state.contacts.filter(
  //     contact => contact.id !== Number(id)
  //   )}); 
  // }

  // editContact(contact) {
  //   this.setState({contacts: this.state.contacts.map(
  //     (el) => el.id === contact.id ? Object.assign({}, el, {name: contact.name}) : el 
  //   )});
  // }

  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col">
        <Link to="/">-Contacts-   </Link>
        <Link to="/new">-New Contact-   </Link>
        {/* <Link to="/view">-View Contact-   </Link> */}
        {/* <Link to="/edit">-Edit Contact-   </Link> */}
        </div>
        </div>
        <Switch>
          <Route
            exact path='/'
            render={() => (
              <Contacts
                contacts={this.props.contacts}
                // deleteContact={this.deleteContact}
              />
            )}
          />
          <Route 
            path='/new' 
            render={(props) => 
              <ContactNew
                props={props}
                // addContact={this.addContact}
              />
            } 
          />
          <Route 
            exact path='/:id'
            render={(props) =>
              <ContactView
                props={props}
                contacts={this.props.contacts}
              />
            }
          />
          <Route path='/:id/edit' 
            render={(props) => 
              <ContactEdit
                props={props}
                contacts={this.props.contacts}
                // editContact={this.editContact}
              />
            } 
          />
          
        </Switch>

      </div>
    )
  }
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired, 
      email: PropTypes.string.isRequired, 
      phone_number: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired
    }).isRequired
  ).isRequired 
};

export default App;
