import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const ContactsList = () => {

  return (
    <div>
      <h2>Contact List</h2><Link to='/contact/addcontact'>Add Contact</Link>
      <ul>
        {ContactsAPI.all().map(c => (
          <li key={c.id}>
          <h3><Link to={`/contact/${c.id}`}>{c.name}</Link></h3>
          </li>
        ))}
      </ul>
    </div>
  )
};



const ContactsAPI = {
  contacts: [
    { id: 1, image: 'https://gasmonkeygarage.com/wp-content/uploads/2016/10/Richard.jpg', name: 'Richard Rawlings', email: 'rrawlings@gasmonkeygarage.com', phone: '1234567890' },
    { id: 2, image: 'https://gasmonkeygarage.com/wp-content/uploads/2016/10/Jason0319.jpg', name: 'Jason Aker', email: 'jaker@gasmonkeygarage.com', phone: '0987654321' },
    { id: 3, image: 'https://gasmonkeygarage.com/wp-content/uploads/2016/10/MikeCoy0319.jpg', name: 'Mike Coy', email: 'mcoy@gasmonkeygarage.com', phone: '5678901234' },
    // { id: 4, name: 'Matt Midfielder', position: 'M' },
    // { id: 5, name: 'William Winger', position: 'M' },
    // { id: 6, name: 'Fillipe Forward', position: 'F' }
  ],
  all: function() {
    return this.contacts;
  },
  get: function(id) {
    const isContact = c => c.id === id;
    return this.contacts.find(isContact);
  }
};



const Contact = props => {
  const contact = ContactsAPI.get(parseInt(props.match.params.id, 10));
  return (
    <div>
      <img src={contact.image} width="250" height="250"></img>
      <h2>
        {contact.name}
      </h2>
      <h4>Email:</h4> <p>{contact.email}</p>
      <h4>Phone:</h4> <p>{contact.phone}</p>
      <Link to="/">Back</Link>
    </div>
  );
};


class AddContact extends React.Component {
  constructor () {
    super ()

    this.state = {
      name: '',
      email: '',
      phone: '',
      image: ''
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
  }

  handleSubmitContactClick () {
    const newContact = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      image: this.state.image
    };

    this.props.addContact(newContact)
    this.props.history.push('/')
  }

  render () {
  return (
    <div>
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <br></br><br></br>
      <label>
        Email:
        <input type="text" email="email" />
      </label>
      <br></br><br></br>
      <label>
        Phone:
        <input type="text" phone="phone" />
      </label>
      <br></br><br></br>
      <label>
        Image URL:
        <input type="text" image="imageUrl" />
      </label>
      <button type="button" onClick={this.handleSubmitContactClick}>Submit</button>
      <Link to="/">Back</Link>
    </form>
    </div>
  )
}
};


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route exact path="/" component={ContactsList} />
        <Route path="/contact/addcontact" component={AddContact} />
        <Route path="/contact/:id" component={Contact} />
        </Switch>
      </div>
    );
  }
}





ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
