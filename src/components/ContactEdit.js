import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'


class ContactEdit extends React.Component {
    
    constructor (props) {
      super (props)
      const contact = _.find(this.props.contacts, { id: this.props.contactId });

      this.state = {
        id: contact.id,
        name: contact.name,
        phone: contact.phone,
        email: contact.email,
        imageURL: contact.imageURL
      }
  
      this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
    }

  
    handleSubmitContactClick () {
  
      const newContact = {
        id: this.state.id,
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        imageURL: this.state.imageURL
      };
  
      this.props.editContact(newContact.id, newContact)
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
          <input type='text' className='form-control' onChange={event =>
            this.setState({ phone: parseInt(event.target.value, 10) })
          }/>
  
          <br/>
  
          <label>Email:</label>
          <input type='text' className='form-control' onChange={event =>
            this.setState({ email: event.target.value })
          }/>
  
          <label>Image URL:</label>
          <input type='text' className='form-control' onChange={event =>
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
  
  export default ContactEdit
  