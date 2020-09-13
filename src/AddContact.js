import { BrowserRouter, Switch, Link } from 'react-router-dom'
import React, { Component } from 'react';

class AddContact extends Component {
  constructor () {
    super()
    console.log('In AddContact. props are ', this.props);
  // need a state to contain new contact entry data.
  
    
  this.state = {
      key: '',
      name: '',
      image_url: '',
      email: '',
      phone_number: ''
    },

    //this.props.addContact = this.props.addContact.bind(this);
    this.handleContactSubmitClick = this.handleContactSubmitClick.bind(this);
  
  }
  handleContactSubmitClick () {
    const newContact = {
      // copy state to obj to send to addContact, fire function; return to home
      // create 'unique' key at this time
      key: Math.round(Math.random() * 100000000),
      name: this.state.name,
      image_url: this.state.image_url,
      email: this.state.email,
      phone_number: this.state.phone_number
    };
    console.log('the newContact obj ', newContact);
    // console.log('props in AddContact ', routerProps);

    this.props.AddContact(newContact)
    this.props.history.push('./contacts')

  }
  render () {
    return (
      <div className="App container">
        <div className="row">
        <header className="App-header">
          <div className="col-md">
           <h1 className="App-title float-left">Add A New Contact</h1>
           </div>
           </header>
           </div>
           <div className="row mt-3">
          <div className="col-md">
      <div>
      <form>
      <label>Name</label>
      <input type='text' className='form-control' onChange={event =>
        this.setState({ name: event.target.value })
      }/>
      <br/>
      <label>Image Link</label>
      <input type='text' className='form-control' onChange={event =>
        this.setState({ image_url: event.target.value })
      }/>
      <br/>
      <label>Phone Number</label>
      <input type='text' className='form-control' onChange={event =>
        this.setState({ phone_number: event.target.value })
      }/>
      <br/>
      <label>Email Address</label>
      <input type='text' className='form-control' onChange={event =>
        this.setState({ email: event.target.value })
      }/>
      <button type="button" className="btn float-right btn-outline-dark shadow add-contact ml-5 mt-2" onClick={this.handleContactSubmitClick}>Add Contact</button>
      </form>
      </div>
      </div>
      </div>
      </div>
    )
  }
}

  export default AddContact