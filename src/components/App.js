import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Contacts from './Contacts';

// App
class App extends React.Component {
  constructor () {
    super()

    // State comes with pre-loaded contacts and an addContact function
    this.state = {
      contacts: [
        {
          id: 70219574,
          name: 'Albert Einstein',
          image_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Einstein_tongue.jpg/220px-Einstein_tongue.jpg',
          email: 'albert@einstein.me',
          phone_number: '19625897078'
        },
        {
          id: 234509875,
          name: 'John Flansburgh',
          image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTX4n9TtWuV2cmUTpEOYJXGoFOKcij_DmndUlrjxt_RaaivFm_v&usqp=CAU',
          email: 'john.flansburgh@tmbg.net',
          phone_number: '14235079991'
        },
        {
          id: 46584567764,
          name: 'Merry Clayton',
          image_url: 'https://hys2d3ayt6x6b7ts22ypg68p-wpengine.netdna-ssl.com/wp-content/uploads/2013/07/Merry-Clatyon-Photo-Courtesy-of-C-Lou-Adler-Ode-Sounds-Visuals.jpg',
          email: 'merry.clayton@outlook.com',
          phone_number: '14367890324'
        }
      ]
    }

    this.addContact = this.addContact.bind(this);
  }

  // This function modifies state by concatenation, preserving earlier state
  addContact (contact) {
        this.setState({contacts: this.state.contacts.concat([contact])});
  }

  // Render returns two routes, both leading to the identical router Contacts
  // App's state and addContact function are passed in as props
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={() => (
            <Contacts addContact={this.addContact} contacts={this.state.contacts} />
          )} /> />
          <Route path='/contacts' render={() => (
            <Contacts addContact={this.addContact} contacts={this.state.contacts} />
          )} />
        </Switch>
      </div>
    )
  }
}

export default App
