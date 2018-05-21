import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import Logo from '../contacts-book-img.jpg'
import Contacts from './contacts';
import Contact from './contact';
import AddContact from './addContact';
import EditContact from './editContact';
import '../App.css';

//Have App render the Header and Main.
class App extends Component {

  render() {
    return (

      <div>
      <Header/>
      <Main />
      </div>
    );
  }
}

//The Header contains the logo (which is used as a HOME button)
const Header = () => (
  <div>
    <header className="App-header">
      <div className = "row">
    <Link to={`/`}>
      <img src={Logo} className="App-logo pl-2" alt="logo" />
    </Link>
    <div className="text-center">
      <h2 className ="text-white"> Contacts Project</h2>
      <h3 className ="text-white"> by Hew </h3>
    </div>
      </div>
    </header>
  </div>

)
//The main routes which component is rendered
const Main = () => (
    <Switch>
      <Route exact path='/' component={Contacts}/>
      <Route exact path='/:number/edit' component={EditContact}/>
      <Route exact path='/addContact' component={AddContact}/>
      <Route path='/:number' component={Contact}/>
    </Switch>
)

export default App
