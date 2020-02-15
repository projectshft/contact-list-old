import { Link } from 'react-router-dom'
import React from 'react'
import uuid from 'uuid/v4'
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
        <form>
        <label>Name</label>
        <input type='text' value={this.state.name} className='form-control'onChange={event =>
          this.setState({ name: event.target.value })
        }/>

        <br/>

        <label>Image_url</label>
        <input type='text' value={this.state.image_url} className='form-control'onChange={event =>
          this.setState({ image_url: event.target.value})
        }/>

        <br/>

        <label>Email</label>
        <input type='text' value={this.state.email} className='form-control'onChange={event =>
          this.setState({ email: event.target.value })
        }/>
        <br/>

        <label>Phone Number </label>
        <input type='text' value={this.state.phone} className='form-control'onChange={event =>
          this.setState({ phone: parseInt(event.target.value, 10) })
        }/>

        <br/>


        <button type="button" className = "btn-primary" onClick={this.handleSubmitContactClick}>Submit</button>
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
