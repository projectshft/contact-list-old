import React, { Component } from "react";
import { Switch, Route, Link } from 'react-router-dom'
import '../node_modules/bootstrap'
import './App.css'

class App extends Component {
  constructor() {
    super();

    const $this = this
    this.state = {contacts: [
      { number: 1, name: "Albert Einstein",
      imageUrl: "http://www.deism.com/images/Einstein_laughing.jpeg",
      email: "Al@Einstein.com", phone: "555-555-1111" },
      { number: 2, name: "Joe Schmoe",
      imageUrl: "https://pbs.twimg.com/profile_images/72371547/joe.schmoe_400x400.jpg",
      email: "Joe@Schmoe.com", phone: "555-555-2222" },
      { number: 3, name: "Jack Slacker",
      imageUrl: "https://goodmenproject.com/wp-content/uploads/2011/02/slacker.jpg",
      email: "Jack@Slacker.com", phone: "555-555-3333" },
      { number: 4, name: "Willy Wonka",
      imageUrl: "https://i.pinimg.com/736x/24/f4/81/24f481d367f720c5abac3c030488e2f6--willy-wonka-gene.jpg",
      email: "William@Wonka.com", phone: "555-555-4444" },
      { number: 5, name: "Guy Random",
      imageUrl:"https://static1.fjcdn.com/comments/Heres+a+random+guy+_18bfb66ce6b020189f6b697fe36dc44a.jpg",
      email: "Random@guy.com", phone: "555-555-5555" },
      { number: 6, name: "Nikola Tesla",
      imageUrl: "https://www.thefamouspeople.com/profiles/images/nikola-tesla-2.jpg",
      email: "Nik@acpower.com", phone: "555-555-6666" }
    ],
      all: function() {return $this.state.contacts},
      get: function(id) {
        const person = p => p.number === id
        return $this.state.contacts.find(person)
      }
    }
    this.addContact = this.addContact.bind(this)
    this.editContact = this.editContact.bind(this)
    this.deleteContact = this.deleteContact.bind(this)
  }

  addContact (contact) {
    contact.number = this.state.contacts.length + 1
    this.setState({contacts: this.state.contacts.concat([contact])});
    console.log(this.state.contacts);
  }

  editContact (newData, contact) {
    const index = this.state.all().indexOf(this.state.get(contact))
    let newState = this.state.all()
    newState.splice(index, 1)
    newState.push(newData)
    this.setState({contacts: newState})
  }

  deleteContact (contact) {

    const index = this.state.all().indexOf(this.state.get(contact))
    let newState = this.state.all()
    //this works the first time but for some reason loops back through after the contact has been deleted and throws an error when
    if (this.state.get(contact)){
      let name = this.state.get(contact).name
      let acceptDelete = window.confirm("Are you sure you want to delete " + name + " ?")
      if (acceptDelete) {
        newState.splice(index, 1)
        this.setState({contacts: newState});
        return (
          <div>
            <h3>Contact deleted.</h3>
            <Link to='/contacts'>Back</Link>
          </div>
        )
      } else {
        return (
          <div>
            <h3>Cancelled</h3>
            <Link to='/contacts'>Back</Link>
          </div>
        )
      }
    }
  }


  render() {
    return (
      <div>
        <Main get={this.state.get} all={this.state.all} addContact={this.addContact} editContact={this.editContact} deleteContact={this.deleteContact}/>
      </div>
    )
  }
}

const Main = (props) =>  (
  <main>
    <Switch>
      <Route path='/contacts' render={() => <Contacts {...props}/>}/>
    </Switch>
  </main>
)

const Contacts = (props) => (
  <Switch>
    <Route path='/contacts/:number/delete' render={(params) =>
      <DeleteContact {...params} deleteContact={props.deleteContact}/>}/>
    <Route path='/contacts/:number/edit' render={(params) =>
      <EditContact {...params} get={props.get} editContact={props.editContact}/>}/>
    <Route path='/contacts/add' render={(params) =>
      <AddContact {...params} addContact={props.addContact}/>}/>
    <Route path='/contacts/:number' render={(params) =>
      <Person {...params} get={props.get}/>}/>
    <Route exact path='/contacts' render={() => <ContactList all={props.all}/>}/>
  </Switch>
)

