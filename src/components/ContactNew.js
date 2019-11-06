import { Link } from 'react-router-dom'
import React from 'react'

class ContactNew extends React.Component {
  constructor () {
    super ()

    

    this.state = {
      id:0,
      name: '',
      image: '',
      email: '',
      number: ''

    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
  }

  //adjusted the format so it generated a 10 digit ID everytime
  generateId = () => Math.floor(100000 + Math.random() * 900000)

  handleSubmitContactClick () {
    const newContact = {
      id: this.generateId(),
      name: this.state.name,
      image: this.state.imgUrl,
      email: this.state.email,
      number: this.state.number,
    };
//pushes to the array of contacts
    this.props.addContact(newContact)
    this.props.props.history.push('/contacts')
  }

  render () {
    return (
      <div>
        <form>
        <label>Name</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ name: event.target.value })
        }/>

        <br/> <br/>

        <label>image</label>
        <input type='' className='form-control'onChange={event =>
          this.setState({ imgURL: event.target.value })
        }/>

        <br/> <br/>

        <label>email</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ email: event.target.value })
        }/>

        <br/><br/>

        <label>number</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ number: event.target.value })
        }/>

        <br/><br/>

        <button type="button" onClick={this.handleSubmitContactClick}>Submit</button>
        <br/>

        </form>

        <br/><br/>


        <Link to='/contacts'>Back</Link>
        
      </div>
    )
  }
}

export default ContactNew
