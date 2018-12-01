import React, {Component} from "react";
import { Switch, Route, Link } from "react-router-dom";
import ContactList from "./components/contact-list";
import Info from "./components/info";

// const keyGen = () => Math.round(Math.random() * 100000000);

class App extends Component {
  

constructor(){
  super()

  this.state = {
    contacts: [
      {firstName: "Diego", lastName: "Lee", email: 'diégo.lee@example.com', phone: '(349)-329-9253', 
      imgUrl: "https://randomuser.me/api/portraits/men/40.jpg", key: Math.round(Math.random() * 100000000) },

      {firstName: "Sarah", lastName: "Connor", email: 'ThymeTraveler@t1000.com', phone: '(102)-619-1984', 
      imgUrl: "https://randomuser.me/api/portraits/women/58.jpg", key: Math.round(Math.random() * 100000000) },

      {firstName: "Chris P", lastName: "Bacon", email: 'whatsCookin@goodLookin.com', phone: '(555)-552-2266', 
      imgUrl: "https://randomuser.me/api/portraits/men/32.jpg", key: Math.round(Math.random() * 100000000) },

      {firstName: "Sally", lastName: "Sugar", email: 'ThymeTraveler@t1000.com', phone: '(102)-619-1984', 
      imgUrl: "https://randomuser.me/api/portraits/women/22.jpg", key: Math.round(Math.random() * 100000000) },

      {firstName: "Sarah", lastName: "", email: 'ThymeTraveler@t1000.com', phone: '(102)-619-1984', 
      imgUrl: "https://randomuser.me/api/portraits/women/52.jpg", key: Math.round(Math.random() * 100000000) },
      {firstName: "James", lastName: "Bond", email: 'whatsCookin@goodLookin.com', phone: '(555)-552-2266', 
      imgUrl: "https://randomuser.me/api/portraits/men/4.jpg", key: Math.round(Math.random() * 100000000) },


    ],
    
  };
  this.addContact = this.addContact.bind(this)

  }
    addContact(contactInfo) {
    this.setState({ contacts: this.state.contacts.concat([contactInfo]) })
}

 
 
  render() {
    const {contacts} = this.state;
    return <div className="container">
      
      <Switch>
        <Route exact path='/contacts' render={() => <ContactList contacts={this.state.contacts} addContact={this.addContact} />} />
        <Route path='/contacts/:id' render={(props) => <Info getPersonById={this.getPersonById} {...props} contacts={contacts} />} />

      </Switch>
      
      </div>;
  }
}

export default App
//Just holding onti the code for later

//        <Route path='/contacts/:key' render={() => <Info contacts={this.state.contacts} />} />

      // <List contacts={this.state.contacts} /> 
