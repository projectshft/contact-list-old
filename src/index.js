import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import NewContact from './components/New-Contact'
import ContactList from './components/Contact-List'

class App extends Component {
    constructor() {
		super()

		this.state = {
			contacts: []
		}
		this.addContact = this.addContact.bind(this);
	}

	addContact (contact) {
        // debugger;
        this.setState({contacts: this.state.contacts.concat([contact])});
    }
    
      render() {
        console.log(this.state.contacts)
          return (
        <div>
            <Switch>
            <Route exact path='/' render={() => (
                <ContactList contacts={this.state.contacts} />
            )}/>
            <Route exact path='/new' render={() => (
            <NewContact addContact={this.addContact} contacts={this.state.contacts}/>
            )}/>
            {/* <Route path='/contacts/:number' component={ContactView}/> */}
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

