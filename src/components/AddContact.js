import { BrowserRouter, Switch, Route, Link} from "react-router-dom"
import React from "react"
import PropTypes from "prop-types"

class AddContact extends React.Component {
//update state with new user input
    state = {
      name: '',
      email: '',
      phone: '',
      thumbnail: '',
      id: ''
    }


  generateId = () => {
    return Math.round(Math.random() * 100000000)
  }

//add new contact to state

  handleSubmit = e => {
    const {history} = this.props.props;
    e.preventDefault();
    const {name, email, phone, thumbnail} = this.state;
    const newContact = {name, email, phone, thumbnail, id: this.generateId()};
    this.props.addContact(newContact);
    history.push('/Contacts');
  }

  render () {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
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
    this.setState({ phone: event.target.value })
  } />


    <label>thumbnail: </label>
    <input type ='text' className='form-control' onChange={event =>
    this.setState({ thumbnail: event.target.value })
  } />

    <button type="submit">Submit</button>
    </form>

    <Link to='/Contacts'> Back to Contact List</Link>
  </div>
    )
  }
}

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired,
  props: PropTypes.shape({
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    })
  })
}

export default AddContact