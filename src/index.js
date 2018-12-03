import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NewContact from './components/New-Contact'
import ContactList from './components/Contact-List'
import Home from './components/Home'
import ContactView from './components/Contact-View'


class App extends Component {
    constructor() {
		super()

		this.state = {
            contacts: []
		}
		this.addContact = this.addContact.bind(this);
	};

	addContact (contact) {
        this.setState({contacts: this.state.contacts.concat([contact])});
    };

    deleteContact(contactToDelete) {
        this.setState({contacts: this.state.contacts.filter(contact => contact.id !== contactToDelete.id)});
    };
    
      render() {
        console.log(this.state.contacts)
          return (
        <div>
            <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/contacts' render={() => (
                <ContactList contacts={this.state.contacts}/>
            )}/>
            <Route exact path='/contacts/new' render={() => (
            <NewContact addContact={this.addContact} contacts={this.state.contacts}/>
            )}/>
             <Route path='/contacts/:id' render={(props) => (
                <ContactView props={props} contacts={this.state.contacts} deleteContact={this.deleteContact}/>
            )}/>
            </Switch>
        </div>
      )
  }
}


ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
    document.getElementById('root')
    );

