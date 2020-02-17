import {Link} from 'react-router-dom'
import React from 'react'
import uuid from 'uuid/v4'
import PropTypes from 'prop-types'

//The component ContactNew allows the user to add a contact with a name, image, email, and phone number.
class ContactNew extends React.Component {
  constructor () {
    super ()

    this.state = {
      //each time a new contact is created you generate a new id
      id: uuid(),
      name: '',
      image_url: '',
      email: '',
      phone: ''
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
  }
  //when you submit the  input fileds and click the button the contact
  //is added to the contacts array through the props and the router props
  handleSubmitContactClick () {
    const newContact = {
      id: this.state.id,
      name: this.state.name,
      image_url: this.state.image_url,
      email: this.state.email,
      phone: this.state.phone
    };

    this.props.addContact(newContact)
    this.props.history.push('/contacts')
  }

  render () {
    return (
      <div>
        {/* the form needs validation and then submits once the required inputs are filled*/}
        <form className="col-md-8 needs-validation" onSubmit={this.handleSubmitContactClick}>


          <label>Name</label>
          <input required type='text' className='form-control' value={this.state.name} onChange={event =>
            this.setState({ name: event.target.value })
          }/>

          <br/>

          <label>Image_url</label>
          {/* the type of input required for an url address*/}
          <input required type='url' className='form-control'onChange={event =>
            this.setState({ image_url: event.target.value })
          }/>

          <br/>
          {/* the type of input required for an email address*/}
          <label>Email</label>
          <input required type='email' className='form-control'onChange={event =>
            this.setState({ email: event.target.value })
          }/>

          <br/>

          <label>Phone Number</label>
          {/* the type of input required a phone number*/}
          <input required type='tel' pattern="[0-9]*" className='form-control' onChange={event =>
            this.setState({ phone: event.target.value })
          }/>
          <small id="phoneHelp" className="form-text text-muted">
          Please enter numerical values</small>


          <br/>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        <br/>
        {/* links back to the contacts list */}
        <Link to='/contacts'>Back to Contact List</Link>
      </div>
    )
  }
}


//PropTypes required
ContactNew.propTypes = {
  contacts: PropTypes.array.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired
  })

}


export default ContactNew
