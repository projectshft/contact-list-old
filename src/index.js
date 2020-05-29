import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';


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
      <img src='{player.image}' width="250" height="300"></img>
      <h2>
        {contact.name}
      </h2>
      <h4>Email:</h4> <p>{contact.email}</p>
      <h4>Phone:</h4> <p>{contact.phone}</p>
      <Link to="/">Back</Link>
    </div>
  );
};

const AddContact = () => {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
};


const App = () => (
  <div>
    <Switch>
    <Route exact path="/" component={ContactsList} />
    <Route path="/contact/addcontact" component={AddContact} />
    <Route path="/contact/:id" component={Contact} />
    </Switch>
  </div>
);




ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
