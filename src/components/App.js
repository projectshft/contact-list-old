// app component that will centralize all its children components
import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Home from './Home'
import NewContact from './NewContact'



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
          <Route exact path ='/contacts' component={Home}/>
          <Route path="/contacts/new" component={NewContact}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
