import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './components/home';
import ContactsList from './components/contactsList'
import uuid from 'uuid/v4'



class App extends React.Component {
  constructor () {
    super()

    this.state = {
    contacts: [
      { id: uuid(), name: "Rachel", image_url: "", email:'rfischoff@gmail.com', phone:'919.225.655'},
      { id: uuid(), name: "Katy", image_url: "", email:'katygrahamm@gmail.com', phone:'858.218.4605' },
      { id: uuid(), name: "Paul", image_url: "", email:'paulwwstrom@gmail.com', phone:'214.642.1596' }
    ]
  }

    this.addContact = this.addContact.bind(this);
    this.updateContact = this.updateContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
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

  deleteContact (contactId) {

    console.log('i click!');
      // const filteredArray = this.state.contacts.filter(item => item !== e.target.value)
      //  this.setState({contacts: filteredArray});

    const items = this.state.contacts.filter(item => item.id !== contactId);
    this.setState({ contacts: items });
         }


  render() {

    return (
      <div>
        <Switch>
            <Route exact path = '/' component={Home}/>
            <Route path = '/contacts' render={() => (
              <ContactsList contacts={this.state.contacts} updateContact={this.updateContact} addContact={this.addContact} deleteContact={this.deleteContact} />
            )}/>

          </Switch>
        </div>

    )
  }
}

export default App

// size: PropTypes.oneOfType([
//   PropTypes.string,
//   PropTypes.number
// ]),
