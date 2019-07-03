import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

class EditContact extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      image_url: '',
      email: '',
      phone_number: ''
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this);

  }

  handleSubmitContactClick () {
    const newContact = {
      name: this.state.name,
      image_url: this.state.image_url,
      email: this.state.email,
      phone_number: this.state.phone_number
    };

    this.props.editContact(newContact)
    this.props.props.history.push('/contacts')
  }

  render () {
    const contact = _.find(this.props.contacts, { id: parseInt(this.props.props.match.params.id, 10) });
    return (
      <div>
        <form>
        <label>Name</label>
        <input type='text' className='form-control' value={contact.name} onChange={event =>
          this.setState({ name: event.target.value })
        }/>

        <br/>

        <label>Phone Number</label>
        <input type='text' className='form-control' value={contact.phone_number} onChange={event =>
          this.setState({ phone_number: event.target.value })
        }/>

        <br/>

        <label>Email</label>
        <input type='text' className='form-control' value={contact.email} onChange={event =>
          this.setState({ email: event.target.value })
        }/>

        <label>Image Url</label>
        <input type='text' className='form-control' value={contact.image_url} onChange={event =>
          this.setState({ image_url: event.target.value })
        }/>

        <button type="button btn-primary" onClick={this.handleSubmitContactClick}>Submit</button>
        </form>

        <Link to='/contacts'>Back To Contacts</Link>
      </div>
    )
  }
}

export default EditContact
