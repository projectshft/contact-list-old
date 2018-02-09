import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => (
  <div className="container">
    <Main />
  </div>
)

const Home = () => (
  <div>
    <header>
      <h1>Contacts</h1>
      <Link to={`/contacts/${ContactAPI.contacts.length + 1}`}>Add Contact</Link>
      <hr/>
    </header>
    <div>
      <ContactsList />
    </div>
  </div>
)

const ContactAPI = {
  contacts: [
    { number: 1, name: "Albert Einstein", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/1200px-Albert_Einstein_Head.jpg", email: "aeinstein@example.com", phoneNumber: '1-555-555-5555'},
    { number: 2, name: "Logan Peterson", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/1200px-Albert_Einstein_Head.jpg", email: "lapeterson01@gmail.com", phoneNumber: '1-919-625-1624'}
  ],
  all: function() { return this.contacts },
  get: function(id) {
    const isContact = c => c.number === id;
    return this.contacts.find(isContact)
  }
}

const ContactsList = () => (
  <div>
    {
      ContactAPI.all().map(c => (
        <div key={c.number}>
          <p>{c.name}</p>
          <Link to={`/contacts/${c.number}`}>edit</Link>
          <button className="btn-link">delete</button>
          <hr/>
        </div>
      ))
    }
  </div>
)

const Contact = (props) => {
  const contact = ContactAPI.get(
    parseInt(props.match.params.number, 10)
  )
  if (!contact) {
    return (
      <div>
        <div className="row">
          <h1>New Contact</h1>
          <Link to={'/contacts'}>Back to Contacts List</Link>
        </div>
        <div className="row">
          <h3>Name:</h3>
          <div className="form-group">
            <input className="form-control" placeholder="John Doe"></input>
          </div>
        </div>
        <div className="row">
          <h3>Image URL:</h3>
          <div className="form-group">
            <input className="form-control" placeholder="http://www.example.com/picture.jpg"></input>
          </div>
        </div>
        <div className="row">
          <h3>Email:</h3>
          <div className="form-group">
            <input className="form-control" placeholder="jdoe@example.com"></input>
          </div>
        </div>
        <div className="row">
          <h3>Phone Number:</h3>
          <div className="form-group">
            <input className="form-control" placeholder="1-555-555-5555"></input>
          </div>
        </div>
        <div className="row">
          <button className="btn btn-secondary">Save Changes</button>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div className="row">
          <h1>{contact.name}</h1>
          <Link to={'/contacts'}>Back to Contacts List</Link>
        </div>
        <div className="row">
          <h3>Name:</h3>
          <div className="form-group">
            <input className="form-control" defaultValue={contact.name}></input>
          </div>
        </div>
        <div className="row">
          <h3>Image URL:</h3>
          <div className="form-group">
            <input className="form-control" defaultValue={contact.imageUrl}></input>
          </div>
        </div>
        <div className="row">
          <h3>Email:</h3>
          <div className="form-group">
            <input className="form-control" defaultValue={contact.email}></input>
          </div>
        </div>
        <div className="row">
          <h3>Phone Number:</h3>
          <div className="form-group">
            <input className="form-control" defaultValue={contact.phoneNumber}></input>
          </div>
        </div>
        <div className="row">
          <button className="btn btn-secondary">Save Changes</button>
        </div>
      </div>
    )
  }
}

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/contacts' component={Home}/>
      <Redirect exact from="/" to="/contacts"/>
      <Route path='/contacts/:number' component={Contact}/>
    </Switch>
  </main>
)

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
