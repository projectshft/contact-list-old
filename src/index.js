import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom'
// import App from './App'
// import Index from './routes/Index'
import HomePage from './components/HomePage'
import ContactInfo from './components/ContactInfo'


ReactDOM.render(
  <BrowserRouter >
    <Switch>
      <Route exact path="/" render={(props)=> <HomePage {...props} />} />
      <Route path="/contacts/:id" render={(props)=> <ContactInfo {...props} />} />
      <Route path="/contacts" render={(props)=> <HomePage {...props} />} />
    </Switch>
  </BrowserRouter>, document.getElementById('root'));