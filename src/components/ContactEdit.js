import { Link } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'

class ContactEdit extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      name: '',
      phone: '',
      email: '',
      image: ''
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }
  componentDidMount () {
    const findContactByKey = (key) => {
      return this.props.contacts.filter((contact) => {
        return contact.key === key
      });
    };

    const currentContact = findContactByKey(this.props.contactKey)[0];

    this.setState({
      name: currentContact.name,
      phone: currentContact.phone,
      email: currentContact.email,
      image: currentContact.image,
      key: currentContact.key
    })
  }

  handleSubmitContactClick () {
    const newContact = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      image: this.state.image,
      key: this.state.key
    };

    this.props.updateContact(newContact)
    this.props.history.push('/contacts')
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Edit Contact</h1>
        <br></br>
        <form className="col-md-6 offset-md-3">
          <h2>{this.state.name}</h2>
          <input type='text' className='form-control player' defaultValue={this.state.name} onChange={event =>
            this.setState({ name: event.target.value })}/>

          <br></br>

          <h4>{this.state.phone}</h4>
          <input type='text' className='form-control player' defaultValue={this.state.phone} onChange={event =>
            this.setState({ phone: event.target.value })}/>

          <br></br>

          <h4>{this.state.email}</h4>
          <input type='text' className='form-control player' defaultValue={this.state.email} onChange={event =>
            this.setState({ email: event.target.value })}/>

          <br></br>

          <div>
            <img src={this.state.image} alt="" height='auto' width='300'/>
            <br></br>
            <br></br>
            <input type='text' className='form-control player' defaultValue={this.state.image} onChange={event =>
              this.setState({ image: event.target.value })}/>
          </div>
          <br></br>
          <button type="button" className="btn btn-info" onClick={this.handleSubmitContactClick}>Submit</button>
          <br></br>
          <Link to='/contacts' className="text-info">Back to Contacts</Link>
        </form>
      </div>
    )
  }
}

ContactEdit.propTypes = {
  conact: PropTypes.shape({
    key: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }),
  contacts: PropTypes.array.isRequired,
  updateContact: PropTypes.func.isRequired,
  contactKey: PropTypes.number
};

export default ContactEdit