const ContactList = (props) => (

  <div>
  <h1>Contacts</h1>
    <ul>
      {
        props.all().map(p => (
          <li key={p.number}>
            <Link to={`/contacts/${p.number}`}>{p.name}</Link>
            <Link to={`/contacts/${p.number}/edit`}>Edit</Link>
            <Link to={`/contacts/${p.number}/delete`}>Remove</Link>
          </li>
        ))
      }
      <Link to={`/contacts/add`}>Add New</Link>
    </ul>
  </div>
)


const Person = (props) => {
  const person = props.get(
    parseInt(props.match.params.number, 10)
  )

  if (!person) {
    return <div>Sorry, but the contact was not found.</div>
  }
  return (
    <div>
      <h1>{person.name}</h1>
      <img src={person.imageUrl} alt={person.name} className="profile-pic"></img>
      <h3>Name: {person.name}</h3>
      <h3>Email: {person.email}</h3>
      <h3>Phone: {person.phone}</h3>
      <Link to='/contacts'>Back</Link>
    </div>
  )
}

class EditContact extends Component {

  constructor(props) {
    super(props)
    console.log(props)
    const person = props.get(
      parseInt(props.match.params.number, 10)
    )
    //console.log(person);
    //set state to current contact info.
    this.state = {
      number: person.number,
      name: person.name,
      imageUrl: person.imageUrl,
      email: person.email,
      phone: person.phone
    };
  }


  render() {
    return (
      <div className="container">
        <form id="myForm" onSubmit={event => this.handleSubmit(event)}>
          <div className="row">

            <div className="col">
              <label htmlFor="name">Name: </label>
              <label htmlFor="image-url">Image Url: </label>
              <label htmlFor="email">Email: </label>
              <label htmlFor="phone">Phone: </label>
            </div>

            <div className="col">
              <input
                id="idNumber"
                defaultValue={this.state.number}
                type="hidden"
              />
              <input
                id="name"
                defaultValue={this.state.name}
                onChange={event => this.setState({name: event.target.value})}
              />
              <input
                id="image-url"
                defaultValue={this.state.imageUrl}
                onChange={event => this.setState({imageUrl: event.target.value})}
              />
              <input
                id="email"
                defaultValue={this.state.email}
                onChange={event => this.setState({email: event.target.value})}
              />
              <input
                id="phone"
                defaultValue={this.state.phone}
                onChange={event => this.setState({phone: event.target.value})}
              />
              <button type="form-group" onClick={this.onSubmit}>Save</button>
            </div>

          </div>
        </form>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault()
    const newState = this.state
    const idNumber = newState.number
    this.props.editContact(newState, idNumber)
    this.props.history.goBack();
  }
}

const DeleteContact = (props) => {
  const id = parseInt(props.match.params.number, 10)

  return (
    props.deleteContact(id)
  )
}


class AddContact extends Component {

  constructor(props) {
    super(props);
    //set state to current contact info.
    this.state = null;
    console.log("add");
  }


  render() {
    return (
      <div className="container">
        <form id="myForm" onSubmit={event => this.handleSubmit(event)}>
          <div className="row">

            <div className="col">
              <label htmlFor="name">Name: </label>
              <label htmlFor="image-url">Image Url: </label>
              <label htmlFor="email">Email: </label>
              <label htmlFor="phone">Phone: </label>
            </div>

            <div className="col">
              <input
                id="name"
                placeholder="Enter name"
                onChange={event => this.setState({name: event.target.value})}
              />
              <input
                id="image-url"
                placeholder="Enter image url"
                onChange={event => this.setState({imageUrl: event.target.value})}
              />
              <input
                id="email"
                placeholder="Enter email"
                onChange={event => this.setState({email: event.target.value})}
              />
              <input
                id="phone"
                placeholder="Enter phone number"
                onChange={event => this.setState({phone: event.target.value})}
              />
              <button type="form-group" onClick={this.onSubmit}>Save</button>
            </div>
            <Link to='/contacts'>Back</Link>
          </div>
        </form>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault()
    const newState = this.state
    this.props.addContact(newState)

    this.props.history.push('/contacts')
  }
}

export default App;
