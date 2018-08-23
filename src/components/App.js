import React, { Component } from 'react';
import NewContactForm from './new_contact_form';
import ContactsList from './contacts_list';

//App is a component --> has all functionality of React components and we are extending it here
class App extends Component {

  //the constructor defines the initial state of the component each time it is rendered
  constructor () {

    //super lets an object be stateful
    super()

    //in each newly created instance of App component, extend the component functionality by adding contacts property with an empty array as the value
    this.state = {
      contacts: []
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
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="page-header">
            <h1>Contacts List</h1>
          </div>

          <div className="contacts">
          </div>

          <ContactsList contacts={this.state.contacts} />

          <NewContactForm addContact={this.addContact} />

        </div>
        </div>

      </div>
    );
  }
}

export default App;
