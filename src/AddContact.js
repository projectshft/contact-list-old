import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddContact extends Component {
  constructor () {
    super()
    //console.log('In AddContact. props are ', this.props);

  // need a state to contain new contact entry data.    
  // create key now for easy validation of entry data
  this.state = {
      key: Math.round(Math.random() * 100000000),
      name: '',
      image_url: '',
      email: '',
      phone_number: ''
    }

    this.handleContactSubmitClick = this.handleContactSubmitClick.bind(this);
  
  }

  handleContactSubmitClick () {
    const validEntry = (obj) => {
      console.log('in validEntry() ', obj)
      for (const keys in obj) {
        if (obj[keys] === ''){
          console.log('logic testing ', obj[keys])
          return false;}
      } 
      return true; 
    }

    if (validEntry(this.state)) {
    const newContact = {
      // copy state to obj to send to addContact, fire function; return to home

      key: this.state.key,
      name: this.state.name,
      image_url: this.state.image_url,
      email: this.state.email,
      phone_number: this.state.phone_number
    };
    console.log('the newContact obj ', newContact);
    // console.log('props in AddContact ', routerProps);

    this.props.addContact(newContact)
    this.props.history.push('/contacts')
    
  }
  else{
    alert('Please fill out all fields');
  }

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

AddContact.proptypes = {
  addContact: PropTypes.func.isRequired
}

  export default AddContact