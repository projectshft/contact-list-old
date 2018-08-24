import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './Home';
import NewContactForm from './new_contact_form';
import ContactsList from './contacts_list';

//App is a component --> has all functionality of React components and we are extending it here
class App extends Component {

  //the constructor defines the initial state of the component each time it is rendered
  constructor () {

    //super lets an object be stateful
    super()

    //in each newly created instance of App component, extend the component functionality by adding contacts property with an empty array as the value
    //hard-coding some data for testing purposes
    this.state = {
      contacts: [
        {
          "id": 70219577,
          "name": "Albert Einstein",
          "image_url":  "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
          "email": "aeinstein@example.com",
          "phone_number": "15555555555"
        },

        {
          "id": 70219578,
          "name": "Miles Davis",
          "image_url":  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Miles_Davis_by_Palumbo.jpg/440px-Miles_Davis_by_Palumbo.jpg",
          "email": "mdavis@example.com",
          "phone_number": "15555555556"
        },

        {
          "id": 70219579,
          "name": "Sarah Silverman",
          "image_url":  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Sarah_Silverman_DNC_July_2016.jpg/440px-Sarah_Silverman_DNC_July_2016.jpg",
          "email": "ssilverman@example.com",
          "phone_number": "15555555557"
        }
      ]
    }

    // we set the value of addContact equal to the result of calling bind on add contact and bind refers to App -->  results in making addContact's context App whenever it is called

    this.addContact = this.addContact.bind(this)
    }

    //addContact is a function that takes is existing posts and adds them to the posts array each time a new instance of App component is rendered (see notes in render portion of App.js and in post-form.js to learn how the addPost function accesses the post input)

    addContact (contact) {
      this.setState({contacts: this.state.contacts.concat([contact])});
    }

  render() {

    // so that the posts are rendered/accessed in the stateful part of the app, below jsx will essentially tell each instance of the App to recieve the portion of postForm that is set to pass props to the app.js addPost function (see addPost function above in app.js and post-form.js click-handler for more information)
    return (
      <div>
        <Switch>
            <Route exact path='/' component={Home}/>
        </Switch>

        <Route path='/new_contact' render={() => (
          <NewContactForm addContact={this.addContact} />
        )}/>
        
        <ContactsList contacts={this.state.contacts} />

      </div>

    )
  }
}

export default App;
