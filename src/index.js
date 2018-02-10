import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './index.css';
import ContactView from './contact-view';
import ContactList from './contact-list';
import AddContact from './add-contact'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        {id: 0, name: 'bart', email: 'hi@bart.com'},
        {id: 1, name: 'bat', email: 'notBart@bats.com'},
      ]
    }

  this.addContact = this.addContact.bind(this)
  }


  updateContact = (updatedContact) => {
    //first, use ID to find the contact to be updated in our state array
    let contact = this.state.contacts.find((contact) => {return contact.id = updatedContact.id});
    //then set those contact's details to the updated details
    this.setState({contact: updatedContact})
  }

  addContact = (contact) => {
    this.setState({
      contacts: this.state.contacts.concat([contact])
    })
  }





  render () {
    return (
      <Switch>
        {/* render functions inside Route tags pass props to components */}
        <Route exact path='/' render = {() => <ContactList contacts={this.state.contacts} handleEdit={this.handleEdit} />}/>

        {/* Use spread operator to pass Router's match props to component page. The match props allow the component page to access its own id, which will be used to determine which contact to show. */}
        <Route path='/:id' render = {(props) => <ContactView contacts={this.state.contacts} updateContact={this.updateContact} {...props} />} />


        {/* The add page is almost identical to the '/:id' pages, so the render */}
        <Route path='/:add' render = {(props) => <ContactView contacts={this.state.contacts} addContact={this.addContact} {...props} />} />
      </Switch>

    )
  }
}

/*WISHLIST
Prettier styling on contact view
Add default props
When updating imageURL, do something nicer than broken image. Maybe don't have that one update on every change? (be sure to deal with submit function) - use img onerror (see MDN) for broken link handling
Page Headers for contact list and contact view
Merge add and update contacts
Handle duplicate contacts
Nicer way to handle IsNew boolean in contactview (really only needs to be local state) - maybe dont pass it back to App?
VALIDATION
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
