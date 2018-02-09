import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './index.css';
import ContactView from './contact-view';
import ContactList from './contact-list';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// const App = () => {
//   (
//     <Switch>
//       <Route exact path='/' component={ContactList}/>
//       <Route path='/:id' component={ContactView}/>
//     </Switch>
//   )
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {name: 'bart', email: 'hi@bart.com'},
        {name: 'bat', email: 'notBart@bats.com'},
      ]
    }
  this.updateContact = this.updateContact.bind(this)
  }

  handleEdit = (id) => {
  }

  updateContact = (contact) => {
    this.setState({
      contacts: this.state.contacts.concat([contact])
    })
  }

  render () {
    return (
      <Switch>
        <Route exact path='/' render = {() => <ContactList contacts={this.state.contacts} handleEdit={this.handleEdit} />}/>
        <Route path='/:id' render = {() => <ContactView contacts={this.state.contacts} updateContact={this.updateContact}/>} />
      </Switch>

    )
  }
}

/*WISHLIST
Prettier styling on contact view
Add default props
When updating imageURL, do something nicer than broken image. Maybe don't have that one update on every change? (be sure to deal with submit function)
Page Headers for contact list and contact view
*/

// //set App with routes
// const Main = () => {
//   <main>
//     <Switch>
//       <Route exact path='/' component={Main}/>
//       <Route path='/:id' component={ContactView}/>
//     </Switch>
//   </main>
// }

//set routes


const root = document.getElementById('root');

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>,
  root
);
