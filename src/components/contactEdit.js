import { Link } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types';


class ContactEdit extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      name: '',
      image_url: '',
      email: '',
      phone:''
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
  }

  componentDidMount () {
      const findContactById = (id) => {
      return this.props.contacts.filter((contact) => {
        return contact.id === id
      });
    };

    const currentContact = findContactById(this.props.contactId)[0];

    this.setState({
      name: currentContact.name,
      image_url: currentContact.image_url,
      email: currentContact.email,
      phone: currentContact.phone,
      id: currentContact.id

    })
  }

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
      <form className="col-md-8 needs-validation" onSubmit={this.handleSubmitContactClick}>


      <label>Name</label>
      <input required type='text' className='form-control'value={this.state.name} onChange={event =>
        this.setState({ name: event.target.value })
      }/>

      <br/>

      <label>Image_url</label>
      <input required type='text' className='form-control' value={this.state.image_url} onChange={event =>
        this.setState({ image_url: event.target.value })
      }/>

      <br/>

      <label>Email</label>
      <input required type='email' className='form-control' value={this.state.email} onChange={event =>
        this.setState({ email: event.target.value })
      }/>

      <br/>

      <label>Phone Number</label>
      <input required type='text' pattern="[0-9]*" className='form-control' value={this.state.phone}onChange={event =>
        this.setState({ phone: event.target.value })
      }/>
      <small id="phoneHelp" className="form-text text-muted">
                Please enter numerical values
                </small>


      <br/>

      <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <br/>

      <Link to='/contacts'>Back to Contact List</Link>
    </div>

  )
  }

}

ContactEdit.propTypes = {
contacts: PropTypes.array.isRequired,
}

export default ContactEdit
