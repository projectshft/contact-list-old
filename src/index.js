import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import NewContact from './components/New-Contact'
import ContactList from './components/Contact-List'

class App extends React.Component {
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
            {/* <Route exact path='/' component={ContactList}/> */}
            <Route exact path='/' render={() => (
                <ContactList contacts={this.state.contacts} />
            )}/>
            <Route exact path='/new' render={() => (
            <NewContact addContact={this.addContact} contacts={this.state.contacts}/>
            )}/>
            {/* <Route exact path='/new' component={NewContact}/> */}
            {/* <Route exact path='/:id' component={Contact-View}/> */}
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

