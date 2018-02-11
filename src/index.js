import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { onUpdate, forceUpdate, queryState, sendEvent } from './state'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/jquery/dist/jquery.slim.min.js'
import '../node_modules/popper.js/dist/umd/popper.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './index.css'
import ContactList from './components/contact_list'
import ContactsView from './components/contacts_view'

class App extends Component {

  constructor (props) {
    super(props)
  }

  showContactsList () {
    sendEvent('updateShowContacts', 'viewContacts')
  }

  addNewContactButton () {
    return (
      <Link className='btn btn-outline-primary ml-3' to='/contacts'>{this.props.currentHeaderButtonText}</Link>
    )
  }

  navigateBackButton () {
    return (
      <Link className='btn btn-outline-primary ml-3' to='/contacts' onClick={this.showContactsList}>Back</Link>
    )
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='text-center mt-5'>{this.props.showContacts ? this.props.currentHeaderText : this.props.currentContact.name } {this.props.showContacts ? this.addNewContactButton() : this.navigateBackButton() }</h1>
          </div>
        </div>
        <main>
          <Switch>
            <Redirect exact from='/' to='/contacts' />
            <Route
              path='/contacts'
              render={ () => (
                <ContactsView currentContact={this.props.currentContact} contacts={this.props.contacts} />
              )}
            />
          </Switch>
        </main>
        <footer className='navbar footer fixed-bottom footer-light content container-fluid'>
          <span className='text-muted mx-auto'><small>Coded with	&hearts; by Austin Stevens for <a href='https://projectshift.io' alt='Project Shift'>Project Shift</a></small></span>
        </footer>
      </div>
    )
  }
}

onUpdate((state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App {...state} />
    </BrowserRouter>,
    document.getElementById('root')
  )
})

forceUpdate()
