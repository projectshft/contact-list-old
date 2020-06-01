import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import ContactList from './components/contact-list'
import Contact from './components/contact-single'
import New from './components/new'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor() {
    // inherit Component constructor with super()
    super();

    this.state = {
      contacts: [
        {name: 'Harry Potter', image:'https://www.irishtimes.com/polopoly_fs/1.3170107.1501253408!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg', email: 'hpotter@hogwarts.edu', phone: 3177501456, key: 14523},
        {name: 'Ron Weasley', image:'https://i.insider.com/568d4264dd0895a83d8b45eb?width=1048&format=jpeg', email: 'rweasley@hogwarts.edu', phone: 5728199503, key: 14524},
        {name: 'Hermione Granger', image:'https://www.nypl.org/sites/default/files/hermione.jpg', email: 'hgranger@hogwarts.edu', phone: 5028375829, key: 14525}
      ]
    }
    // bind this to its context
    this.addContact = this.addContact.bind(this)
  }

  addContact(object) {
    // concatenate object array with state object array
    const contacts = this.state.contacts.concat([object])
    this.setState({contacts: contacts}, () => {console.log(this.state.contacts)});
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' render={() => <ContactList contacts={this.state.contacts} />}/>
          <Route exact path='/contacts' render={() => <ContactList contacts={this.state.contacts} />}/>
          <Route path='/contacts/new' render={() => <New addContact={this.addContact}/>}/>
          <Route path='/contacts/:key' render={() => <Contact contacts={this.state.contacts} />} />
        </Switch>
      </main>
    );
  }
}

export default App;
