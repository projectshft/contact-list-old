import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <Main />
  </div>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contact-list" component={ContactList} />
    </Switch>
  </main>
);

const Home = () => (
  <div>
    <a href="/">Home</a> <a href="/contact-list">Contacts</a>
    <h1>Welcome to Roladex!</h1>
  </div>
);

const ContactList = () => (
  <Switch>
    <Route exact path="/contact-list" component={FullList} />
    <Route path="/contact-list/:id" component={Contact} />
  </Switch>
);

const generateId = () => Math.round(Math.random() * 100000000);
const ContactAPI = {
  contacts: [
    {id: generateId(), name: 'Albert Einstein', image_URL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg', email: 'm.c.Squared@gmail.com', phoneNumber: '910-123-4567', quote: '"If you cant explain it simply, you dont understand it well enough."' },
    {id: generateId(), name: 'Hank Hill', image_URL: 'https://vignette.wikia.nocookie.net/kingofthehill/images/0/0e/Hank.png/revision/latest/scale-to-width-down/185?cb=20150524012905', email: 'propane_LUVR@hotmail.com', phoneNumber: '919-373-9874', quote: '"Taste the meat, not the heat."' },
    {id: generateId(), name: 'Prison Mike', image_URL: 'https://ih0.redbubble.net/image.69481766.1262/ap,550x550,12x16,1,transparent,t.u1.png', email: 'WorldsBestBoss.dunderMiff@gmail.com', phoneNumber: '919-828-5476', quote: '"Dont ever, for any reason, do anything, to anyone, for any reason, ever, no matter what, no matter where, or who, or who you are with, or where you are going, or where youve been, ever, for any reason whatsoever."'  },
  ],
  all: function() {
   return this.contacts;
  },
  get: function(id) {
   const isContact = p => p.id === id;
   return this.contacts.find(isContact);
  }
};

const FullList = () => (
  <div>
    <Link to="/">Home</Link>
    <h1>Contacts List <button>Add Contact</button></h1>
    <ul>
      {ContactAPI.all().map(p => (
        <li key={p.id}>
          <Link to={`/contact-list/${p.id}`}>{p.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const Contact = props => {
  const contact = ContactAPI.get(parseInt(props.match.params.id, 10));
  if (!contact) {
    return <div>Sorry, but the contact was not found</div>;
  }
  return (
    <div>
      <Link to="/contact-list">Back</Link>
      <div>
        <img src={contact.image_URL}></img>
      </div>
      <h1>{contact.name}</h1>
      <div>
      Phone #: {contact.phoneNumber}
      <br />
      Email: {contact.email}
      </div>
      <br />
      Quote: {contact.quote}
    </div>
  );
};


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
