import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/home';
import ContactList from './components/contactList'


class App extends React.Component {
  constructor () {
    super()
    const generateId = () => Math.round(Math.random() * 100000000);
    this.state = {
    contacts: [
      { id: generateId(), name: "Rachel", image_url: "", email:'rfischoff@gmail.com', phone:'919.225.655'},
      { id: generateId(), name: "Katy", image_url: "", email:'katygrahamm@gmail.com', phone:'858.218.4605' },
      { id: generateId(), name: "Hannah", image_url: "", email:'', phone:'' }
    ]
  }

    this.addContact = this.addContact.bind(this);
    this.updateContact = this.updateContact.bind(this);
  }

  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])});
  }

  updateContact (contact) {
    const newContacts = this.state.contacts.map((c) => {
      if (contact.id === c.id) {
        c = contact;
      }

      return c;
    });

    this.setState({contacts: newContacts});
  }

  render() {

    return (
      <div>
        <Switch>
            <Route exact path = '/' component={Home}/>
            <Route path = '/contacts' render={() => (
              <ContactList contacts={this.state.contacts} updateContact={this.updateContact} addContact={this.addContact} />
            )}/>
            {/*<Route path="404" component={NotFound} />*/}
            {/*<Route path="*" component={NotFound} />*/}
          </Switch>
        </div>

    )
  }
}

export default App
