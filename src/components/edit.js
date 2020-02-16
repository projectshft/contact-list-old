import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const Edit = ({ contactId, contacts, editContact }) => {
    console.log(contactId, contacts)
    const contact = _.find(contacts, { id: contactId });
    console.log(contact)

    if (!contact) {
        return <div>this contact was not found</div>
    }

    return (
        <div className="d-flex justify-content-center">
          <form className="col-8 justify-content-center">
            <label>Name</label>
            <input type='text' className='form-control' value={contact.name.toString()}  onChange={event =>
              this.setState({ name: event.target.value })
            } />
  
            <br />
  
            <label>Number</label>
            <input type='text' className='form-control' onSubmit={event =>
              this.setState({ number: parseInt(event.target.value, 10) })
            } />
  
            <br />
  
            <label>email</label>
            <input type='text' className='form-control' onChange={event =>
              this.setState({ email: event.target.value })
            } />
  
            <br />
  
            <label>Picture</label>
            <input type='text' className='form-control' onChange={event =>
              this.setState({ picture: event.target.value })
            } />
              <Link className="" to='/'>back</Link>
            <button type="button" className="btn btn-sm btn-info m-3 float-right" onClick={this.handleSubmitEditedContact}>Submit</button>
            
          </form>
  
          
        </div>
      )
}

export default Edit;