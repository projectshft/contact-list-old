import { Switch, Route } from 'react-router-dom'
import React from 'react'
import List from './List'


class App extends React.Component {
  constructor () {
    super()

    this.state = {
      contacts: [
        {id:1, name:'Hannah Cline', email:'hannah@gmail.com', phone:4126451960, imageURL:'https://avatarfiles.alphacoders.com/151/151295.jpg'},
        {id:2, name:'Zack Cline', email:'zack@gmail.com', phone:4126451958, imageURL:'https://avatarfiles.alphacoders.com/126/126281.png'}
      ],
    
    }

    this.addContact = this.addContact.bind(this);
    this.editContact = this.editContact.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])});
  }

  editContact(id, edit) {
    var index = this.state.contacts.findIndex(c=> c.id === id);
      this.setState({
        contacts: [
            ...this.state.contacts.slice(0,index),
           Object.assign({}, this.state.contacts[index], edit),
            ...this.state.contacts.slice(index+1)
        ]
      });
   }
  deleteContact(e){
      let filteredArray = this.state.contacts.filter(c => c.id !== e)
      this.setState({contacts: filteredArray});
  }


  

  render() {
    return (
      <div className='contacts'>
        <Switch>
          <Route exacr path='/' render={() => (
            <List addContact={this.addContact} contacts={this.state.contacts} editContact={this.editContact} deleteContact={this.deleteContact} />
          )}/>
        </Switch>
      </div>

    )
  }
}

export default App
