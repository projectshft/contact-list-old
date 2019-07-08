import React, { Component } from 'react';
import Contact from './contact';

 //create a contacts list, which is a class component because it needs state,  that contains all the stateless contact components. 

 class InputContacts extends Component {
  constructor () {
    super()

    this.state = {
      id: '',
      name: '',
      phone: '',
      email: '',
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const contact = {
      id: this.state.id,
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email
    }
  
    this.props.addContact(contact);
  }

  render() {
    return (
      <form className="post-form">
        <h3>Add a New Contact</h3>

          <div className="form-group">
            <input
              className="form-control"
              placeholder="ID"
              value={this.state.id}
              onChange={event => this.setState({id: event.target.value})}
              />

            <br/>

            <input
              className="form-control"
              placeholder="NAME"
              value={this.state.name}
              onChange={event => this.setState({name: event.target.value})}
              />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              placeholder="PHONE"
              value={this.state.phone}
              onChange={event => this.setState({phone: event.target.value})}
              />

            <br/>

            <input
              className="form-control"
              placeholder="EMAIL"
              value={this.state.email}
              onChange={event => this.setState({email: event.target.value})}
              />
          </div>

        <button onClick={this.handleClick} type="button" className="btn btn-primary">Post</button>
      </form>
    );
  }
}

export default InputContacts;






// class InputContacts extends Component {
//   handleClick () {
//     console.log('click!')
//   }
//   render() {
//     return (
//       <div className="route-contact-form">
//         <h3>Add a New Contact</h3>
//         <button onClick={this.handleClick} type="button" className="btn btn-primary add-post">Add Contact</button>
//       </div>
//     );
//   }
// }

// export default InputContacts;