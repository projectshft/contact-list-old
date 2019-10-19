import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

class ContactEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = _.find(props.contacts, { id: parseInt(props.props.match.params.id, 10) });
    
    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
  }

  handleSubmitContactClick() {
    debugger;
    const editedContact = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      id: parseInt(this.props.props.match.params.id, 10)
    };
    console.log(editedContact)
    this.props.editContact(_.findIndex(this.props.contacts, { id: parseInt(this.props.props.match.params.id, 10) }), editedContact);
    this.props.props.history.push('/contacts')
    // this.props.toggleRedirect();
  }

  render() {
    // debugger;
    return (
      <div>
        <form id="contact-form">
          <label>Name</label>
          <input value={this.state.name} type='text' className='form-control' onChange={event =>
            this.setState({ name: event.target.value })
          } />

          <br />

          <label>Phone</label>
          <input value={this.state.phone} type='text' className='form-control' onChange={event =>
            this.setState({ phone: event.target.value})
          } />

          <br />

          <label>email</label>
          <input value={this.state.email} type='text' className='form-control' onChange={event =>
            this.setState({ email: event.target.value })
          } />

          <button id="submit-contact-button"type="button" className="btn btn-primary" onClick={this.handleSubmitContactClick}>Submit</button>
        </form>

        <Link to='/contacts' id="return-to-contacts" onClick={this.props.toggleRedirect}>Contacts</Link>
      </div>
    )
  }
}

export default ContactEdit