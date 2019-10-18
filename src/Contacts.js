import { Switch, Route, Redirect } from 'react-router-dom'
import React from 'react';
import Contact from './Contact';
import ContactNew from './ContactNew';
import FullContactList from './FullContactList';

class Contacts extends React.Component {

  constructor() {
    super();

    this.state = {
      redirect: false
    }

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.toggleRedirect = this.toggleRedirect.bind(this);
  }

  handleButtonClick = () => {
    this.setState(() => ({
      redirect: true
    }))
  }

  toggleRedirect = () => {
    this.setState(() => ({
      redirect: false
    }))
  }

  render() {
    return (
      <Switch>
        <Route path='/contacts/new' render={(props) => (
          <ContactNew props={props} contacts={this.props.contacts} addContact={this.props.addContact} toggleRedirect={this.toggleRedirect}/>
        )} />

        <Route path='/contacts/:id' render={(props) => (

          <Contact props={props} contacts={this.props.contacts} />

        )} />

        <Route path='/contacts' render={() => {
         if (this.state.redirect) {
           return <Redirect to='/contacts/new' />
         }
         return (
          <div>
            <span>
              
              <h1>Contacts</h1>

              <button id="add-contact-button" className="btn btn-primary" onClick={this.handleButtonClick} >Add Contact</button>
            </span>

            <FullContactList contacts={this.props.contacts} />
          </div>
          )
        } }/>
      </Switch>
    )
  }
}

export default Contacts

// {this.renderRedirect()}
