import { Link } from 'react-router-dom'
import React from 'react'

class NewContact extends React.Component {
  constructor () {
    super ()

    this.state = {
      id: '',
      name: '',
      phoneNumber: '',
      email: '',
      img_url: ''
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
  }

  

  handleSubmitContactClick () {
    const generateId = () => Math.round(Math.random() * 100000000);

    const newContact = {
      id: generateId(),
      name: this.state.name,
      number: this.state.number,
      position: this.state.position,
      img_url: this.state.img_url,
    };

    this.props.addContact(newContact)
    this.props.history.push('/contacts')
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

        <label>Phone Number</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ phoneNumber: parseInt(event.target.value, 10) })
        }/>

        <br/>

        <label>Email</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ email: event.target.value })
        }/>

        <br/>

        <label>Image</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ img_url: event.target.value })
        }/>

        <br/>

        <button type="button" onClick={this.handleSubmitContactClick}>Submit</button>
        </form>

        <Link to='/contacts'>Contact List</Link>
      </div>
    )
  }
}

export default NewContact