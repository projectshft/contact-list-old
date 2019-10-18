import { Link} from 'react-router-dom'
import React from 'react'

class ContactNew extends React.Component {
  constructor () {
    super ()

    this.state = {
      name: '',
      id: '',
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
  }

  handleSubmitContactClick () {
    const newContact = {
      name: this.state.name,
      id: this.state.number,
    };

    this.props.addContact(newContact);
    this.props.props.history.push('/contacts')
    this.props.toggleRedirect();
  }

  render () {
    return (
      <div>
        <form>
        <label>Name</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ name: event.target.value })
        }/>

        <br/>

        <label>Number</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ id: parseInt(event.target.value, 10) })
        }/>

        <br/>

        <label>Position</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ position: event.target.value })
        }/>

        <button type="button" onClick={this.handleSubmitContactClick}>Submit</button>
        </form>

        <Link to='/contacts' onClick={this.props.toggleRedirect}>Contacts</Link>
      </div>
    )
  }
}

export default ContactNew
