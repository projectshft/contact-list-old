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
  this.renderContactView = this.renderContactView.bind(this)
  }


  updateContact = (updatedContact) => {
    //first, use ID to find the contact to be updated in our state array
    let contact = this.state.contacts.find((contact) => {return contact.id = updatedContact.id});
    //then set those contact's details to the updated details
    this.setState({contact: updatedContact})
  }

  addContact = (contact) => {
    console.log(contact)
    this.setState({
      contacts: this.state.contacts.concat([contact])
    })
  }

  // Helper function to render '/:id' and '/add' paths. Since same render function is used in multiple Route statements, I'm adding it to the class declaration to keep it DRY.
  renderContactView = (props) => {

  // Use spread operator to pass Router's match props to component page. The match props allow the component page to access its own id, which will be used to determine which contact to show.
    return <ContactView contacts={this.state.contacts} updateContact={this.updateContact} {...props} />
    }

  render () {
    return (
      <Switch>
        {/* render functions inside Route tags pass props to components */}
        <Route exact path='/' render = {() => <ContactList contacts={this.state.contacts} handleEdit={this.handleEdit} />}/>


        <Route path='/:id' render = {(props) => {<ContactView contacts={this.state.contacts} updateContact={this.updateContact} {...props} />}} />

        {/* <Route path='/:id' render = {() => <ContactView contacts={this.state.contacts} updateContact={this.updateContact}/>} /> */}



        {/* The add page is almost identical to the '/:id' pages, so the render */}
        <Route path='/:add' render = {(props) => {this.renderContactView(props)}} />
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
