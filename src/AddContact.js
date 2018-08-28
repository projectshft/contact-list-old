import { Link, Redirect } from 'react-router-dom'
import React from 'react'

class AddContact extends React.Component {
  constructor () {
    super ()

    this.state = {
      image: '',
      name: '',
      email: '',
      phone: '',
      contactId: 0
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
  }

  handleSubmitContactClick () {
    this.setState({contactAdded: true,
                   contactId: Math.round(Math.random() * 100000000)},
                 () => {this.props.addContact(this.state)})
  }

  render () {
    if (this.state.contactAdded === true) {
      return <Redirect to='/contacts' />
    }


    return (
      <div>
        <form>
        <label>Image</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ image: event.target.value })
        }/>

        <br/>

        <label>Name</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ name: event.target.value })
        }/>

        <br/>

        <label>Email</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ email: event.target.value })
        }/>

        <br/>

        <label>Phone</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ phone: parseInt(event.target.value, 10) })
        }/>

        <button type="button" onClick={this.handleSubmitContactClick}> Create </button>
        </form>

        <Link to='/contacts'>Back</Link>
      </div>
    )
  }
}

export default AddContact
