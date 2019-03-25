import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SubmitContact from './SubmitContact';
import ContactItem from './ContactItem';
import ContactList from './ContactList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          "id": "1",
          "name": "Dean Smith",
          "image_url": "",
          "phoneNumber": 3363174563,
          "email": "CoachSmith@unc.edu"
        },
        {
          "id": "2",
          "name": "Roy Williams",
          "image_url": "",
          "phoneNumber": 9305091719,
          "email": "CoachWilliams@unc.edu"
        }
      ]
    }
  }
newContact(contact){
  this.setState({contacts: this.state.contacts.concat([contact])}, ()=>{
    console.log("contacts added", this.state.contacts)
  });
}

render() {
   return (
     <BrowserRouter>
       <Switch>
         <Route exact path='/' render={() => (
           <ContactList contacts={this.state.contacts} />
         )} />
         <Route path='/new' render={(props) => (
           <SubmitContact newContact={this.newContact} contacts={this.state.contacts} {...props} />
         )} />

         <Route path='/contact/:id' render={(props) => (
           <ContactItem contacts={this.state.contacts}  {...props}/>
         )} />


       </Switch>
     </BrowserRouter>
   )
 };

};


export default App;
