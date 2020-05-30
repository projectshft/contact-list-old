
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import michaelImg from './michaelbluth.jpg'


const App = () => {
  return (
    <div>
      <Main />
      {/* <RedirectThePage /> */}
    </div>
  )
}


const Main = () => {
  return (
    <main>
      <Switch>
        {/* <Route  path="/" component={ContactsList} /> */}
        <Route exact path="/contact" component={ContactsList} />
        <Route exact path="/contact/new" component={NewContactForm} />
        <Route exact path="/contact/:id" component={ContactInfo} />
      </Switch>
    </main>
  )
}


const state = {
  redirect: null,
  contacts: [
    { id: 1, name: 'Michael Bluth', phone: 123456, email: 'michaelgbluth@gmail.com', img: '' },
    { id: 2, name: 'George Bluth', phone: 123456, email: 'georgebluth@gmail.com', img: '' },
    { id: 3, name: 'Lucille Bluth', phone: 123456, email: 'lucillebluth@gmail.com', img: '' },
    { id: 4, name: 'Buster Bluth', phone: 123456, email: 'busterbluth@gmail.com', img: '' },
    { id: 5, name: 'Gob Bluth', phone: 123456, email: 'gobbluth@gmail.com', img: '' },
  ],
  all: function () {
    return this.contacts;
  },
  get: function (id) {

    const isContact = contact => contact.id === id;
    return this.contacts.find(isContact);
  }
};


const ContactsList = () => (
  <div>
    <div className="row heading">
      <div className="col-md-3 offset-md-1">
        <h1>My Contacts</h1>
      </div>
      <div className="col-md-2 button-div">
        <button><Link to="/contact/new">Add Contact</Link></button>
      </div>
    </div>
    <div className="row">
      <div className="col-md-3 offset-md-1">
        <ul>
          {state.all().map(contact => (
            <li key={contact.id}>
              <Link to={`/contact/${contact.id}`}>{contact.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>


  </div>
);


const ContactInfo = props => {

  const contact = state.get(parseInt(props.match.params.id, 10));
  if (!contact) {
    return <div>Sorry, but the contact was not found</div>;
  }
  return (
    <div>
      <div className="row offset-md-1 heading">
        <h1>
          {contact.name}
        </h1>
      </div>
      <div className="row offset-md-1">
        <h3>Email: {contact.email}</h3>
      </div>
      <div className="row offset-md-1">
        <h3>Phone: {contact.phone}</h3>
      </div>
      <div className="row offset-md-1">
        <img src={michaelImg} />
      </div>
      <div className="row offset-md-1">
        <button><Link to="/contact">Back</Link></button>
      </div>
    </div>
  );
};


const NewContactForm = () => {
  return (
    <div>
      <div className="row offset-md-1 heading">
        <h1>New Contact Form</h1>
      </div>
      <form className="offset-md-1">
        <div className="form-group row">
          <label className="col-md-1">Name: </label>
          <input className="col-md-3"type="text"></input>
        </div>
        <div className="form-group row">
          <label className="col-md-1">Email: </label>
          <input className="col-md-3" type="text"></input>
        </div>
        <div className="form-group row">
          <label className="col-md-1">Phone: </label>
          <input className="col-md-3" type="text"></input>
        </div>
        <div className="form-group row">
          <label className="col-md-1">Picture: </label>
          <input type="file" className="col-md-3" />
        </div>
        <div className="form-group row">
          <button className="col-md-1"> 
            <Link to="/contact">Submit</Link>
          </button>   
        </div>
      </form>

    </div>
  )
}



//Here we're giving the App component routing capability by wrapping in a BrowserRouter Component
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root')
)