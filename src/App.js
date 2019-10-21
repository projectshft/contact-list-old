import React, { Component } from 'react';
import AddContact from './components/AddContact';
import Contacts from './components/Contacts';
import ContactDetail from './components/ContactDetail';

//import ReactDom to use broswer router
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//generate contact id
const generateId = () => Math.round(Math.random() * 100000000);

class App extends Component {
  state = {
    contacts: [
      {
          id: generateId(),
          name: 'kipp',
          image_url: 'https://i.redd.it/zae0nw8s28921.jpg',
          email: 'kipp@no.com',
          phone_number: '666-666-6666'
      },
      {
          id: generateId(),
          name: 'sir wallflower',
          image_url: 'https://i.pinimg.com/originals/e7/a9/3d/e7a93d23a19f69761f6f883d3aa7070d.jpg',
          email: 'sadflower@ohno.com',
          phone_number: '222-222-2222'
      },
      {
          id: generateId(),
          name: 'debra',
          image_url: 'https://ih1.redbubble.net/image.471232809.2634/poster,840x830,f8f8f8-pad,750x1000,f8f8f8.u2.jpg',
          email: 'yes@acat.com',
          phone_number: '888-888-8888'
      }
    ]
  }

  addContact = (name, phone_number, email, image_url) => {
    //each time a new contact is created, a unique id should be generated for them
    const newContact = {
      id: generateId(),
      name,
      phone_number,
      email,
      image_url
    }

    //set state and push new contact to duplicated state array using spread operator
    this.setState({ contacts:
      [...this.state.contacts, newContact]})
  }
  //use Switch to ensure only one route renders at a time
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <h1>Contacts</h1>
            {/* each contact on the main route should be clickable; when clicked, leads to a new route */}
            <Switch>
              <Route exact path={["/contacts", "/"]} render= {() => <Contacts contacts={this.state.contacts} /> } />
              <Route path="/contacts/new" render={props => <AddContact addContact={this.addContact} /> }/>
              <Route path="/contacts/:contactId" render={routerProps => <ContactDetail routerProps={routerProps} contacts={this.state.contacts} />} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
