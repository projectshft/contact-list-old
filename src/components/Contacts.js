import React from 'react';
import { Switch , Route } from 'react-router-dom'
import AddContact from './AddContact'
import ContactDetail from './ContactDetail'

class Contacts extends React.Component { //Working on building out Contacts as a ul
constructor(props) {
  super (props)

  this.handleNewContactClick = this.handleNewContactClick.bind(this)
}

handleNewContactClick () {
  this.props.history.push('/Contacts/New')
}

render() {
  return (
    <div>
    <h1>Contacts</h1>
    <button type="button" className="btn btn-primary" onClick={this.handleNewContactClick} >Add Contact</button>
    <ul className="list-group">
    {this.props.contacts.map(contact => {
      return <li key={contact.id}>{contact.name}</li>}
    )}
    </ul>
    </div>
  )
} 

}


export default Contacts;

  // <Switch>
  // <Route exact path='/Contacts/New' component={AddContact}/>
  // <Route exact path='/Contacts/70219577' component={ContactDetail}/>
  // </Switch>