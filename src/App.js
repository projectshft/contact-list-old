import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import ContactList from './components/contact-list'
import Contact from './components/contact-single'
import New from './components/new'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor() {
    // inherit Component constructor with super()
    super();

    this.state = {
      contacts: [
        {name: 'Harry Potter', image:'', email: 'hpotter@hogwarts.edu', phone: 3177501456, key: 14523},
        {name: 'Ron Weasley', image:'', email: 'rweasley@hogwarts.edu', phone: 5728199503, key: 14524},
        {name: 'Hermione Granger', image:'', email: 'hgranger@hogwarts.edu', phone: 5028375829, key: 14525}
      ]
    }
    // bind this to its context
    this.addContact = this.addContact.bind(this)
  }

  addContact(object) {
    const contacts = this.state.contacts.concat([object])
    this.setState({contacts: contacts}, () => {console.log(this.state.contacts)});
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' render={() => <ContactList contacts={this.state.contacts} />}/>
          <Route exact path='/contacts' render={() => <ContactList contacts={this.state.contacts} />}/>
          <Route path='/contacts/new' render={() => <New addContact={this.addContact}/>}/>
          <Route path='/contacts/:key' component={Contact} />
        </Switch>
      </main>
    );
  }
}

export default App;
