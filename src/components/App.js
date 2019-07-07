//App holds state and routing
import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './Home'
import ContactList from './ContactList'
import ContactForm from './Contact_Form';
import ContactDetail from './ContactDetail';

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      //first two entries hard coded for demonstration and testing purposes
      contacts: [
      {
        id: 70219577,
        name: "Albert Einstein",
        image_url: "https://ichef.bbci.co.uk/news/660/media/images/82399000/jpg/_82399978_75952740.jpg",
        email: "aeinstein@example.com",
        phone_number: "15555555555"
          },

      {
        id: 70219578,
        name: "Kate Kremer",
        image_url: 'https://media.licdn.com/dms/image/C4E03AQEWkvvpCM8w3A/profile-displayphoto-shrink_200_200/0?e=1567641600&v=beta&t=36k0yDFHr4JdznLRKW-hWziUXvhBssl7vVJ1SczAU4U',
        email: "kkremer@example.com",
        phone_number: "15555555556"
          },
      ]
    }
  this.addContact = this.addContact.bind(this);
}
  //addContact function will be how state is passed from Contact Form
addContact(contact){
  this.setState({contacts: this.state.contacts.concat([contact])});
}
//switch to determine routing paths and what gets rendered
  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/contacts' render={() => (
            <ContactList contacts={this.state.contacts}/>
            )}/>
          <Route exact path='/contacts/new' render={(props) =>(
              <ContactForm props={props} addContact={this.addContact} contacts={this.state.contacts}/>
              )}/>
          <Route path='/contacts/:id' render={(props) =>(
              <ContactDetail props={props} contacts={this.state.contacts}/>
              )}/>
        </Switch>
      </div>
    )
  }
}

export default App
