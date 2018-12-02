import { Link, Redirect } from 'react-router-dom'
import React, {Component, Fragment} from 'react'
import {sendEvent, validateContact} from '../state'

const generateId = () => Math.round(Math.random() * 100000000);

//build a user-input new contact from the form
class NewContact extends Component {
  constructor (props) {
    super (props)
    this.state = {
      name: "",
      image_url: "",
      email: "",
      phone_number: "",
      redirect: false
    }
  }

//redirect appropriately when new contact is submitted
setRedirect = () => this.setState({redirect: true})

renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/contacts' />
    }
  }

  //grab the input values & generate unique ID. Then validate and add if valid
  handleSubmitClick = () => {
    const {name, image_url, email, phone_number} = this.state;
    const newContact = {name, image_url,email, phone_number,id: generateId()}
    if (validateContact(newContact)) {
      sendEvent('addNewContact', newContact);
      this.setRedirect();
    } else {
    alert("Your contact must have a name. If entered, email must contain '@' and '.' and phone number must have area code");    }
  }

  render = () =>
      <Fragment>
        {this.renderRedirect()}
        <form className="form">
          <label>Name</label>
            <input type='text' className='form-control col-6' onChange={event =>
              this.setState({ name: event.target.value })
            }/>
          <br/>
          <label>Image URL</label>
            <input type='text' className='form-control col-10'onChange={event =>
              this.setState({ image_url: event.target.value })
            }/>
          <br/>
          <div className="row">
          <div className = "col-5">
          <label>Email</label>
            <input type='email' className='form-control form-email'onChange={event =>
              this.setState({ email: event.target.value })
            }/>
            </div>
            <div className='col-5'>
          <label>Phone</label>
            <input type='tel' className='form-control form-phone'onChange={event =>
              this.setState({ phone_number: event.target.value })
            }/>
            </div>
          <br/>
          </div>
          <button href="/contacts" className = "btn btn-success add-btn btn-lg" type="button" onClick={this.handleSubmitClick}>Add Contact</button>
      </form>
      <Link to='/contacts'className= "btn btn-warning back-btn">Back</Link>
      </Fragment>
}

export default NewContact
