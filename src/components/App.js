import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
//import PropTypes from 'prop-types';
import './App.css';
import Contacts from './Contacts';
import ContactNew from './ContactNew';
import ContactView from './ContactView';
import ContactEdit from './ContactEdit';


class App extends React.Component {



  render() {
    return (
      <div className="App">
        <Link to="/">Contacts   </Link>
        <Link to="/new">New Contact   </Link>
        <Link to="/view">View Contact   </Link>
        <Link to="/edit">Edit Contact </Link>

        <Switch>
          <Route exact path='/' component={Contacts} />
          <Route path='/new' component={ContactNew} />
          <Route path='/view' component={ContactView} />
          <Route path='/edit' component={ContactEdit} />
        </Switch>

      </div>
    )
  }
}

export default App;
