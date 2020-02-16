import { Link } from 'react-router-dom'
import React from 'react'

class ContactNew extends React.Component {
  constructor () {
    super ()

    this.state = {
      id: '',
      name: '',
      phone: 'N/A',
      email: 'N/A',
      imageURL: 'https://avatarfiles.alphacoders.com/151/151212.jpg'
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
  }

  handleSubmitContactClick () {
    const generateId = () => Math.round(Math.random() * 100000000)

    const newContact = {
      id: generateId(),
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      imageURL: this.state.imageURL
    };

    this.props.addContact(newContact)
    this.props.history.push('/contact')
  }

  render () {
    return (
      <div className='row'>
        <form>
        <label >Name:</label>
        <input className='form-control' type='text' onChange={event =>
          this.setState({ name: event.target.value })
        }/>

        <br/>

        <label>Phone Number:</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ phone: parseInt(event.target.value, 10) })
        }/>

        <br/>

        <label>Email:</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ email: event.target.value })
        }/>

        <label>Image URL:</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ imageURL: event.target.value })
        }/>
        <br></br>

        <button type="button" onClick={this.handleSubmitContactClick}>Submit</button>

        <br></br>
        <br></br>
    
        <Link to='/contact'>Back</Link>
        </form>
      </div>
    )
  }
}

export default ContactNew
