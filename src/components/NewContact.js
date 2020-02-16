import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

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
    const contact = this.state
    if(!contact.name || !contact.phoneNumber || !contact.email || !contact.img_url){
      //what is empty

    } else {
      const generateId = () => Math.round(Math.random() * 100000000);
      const newContact = {
        id: generateId(),
        name: this.state.name,
        phoneNumber: this.state.phoneNumber,
        email: this.state.email,
        img_url: this.state.img_url,
      };
    
      this.props.addContact(newContact)
      this.props.history.push('/contacts')
    }
  }
    

  render () {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Contact's Name" onChange={event =>
            this.setState({ name: event.target.value })
            } required/>
          </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" className="form-control" placeholder="Contact's Phone Number" onChange={event =>
            this.setState({ phoneNumber: event.target.value })
          } required/>
        </div>

        <div className="form-group">
        <label>Email</label>
          <input type="text" className="form-control" placeholder="Contact's Email" onChange={event =>
            this.setState({ email: event.target.value })
          } required/>
        </div>

        <div className="form-group">
        <label>Photo</label>
          <input type="text" className="form-control" placeholder="Contact's Photo" onChange={event =>
            this.setState({ img_url: event.target.value })
          } required/>
        </div>

        <button type="submit" className="btn btn-primary" onClick={this.handleSubmitContactClick}>Submit</button>
      </form>

      <br />

      <Link to='/contacts'>Contact List</Link>
    </div>
    )
  }
}

NewContact.propTypes = {
    contacts: PropTypes.array.isRequired
};

export default NewContact