import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

class EditContact extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      id: parseInt(this.props.props.match.params.id, 10)
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this);

  }

  handleSubmitContactClick () {
    const newContact = {};
    for (let [key, value] of Object.entries(this.state)) {
      newContact[key] = value;
    };
    console.log(newContact);
    this.props.editContact(newContact)
    this.props.props.history.push('/contacts')
  }

  render () {
    const contact = _.find(this.props.contacts, { id: parseInt(this.props.props.match.params.id, 10) });
    return (
      <div>
        <form>
        <label>Name</label>
        <input type='text' className='form-control' defaultValue={contact.name} onChange={event =>
          this.setState({ name: event.target.value })
        }/>

        <br/>

        <label>Phone Number</label>
        <input type='text' className='form-control' defaultValue={contact.phone_number} onChange={event =>
          this.setState({ phone_number: event.target.value })
        }/>

        <br/>

        <label>Email</label>
        <input type='text' className='form-control' defaultValue={contact.email} onChange={event =>
          this.setState({ email: event.target.value })
        }/>

        <label>Image Url</label>
        <input type='text' className='form-control' defaultValue={contact.image_url} onChange={event =>
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
