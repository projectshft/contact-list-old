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

    this.state = {
      contacts: [
        {
          id: 0,
          name: "Kristina",
          email: "kjb@gmail.com",
          phone_number: "2524527933",
          image_url: "link"
        }
      ]
    }

    // bind functions 

  }

  // declare functions 

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
          <Route path='/new' component={ContactNew} />
          <Route path='/edit' component={ContactEdit} />
          <Route path='/:id'
            render={() =>
              <ContactView
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
