import { Link, Redirect } from 'react-router-dom'
import React, {Component, Fragment} from 'react'
import {sendEvent, getState} from '../state'

const generateId = () => Math.round(Math.random() * 100000000);

class NewContact extends Component {
  constructor () {
    super ()
    this.state = {
      name: "",
      image_url: "",
      email: "",
      phone_number: "",
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
    const {name, image_url, email, phone_number} = this.state;
    const newContact = {name, image_url,email, phone_number,id: generateId()}
    sendEvent('addNewContact', newContact);
    this.setRedirect();
  }

  render () {
    return (
      <Fragment>
      {this.renderRedirect()}
      <form>
      <label>Name</label>
      <input type='text' className='form-control'onChange={event =>
        this.setState({ name: event.target.value })
      }/>
      <br/>
      <label>Image URL</label>
      <input type='text' className='form-control'onChange={event =>
        this.setState({ image_url: event.target.value })
      }/>
      <br/>
      <label>Email</label>
      <input type='email' className='form-control'onChange={event =>
        this.setState({ email: event.target.value })
      }/>
      <br/>
      <label>Phone</label>
      <input type='tel' className='form-control'onChange={event =>
        this.setState({ phone_number: event.target.value })
      }/>
      <br/>
      <button href="/contacts" type="button" onClick={this.handleSubmitClick}>Add Contact</button>
      </form>
        <Link to='/contacts'>Back</Link>
      </Fragment>
    )
  }
}

export default NewContact
