import { Switch, Route } from 'react-router-dom'
import React from 'react';
import Contact from './Contact'

//import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      contacts: [
        { name: "Made up", 
          phoneNumber: "812-456-6789", 
          email: "madeup@gmail.com" 
        },
        { name: "Made up2", 
        phoneNumber: "812-456-6789", 
        email: "madeup@gmail.com" 
        },
        { name: "Made up3", 
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
          <Route exact path="/" component={Contact} />
          <Route exact path="/contacts" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
