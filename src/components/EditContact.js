import { Link, Redirect } from 'react-router-dom'
import React, {Component, Fragment} from 'react'
import {getState, sendEvent} from '../state'

class EditContact extends Component {
  constructor () {
    super ();
    const {name, image_url, email, phone_number, id} = getState('selectedContact');
    sendEvent('deleteContact',getState('selectedContact'));
    this.state = {
      name,
      image_url,
      email,
      phone_number,
      id,
      redirect: false
    }
  }

  setRedirect = () => {
  this.setState({
    redirect: true
  })
}

renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/contacts' />
    }
  }

handleSubmitClick = () => {
  const {name, image_url, email, phone_number, id} = this.state;
  const newContact = {name, image_url,email, phone_number,id}
  sendEvent('addNewContact', newContact);
  this.setRedirect();
}

render () {
  return (
    <Fragment>
    {this.renderRedirect()}
    <form>
    <label>Name</label>
    <input type='text' value={this.state.name} className='form-control'onChange={event =>
      this.setState({ name: event.target.value })
    }/>
    <br/>
    <label>Image URL</label>
    <input type='text' value={this.state.image_url}className='form-control'onChange={event =>
      this.setState({ image_url: event.target.value })
    }/>
    <br/>
    <label>Email</label>
    <input type='email' value={this.state.email}className='form-control'onChange={event =>
      this.setState({ email: event.target.value })
    }/>
    <br/>
    <label>Phone</label>
    <input type='tel' value={this.state.phone_number} className='form-control'onChange={event =>
      this.setState({ phone_number: event.target.value })
    }/>
    <br/>
    <button href="/contacts" type="button" onClick={this.handleSubmitClick}>Submit Changes</button>
    </form>
      <Link to='/contacts'>Back</Link>
    </Fragment>
  )
}
}

export default EditContact
