
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newContact: "",
      list: []
    };
  }


  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  addContact() {
    // create a new contact with unique id (because no)
    const newContact = {
      id: 1 + Math.random(),
      value: this.state.newContact.slice()
 
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newContact);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newContact: ""
    });
  }

//delete button from youtube tutorial
  deleteContact(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(contact => contact.id !== id);

    this.setState({ list: updatedList });
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
            {this.state.list.map(contact => {
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



ReactDOM.render(<App />, document.getElementById('root'));
export default App;