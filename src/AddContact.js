import { Link, withRouter } from 'react-router-dom'
import React from 'react'

class AddContact extends React.Component {
  constructor () {
    super ()

    this.state = {
      name: '',
      number: '',
      email: '',
      id: ''
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
  }

  generateID () {
    return Math.round(Math.random() * 100000000)
  }

  handleSubmitContactClick () {
    const newContact = {
      name: this.state.name,
      number: this.state.number,
      email: this.state.email,
      id: this.generateID()
    };

    this.props.addContact(newContact)
    this.props.history.push('/')
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

export default withRouter(AddContact)
