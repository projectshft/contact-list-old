import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import ListAll from './ListAll'
import AddContact from './AddContact'

class App extends Component {
  constructor () {
    super();

    this.state = {
      contacts: [
        {
        "key": 70219577,
        "name": "Albert Einstein",
        "image_url": "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
        "email": "aeinstein@example.com",
        "phone_number": "15555555555"
        },
        {
       "key": 745689488,
       "name": "Neils Bohr",
       "image_url": "http://scihi.org/wp-content/uploads/2019/10/Niels_Bohr.jpg",
       "email": "bohr_n@example.com",
       "phone_number": "15551235555"
     },
        {
       "key": 215856254,
       "name": "Ryan Gosling",
       "image_url": "https://images.squarespace-cdn.com/content/v1/5330664de4b0c8441aea50d8/1447360884466-K7Z81VSCRD94LDARHL5V/ke17ZwdGBToddI8pDm48kIBYwL2gfjkuDM9ElJqjMeJZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw39SRFH7cZwRLAEdpZ_iLZN9tRJH6LUQfzxqckA9e31aHfMUHTKgG7XCAW3iRQW3w/hey+girl?format=1000w",
       "email": "babygoose@example.com",
       "phone_number": "15556661212"
     }
      ]
    }

    // this.handleAddContactClick = this.handleAddContactClick.bind(this);
    this.addContact = this.addContact.bind(this); // will be sent to AddContact via props
  }

  // handleAddContactClick () {
  // //   //route to AddContact component
  //   console.log('AddContactClick');
   
  // }

  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])});
  }

  //TODO redirect / to /contacts? confused by this
  render() {
    return (
      <div>
        <Switch> 
        <Route exact path='/' render={() => (
            <Redirect to="/contacts" />
          )}/>
          <Route exact path='/contacts' render={(routerProps) => (
            <ListAll history={routerProps.history} addContact={this.addContact} contacts={this.state.contacts} />
          )}/>
          <Route path='/new' render={(routerProps) => (
            <AddContact history={routerProps.history} addContact={this.addContact} contacts={this.state.contacts} />
          )}/>
        </Switch>
      </div>

    );
  }
}

//TODO add PropTypes
// send contacts to ListAll and addContact 
export default App;
