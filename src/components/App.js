import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './Home';
import NewContactForm from './new_contact_form';
import ContactsList from './contacts_list';

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
      ]
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

  deleteContact(index) {
    const contacts = Object.assign([], this.state.contacts);
    this.state.contacts.splice(index, 1);
    this.setState({
      contacts: this.state.contacts
    });

  }

  /* ============== Return: ==================
  -give new_contact_form access to the addContent function so the form can 'fill in' that function with necessary properties
  -give ContactsList access to the current state of conacts array so that the list can access necessary properties when the state needs to re-render
  --give contactsList access to the deleteContent function so the form can 'fill in' that function with necessary properties and invoke interval
  -route components path='/' displays a list of contacts
  ====================================================== */
  render() {
    return (
      <div>
        <Switch>
            <Route exact path='/' component={Home}/>
        </Switch>

        <Route path='/new_contact' render={() => (
          <NewContactForm addContact={this.addContact} />
        )}/>

        <ContactsList
        contacts={this.state.contacts} deleteContact={this.deleteContact}/>
      </div>

    )
  }
}

export default App;
