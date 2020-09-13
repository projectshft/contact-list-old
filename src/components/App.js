// app component that will centralize all its children components
import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Home from './Home'
import NewContact from './NewContact'
import Contact from './Contact'
import FirstView from './FirstView'
import 'bootstrap/dist/css/bootstrap.css'



class App extends React.Component {
  constructor () {
    super ()
// state that will contain list of contacts
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
        },
        {
          id: 70219574,
          name: "Alexander Graham Bell",
          image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Alexander_Graham_Bell_in_colors-1-.jpg/220px-Alexander_Graham_Bell_in_colors-1-.jpg",
          email: "agbell@example.com",
          phone_number: 18888888888
        },
        {
          id: 70219573,
          name: "Thomas Edison",
          image_url: "https://www.loc.gov/static/portals/disability-employment-awareness-month/images/profile-thomas-edison.jpg",
          email: "tedison@example.com",
          phone_number: 17777777777
        },
        {
          id: 70219572,
          name: "Charles Babbage",
          image_url: "https://thelifeofcharlesbabbage.weebly.com/uploads/1/3/8/9/13890900/180138957.jpg",
          email: "cbabbage@example.com",
          phone_number: 1666666666
        }

      ]
    }

    this.addContact = this.addContact.bind(this);
  }
  //function that will take the inputs from the new contact form and add the values to the contact list
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
