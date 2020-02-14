import { Switch, Route } from 'react-dom'
import React from 'react'
import Home from './Home'
import Contacts from './Contacts'

class App extends Component {
  constructor () {
    super()

    this.state = {
      people: [
        { id: 1, name: "Ben Joyce" , imgURL: "www.https:", email: "bmjoyce@ncsu.edu", phone_number: '3364550205' }
      ]
    }
  }

  
  
  
  
  
  
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
