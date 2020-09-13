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
          image_url: "https://ericafinds.com/wp-content/uploads/2012/09/Screen-Shot-2012-09-03-at-8.45.06-PM.png",
          email: "aeinstein@example.com",
          phone_number: 15555555555
        },
        {
          id: 70219576,
          name: "Nikola Tesla",
          image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQ9PIywcpiJnxlbqIYFweVDULEWbqBGohS4w&usqp=CAU",
          email: "ntesla@example.com",
          phone_number: 13333333333
        },
        {
          id: 70219575,
          name: "George Washington Carver",
          image_url: "https://ipwatchdog.com/images/George_Washington_Carver_young.jpg",
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
              <FirstView contacts={this.state.contacts} />
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
