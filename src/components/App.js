import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Contact from './Contact'

//import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      contacts: [
        { id: 1,
          name: "Made up", 
          phoneNumber: "812-456-6789", 
          email: "madeup@gmail.com" 
        },
        { id: 2,
          name: "Made up2", 
        phoneNumber: "812-456-6789", 
        email: "madeup@gmail.com" 
        },
        { id: 3,
          name: "Made up3", 
        phoneNumber: "812-456-6789", 
        email: "madeup@gmail.com" 
        },
      ]
    }
  }

  
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={() => (
            <Contact contacts={this.state.contacts} />
          )}/>
          <Route path='/contacts' render={() => (
            <Contact contacts={this.state.contacts} />
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;
