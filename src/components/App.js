import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import NewContactForm from './new_contact_form';
import _ from 'lodash';
import UpdateContactForm from './update_contact_form'
import ContactsList from './contacts_list'
import SingleContact from './contact';






//App is a component --> has all functionality of React components and we are extending it here
class App extends Component {

  //the constructor defines the initial state of the component each time it is rendered
  constructor() {

    //super lets an object be stateful
    super()

    //in each newly created instance of App component, extend the component functionality by adding contacts property with an empty array as the value
    //hard-coding some data for testing purposes
    this.state = {
      contacts: [{
          "id": 70219577,
          "name": "Albert Einstein",
          "image_url": "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
          "email": "aeinstein@example.com",
          "phone_number": "15555555555",
          "deleted": false
        },

        {
          "id": 70219578,
          "name": "Miles Davis",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Miles_Davis_by_Palumbo.jpg/440px-Miles_Davis_by_Palumbo.jpg",
          "email": "mdavis@example.com",
          "phone_number": "15555555556",
          "deleted": false
        },

        {
          "id": 70219579,
          "name": "Sarah Silverman",
          "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Sarah_Silverman_DNC_July_2016.jpg/440px-Sarah_Silverman_DNC_July_2016.jpg",
          "email": "ssilverman@example.com",
          "phone_number": "15555555557",
          "deleted": false
        }
      ],
      all: function() { return this.contacts},
      get: function(id) {
        const isContact = c => c.id === id;
        return this.contacts.find(isContact)
      }
    }

    // set the value of addContact equal to the result of calling bind on add contact and bind refers to App -->  results in making addContact's context App whenever it is called

    this.addContact = this.addContact.bind(this)
    this.deleteContact = this.deleteContact.bind(this)

  }

  //re-render contacts array each time a new instance of App component is rendered (props for this are passed from new_contact_form)
  addContact(contact) {
    this.setState({
      contacts: this.state.contacts.concat([contact])
    });
  }

//create a new contacts array and set it to this.state with the id filtered out
  deleteContact(id) {
    console.log('delete contact function was invoked')
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id)
    })

  };


  editContact(id) {
    console.log('edit contact function was invoked')
    //edit contact function will be passed to the updateContactForm
  };


  /* ============== Return: ==================
  -route components path='/contacts' displays a list of contacts
  ====================================================== */

  render(){
    return (
      <div className="main-App">

        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul >
              <li className="nav-item"><Link to='/'>Contacts</Link></li>
              <li className="nav-item"><Link to='/new_contact'>Add Contacts</Link></li>
            </ul>
          </nav>
        </header>

        <main>
        <Switch>

            <Route path='/contacts/new' render={(props) => (
              <NewContactForm props={props} contacts={this.state.contacts} addContact={this.addContact} />
            )}/>

            <Route path='/contacts/:id/edit' render={(props) =>(
              <UpdateContactForm props={props} editContact={this.editContact}
              />
            )}/>

            <Route path='/contacts/:id' render={(props) =>(
              <SingleContact props={props} contacts={this.state.contacts}
              deleteContact={this.deleteContact} addContact={this.addContact}
              editContact={this.editContact}
              />
            )}/>


            <Route exact path='/' render={(props) => (
              <ContactsList contacts={this.state.contacts}
              deleteContact={this.deleteContact}/>
            )}/>

      </Switch>
      </main>
    </div>
    )
    }
}
export default App;
