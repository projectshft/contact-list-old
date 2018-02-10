import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './index.css';
import ContactView from './contact-view';
import ContactList from './contact-list';
import AddContact from './add-contact'
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
        {id: 0, name: 'bart', email: 'hi@bart.com'},
        {id: 1, name: 'bat', email: 'notBart@bats.com'},
      ]
    }
  console.log('appState: ', this.state)

  this.addContact = this.addContact.bind(this)
  }


  handleEdit = (id) => {
  }

  addContact = (contact) => {
    this.setState({
      contacts: this.state.contacts.concat([contact])
    })
    this.forceUpdate( () => { console.log(this.state)} );
    //check - is it not rendering yet but just queued?
  }




  render () {
    return (
      <Switch>
        <Route exact path='/' render = {() => <ContactList contacts={this.state.contacts} handleEdit={this.handleEdit} />}/>
        <Route path='/add'
          render =
          {() =>  <AddContact component={AddContact} contacts={this.state.contacts} addContact={this.addContact} /> }
        />
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
Merge add and update contacts
Handle duplicate contacts
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
