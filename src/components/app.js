import React, { Component } from 'react';
import InputContacts from './input-contacts';
import ContactsList from './contacts-list';

class App extends Component {
  constructor() {
    super()

    this.state = {
      contacts: []
    }

    this.addContact = this.addContact.bind(this)
  }

  addContact (contact) {
    this.setState({contacts: this.state.contacts.concat([contact])});
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="page-header">
            <h1>Rolodex</h1>
          </div>

          <div className="contacts">
            <ContactsList contacts={this.state.contacts}/>
          </div>
          <div className="input-contacts-placeholder">
            <InputContacts addContact={this.addContact} />
          </div>

        </div>
      </div>
    );
  }
}

export default App;



// import React, { Component } from './node_modules/react';

// class App extends Component {
//   render() {
//     return (
//       <div className="row">
//         <div className="col-md-6 offset-md-3">
//           <div className="page-header">
//             <h1>Rolodex</h1>
//           </div>
//             <br />
//           <div className="contacts-list">
//             <h2>Contact List Here</h2>
//           </div>
//             <br />
//           <form className="post-form">
//             <button type="button" className="btn btn-primary add-contact">Add Contact</button>
//           </form>
//           <InputContacts/>

//         </div>
//       </div>
//     );
//   }
// }

// export default App;