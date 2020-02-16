import { Link } from 'react-router-dom'
import React from 'react';

class NewContact extends React.Component {
  constructor () {
    super ()

    this.state = {
      name: '',
      phone: 0,
      email: '',
      image:'',
    }

    this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
  }

  handleSubmitContactClick () {

    const newContact = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      image: this.state.image
    };

    this.props.addContact(newContact)
    this.props.history.push('/contacts')
  }
}

  render() {
    return (
     <div>
        <h1 className="text-center">Add Contact</h1>
        <br></br>
        <form className="col-md-6 offset-md-3">
          <label>Name</label>
          <input type='text' className='form-control' onChange={event =>
            this.setState({ name: event.target.value })}/>
          <br></br>

          <label>Phone Number</label>
          <input type='text' className='form-control' onChange={event =>
            this.setState({ phone: event.target.value })}/>
          <br></br>

          <label>E-mail</label>
          <input type='text' className='form-control' onChange={event =>
            this.setState({ email: event.target.value })}/>
          <br></br>

          <label>Image</label>
          <input type='text' className='form-control' onChange={event =>
            this.setState({ image: event.target.value })}/>
          <br></br>

          <button type="button" type="submit" className="btn btn-info" onClick={this.handleSubmitContactClick}>Submit</button>
          <br></br>
          <Link to='/contacts' className="text-info">Back to Contacts</Link>
      </form>
    </div>
    )
  }
}
