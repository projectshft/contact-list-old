import { Link, Redirect } from 'react-router-dom'
import React, {Component, Fragment} from 'react'
import {getState, sendEvent, validateContact} from '../state'
import PropTypes from 'prop-types';

//edit one specific contact
class EditContact extends Component {
  constructor (props) {
    super (props);
    //first make sure it's been linked to by a valid contact ID
    if (!getState('selectedContact')) {
      return <h1>No contact with that ID is available</h1>
    }
    const {name, image_url, email, phone_number, id} = getState('selectedContact');
    const backLink = `/contacts/${id}`;
    this.state = {
      name,
      image_url,
      email,
      phone_number,
      id,
      backLink,
      redirect: false
    }
  }

//redirect appropriately when edits are submitted
setRedirect = () => this.setState({redirect: true})

renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/contacts' />
    }
  }

//when edits are submitted, validate the changed data, then delete the original.
//then create a new contact with the same id and redirect to the main page
handleSubmitClick = () => {
  const {name, image_url, email, phone_number, id} = this.state;
  const newContact = {name, image_url,email, phone_number,id}
  if (validateContact(newContact)) {
    sendEvent('deleteContact',getState('selectedContact'));
    sendEvent('addNewContact', newContact);
    this.setRedirect();
  } else {
    alert("Your contact must have a name. If entered, email must contain '@' and '.' and phone number must have area code");
  }
}

render = () =>
  <Fragment>
    {this.renderRedirect()}
    <form className="form">
      <label>Name</label>
        <input type='text' value={this.state.name} className='form-control col-6' onChange={event =>
          this.setState({ name: event.target.value })
        }/>
      <br/>
      <label>Image URL</label>
        <input type='text' value={this.state.image_url} className='form-control col-10'onChange={event =>
          this.setState({ image_url: event.target.value })
        }/>
      <br/>
      <div className="row">
      <div className = "col-5">
      <label>Email</label>
        <input type='email' value={this.state.email} className='form-control form-email'onChange={event =>
          this.setState({ email: event.target.value })
        }/>
        </div>
        <div className='col-5'>
      <label>Phone</label>
        <input type='tel' value={this.state.phone_number} className='form-control form-phone'onChange={event =>
          this.setState({ phone_number: event.target.value })
        }/>
        </div>
      <br/>
      </div>
      <button href="/contacts" className = "btn btn-success add-btn btn-lg" type="button" onClick={this.handleSubmitClick}>Submit Changes</button>
    </form>
    <Link to={this.state.backLink} className= "btn btn-warning back-btn" >Back</Link>
  </Fragment>
}

//using PropTypes here only because it's a requirement of the project, since
//centralized state management doesn't require props
EditContact.propTypes = {
  proptypeTest: PropTypes.string.isRequired
};

export default EditContact
