import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './components/contact-form';
import ContactsList from './components/contacts-list';
import Home from './components/home';
import PropTypes from 'prop-types';

class App extends Component {


  constructor () {
    super()

    //Putting in one dummy contact, using generateId() to create a unique identifier
    this.state = {
      contacts: [
        { id: this.generateId(), name: 'Albert Einstein', image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg", email: 'albert_einstein@gmail.com', phone_number: "6904206969"}
      ]
    }

    this.addContact = this.addContact.bind(this);
  }


  generateId () {
    return Math.round(Math.random() * 100000000)
  }

  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])});
  }

  render() {
    return (
      <div>
      //Added in a header for easier navigation
      <Header />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/contacts-list' render={() => (
          <ContactsList addContact={this.addContact} contacts={this.state.contacts} />
        )}/>
      </Switch>
    </div>
    )
  }
}
//Style to get rid of the bullet points in the header
var ulStyle = {
  "list-style-type" : "none"
};

const Header = () => (
  <header>
    <ul style={ulStyle}>
      <li><Link to="/"><b>Home</b></Link></li>
      <li><Link to="/contacts-list"><b>Contacts</b></Link></li>
      <li><Link to="/contacts-list/new"><b>New Contact</b></Link></li>
      <hr />
    </ul>
  </header>
)

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
