import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import EditContact from './edit-contact'
import ContactView from './contact-view'
import Header from './header'
import ContactList from './contact-list'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      contacts: [],
      selectedContact: null
    }
  }

  const Main = ({match}) => (
    <Main>
      <Fade>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={ContactList}/>
          <Route path='/edit' component={EditContact}/>
        </Switch>
      </Fade>
    </Main>
  )

  const Home = () => (
    <div>
      <Header />
      <h1>Contacts List</h1>
      <ContactList />
    </div>
  )

  const ContactListRoute = () => (
    <div>
      <Header />
      <Switch>
        <Route exact path='/list' component={ContactList}/>
        <Route path='/list/:number' component={ContactView}/>
      </Switch>
    </div>
    )


  render(){
    return (
      <div>
        <Main />
        <ContactList contacts={this.state.contacts} />
      </div>
    )
  }
}

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))

export default App;
