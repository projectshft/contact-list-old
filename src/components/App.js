import { Switch, Route, Redirect } from 'react-router-dom'
import React from 'react';
import Header from './Header';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import NewContact from './NewContact'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

//generate a random ID number for all contacts
const generateId = () => Math.round(Math.random() * 100000000)

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        {
          id: 1,
          name: 'Felicia',
          email: 'byefelicia@gmail.com',
          phone: '222-222-2222',
          imgUrl: 'https://media.giphy.com/media/QyDJII5Hj5rYA/giphy.gif' 
        },
        {
          id: generateId(),
          name: 'Ovy Cado',
          email: 'imacado@yahoo.com',
          phone: '000-000-0000',
          imgUrl: 'https://media.giphy.com/media/13gvXfEVlxQjDO/giphy.gif' 
        },
        {
          id: generateId(),
          name: 'RBG',
          email: 'rbg@gmail.com',
          phone: '444-444-4444',
          imgUrl: 'https://www.lawcrossing.com/images/articleimages/Notorious-RBG-Big.jpg' 
        },
        {
          id: generateId(),
          name: "Hot Diggity Dog",
          email: 'dancindog@hotmal.com',
          phone: '555-555-555',
          imgUrl: 'https://media.giphy.com/media/3og0Izv3p7vMprq2Qw/giphy.gif' 
        },
        {
          id: generateId(),
          name: 'Barry Obama',
          email: 'b-bama@gmail.com',
          phone: '222-222-2222',
          imgUrl: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg' 
        },
        {
          id: generateId(),
          name: 'Taylor Swift',
          email: 'tswift@gmail.com',
          phone: '000-000-0000',
          imgUrl: 'https://pixel.nymag.com/imgs/daily/vulture/2018/07/06/06-taylor-swift-1.w330.h330.jpg' 
        },
        {
          id: generateId(),
          name: "It's Britney Bitch",
          email: 'hitmebabyonemoretime@gmail.com',
          phone: '555-555-555',
          imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/71c0cI9r2dL.png' 
        },
      ]
    }
    this.addContact = this.addContact.bind(this);
  }

  //update state to add new contact
  addContact(contact) {
    this.setState({contacts: this.state.contacts.concat([contact])})
  }

  render() {
    return (
      <div>
        <Header />

        {/* create a switch for contacts, contact details & create new contact */}

        <Switch>
          <Route exact path="/">
            <Redirect to="/contacts" />
          </Route>

          <Route path="/contacts" 
            render={() => 
            <ContactList contacts={this.state.contacts} />} 
          />

          <Route path="/contact/:contactId" render={(routerProps) => (
            <ContactDetails routerProps={routerProps} contacts={this.state.contacts} />
          )}/>

          <Route path="/new" render={() => 
            <NewContact addContact={this.addContact} contacts={this.state.contacts}
            />} 
          />
     
        </Switch>
      </div>
    );
  }
}

export default App;
