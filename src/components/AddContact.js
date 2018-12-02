import { BrowserRouter, Switch, Route, Link} from "react-router-dom"
import React from "react"

class AddContact extends React.Component {
  constructor () {
    super ()

    this. state = {
      name: '',
      email: '',
      phone: '',
      thumbnail: '',
      id: ''
    }
  }

  generateId = () => {
    Math.round(Math.random() * 100000000)
  }

  handleNewContactClick = () => {
    const newContact = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      thumbnail: this.state.thumbnail,
      id: this.generateId()
    };

    this.props.addContact(newContact);


  }

  render () {
    return (
      <div>
        <form>
        <label>Name: </label>
        <input type ='text' className='form-control' onChange={event =>
        this.setState({ name: event.target.value })
      } />

      <label>Email: </label>
      <input type ='text' className='form-control' onChange={event =>
      this.setState({ email: event.target.value })
    } />

    <label>Phone: </label>
    <input type ='text' className='form-control' onChange={event =>
    this.setState({ phone: parseInt(event.target.value) })
  } />

    <label>thumbnail: </label>
    <input type ='text' className='form-control' onChange={event =>
    this.setState({ thumbnail: event.target.value })
  } />

    <button type="button" onclick={this.handleNewContactClick}>Submit</button>
    </form>
  </div>
    )
  }
}

export default AddContact
