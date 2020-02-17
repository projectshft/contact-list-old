import { Link } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types';

//Contact Edit allows to edit the and update the Contact Information
class ContactEdit extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      id: '',
      name: '',
      image_url: '',
      email: '',
      phone:''
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
  }
  //TODO fix the error when you reload the page with this function
  componentDidMount () {
      const findContactById = (id) => {
      return this.props.contacts.filter((contact) => {
        return contact.id === id
      });
    };

    const currentContact = findContactById(this.props.contactId)[0];

    this.setState({
      id: currentContact.id,
      name: currentContact.name,
      image_url: currentContact.image_url,
      email: currentContact.email,
      phone: currentContact.phone

    })
  }
  //when you submit the updated input fileds and click the button the update contact
  //is added to the contacts array through the props and the router props
  handleSubmitContactClick () {
    const newContact = {
      name: this.state.name,
      image_url: this.state.image_url,
      email: this.state.email,
      phone: this.state.phone,
      id: this.state.id
    };

    this.props.updateContact(newContact)
    this.props.history.push('/contacts')
  }

  render () {
    return (
    <div>
    {/* the form needs validation and then submits once the required inputs are filled*/}
      <form className="col-md-8 needs-validation" onSubmit={this.handleSubmitContactClick}>


      <label>Name</label>
      <input required type='text' className='form-control'value={this.state.name} onChange={event =>
        this.setState({ name: event.target.value })
      }/>

      <br/>

      {/* the type of input required for an url address*/}
      <label>Image_url</label>
      <input required type='url' className='form-control' value={this.state.image_url} onChange={event =>
        this.setState({ image_url: event.target.value })
      }/>

      <br/>

      {/* the type of input required for an email address*/}
      <label>Email</label>
      <input required type='email' className='form-control' value={this.state.email} onChange={event =>
        this.setState({ email: event.target.value })
      }/>

      <br/>

      {/* the type of input required a phone number*/}
      <label>Phone Number</label>
      <input required type='tel' pattern="[0-9]*" className='form-control' value={this.state.phone}onChange={event =>
        this.setState({ phone: event.target.value })
      }/>
      <small id="phoneHelp" className="form-text text-muted">
      Please enter numerical values
      </small>


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
ContactEdit.propTypes = {
contacts: PropTypes.array.isRequired,
contact: PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired
}),
updateContact: PropTypes.func.isRequired
}

export default ContactEdit
