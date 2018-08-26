import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import React from 'react'

class newContact extends React.Component {
  constructor () {

    super ()

    this.state = {
      name: '',
      phone: '',
      address: '',
      email: '',
      id: ''
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
  }

  generateId () {
     return Math.round(Math.random() * 100000000)
  }

  handleSubmitContactClick () {
    const contactNew = {
      name: this.state.name,
      phone: this.state.phone,
      address: this.state.address,
      email: this.state.email,
      id: this.generateId()
    };

    this.props.addContact(contactNew);

    this.props.props.history.push('/Contacts')
  }

  render () {
    return (
      <div>
        <form>
        <label>Name: </label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ name: event.target.value })
        }/>

        <br/>

        <label>Phone Number: </label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ phone: parseInt(event.target.value) })
        }/>

        <br/>

        <label>Address: </label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ address: event.target.value })
        }/>

        <br/>

        <label>Email: </label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ email: event.target.value })
        }/>

        <br/>

        <button type="button" onClick={this.handleSubmitContactClick}>Submit</button>
        </form>

      </div>
    )
  }
}

export default newContact
