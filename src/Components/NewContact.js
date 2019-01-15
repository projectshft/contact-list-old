import { Link } from 'react-router-dom'
import React from 'react'

class NewContact extends React.Component {
  constructor() {
    super()

    this.state = {
      id: '',
      name: '',
      email: '',
    }
    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
    
  }

  handleSubmitContactClick () {
    const newContact = {  
      id: Math.round(Math.random() * 100000000),
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    }
    this.props.addContact(newContact)
    this.props.routerProps.history.push('/contacts')
    
  }
  render() {
    return (
      <div>
        <form>
        <label>Name</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ name: event.target.value })
        }/>

 <br/>

        <label>Email:</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ email: event.target.value })}/>

        <br/>

        <label>Phone Number:</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ phonenumber: parseInt(event.target.value, 10) })}/>


         <button type="button" onClick={this.handleSubmitContactClick}>Submit</button>
        </form>
        <Link to='/contacts'>Back to Contact List</Link>
      </div>
    )
  }
}

export default NewContact