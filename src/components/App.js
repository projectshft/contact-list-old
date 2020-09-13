// app component that will centralize all its children components
import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Home from './Home'
import NewContact from './NewContact'
import Contact from './Contact'
import FirstView from './FirstView'



class App extends React.Component {
  constructor () {
    super ()

    this.state = {
      contacts: [
        {
          id: 70219577,
          name: "Albert Einstein",
          image_url: "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
          email: "aeinstein@example.com",
          phone_number: 15555555555
        },
        {
          id: 70219576,
          name: "Nikola Tesla",
          image_url: "",
          email: "ntesla@example.com",
          phone_number: 13333333333
        },
        {
          id: 70219575,
          name: "George Washington Carver",
          image_url: "",
          email: "gwcarver@example.com",
          phone_number: 12222222222
        }

      ]
    }

    this.addContact = this.addContact.bind(this);
  }
  // create a function that will take the inputs from the new contact form and add the valueses to the contact list
  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])});
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path ='/' 
            render={() => (
              <FirstView addContact={this.addContact} contacts={this.state.contacts} />
            )}/> 
          <Route exact path ='/contacts' 
          render={() => (
            <Home addContact={this.addContact} contacts={this.state.contacts} />
          )}/> 
          <Route path="/contacts/new" 
          render={() => (
            <NewContact addContact={this.addContact} contacts={this.state.contacts} />
          )}/>
           <Route path='/contacts/:id' render={(routerProps) => (
            <Contact id={parseInt(routerProps.match.params.id, 10)} contacts={this.state.contacts} />
        )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
