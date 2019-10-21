
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
  
  constructor(props) {
    super(props)

    this.state = {
      newContact: "",
      contacts: []
    };
  }


const Index = () => (
  <div>
    <h1>Contacts Rolodex</h1>
  </div>
);

const addContact = () => <h1>add contact here</h1>;

const showContact = () => <h1>individual</h1>;
{
  "contacts": [
    {
      "id": 70219577,
      "name": "Albert Einstein",
      "image_url": "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
      "email": "aeinstein@example.com",
      "phone_number": "15555555555"
    }
  ]
}
  const Main = () => (
    
    <div>
    <main>
      <Switch>
        
        <Route exact path="/contacts" render={() =>component={Index} }/>
        <Route path="/contacts/new" render={() =>component={addContact} }/>
        <Route path="/contacts/id=" render={() =>component={showContact} } />
      </Switch>
    </main>
  );
  </div>
  
};


  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  //takes input
  addContact() {
    // create a new contact with unique id (because no)
    const newContact = {
      id: 1 + Math.random(),
      value: this.state.newContact.slice()
 
    };

    // copy current contacts of items
    const contacts = [...this.state.contacts];

    // add the new item to the contacts
    contacts.push(newContact);

    // update state with new contacts, reset the new item input
    this.setState({
      contacts,
      newContact: ""
    });
  }

//delete button from youtube tutorial
  deleteContact(id) {
    // copy current contacts of items
    const contacts = [...this.state.contacts];
    // filter out the item being deleted
    const updatedcontacts = contacts.filter(contact => contact.id !== id);

    this.setState({ contacts: updatedcontacts });
  }
  
  render() {
    return (
      <div>

      <h1 className="app-title">Contacts</h1>
        
        <div className="container">
        <div>
          
          <br />
          <input //this form on new route /contacts/new
            type="text"
            placeholder="Add Contact"
            value={this.state.newContact}
            onChange={e => this.updateInput("newContact", e.target.value)}
          />
          <button //on click, take user to new route with an adding contact form
            className="add-btn btn-floating"
            onClick={() => this.addContact()}
            disabled={!this.state.newContact.length}
          >
            <i class="material-icons"> Add Contact </i>
          </button>
          <br /> <br />
          <ul>
            {this.state.contacts.map(contact => {
              return (
                <li key={contact.id}>
                  {contact.value}
                  <button className="btn btn-floating" onClick={() => this.deleteContact(contact.id)}>
                    <i class="material-icons">x</i>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      </div>
    );
  }
}



ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter>,
  document.getElementById('root'));
export default App;
