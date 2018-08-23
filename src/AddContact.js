import { Link } from 'react-router-dom'
import React from 'react'

class AddContact extends React.Component {
  constructor () {
    super ()

    this.state = {
      name: '',
      number: '',
      email: ''
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
  }

  handleSubmitContactClick () {
    const newContact = {
      name: this.state.name,
      number: this.state.number,
      email: this.state.email
    };

    this.props.addContact(newContact)
    // this.props.props.history.push('/addcontact') ---come back to this
  }

  render () {
    return (
      <div>

        <header className="App-header">
          <h1 className="App-title">Add a New Contact</h1>
        </header>

        <p/>
        <Link to='/'>Back to Contacts</Link>

        <p/>
        <form>
        <label>Name</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ name: event.target.value })
        }/>

        <p/>
        <label>Phone number</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ number: parseInt(event.target.value, 10) })
        }/>

        <p/>
        <label>Email</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ email: event.target.value })
        }/>

        <p/>
        <button type="button" onClick={this.handleSubmitContactClick}>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddContact
