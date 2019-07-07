import { Link } from 'react-router-dom'
import React from 'react'


const NewContact = props => {
    const newContact = {
        name: '',
        image: '',
        email: '',
        phone_number: ''
    }

    const handleSubmitNewContactClick  = () => {
        props.addContact(newContact);
    }
    
    return (
        <div className="row">
            <form>
                <label className="col-md-2">Name</label>
                <input type='text' className='form-control'onChange={event =>
                newContact.name = event.target.value 
                }/>
        
                <br/>
        
                <label className="col-md-2">Image</label>
                <input type='text' className='form-control'onChange={event =>
                newContact.image = event.target.value 
                }/>
        
                <br/>
        
                <label className="col-md-2">Email</label>
                <input type='text' className='form-control'onChange={event =>
                newContact.email = event.target.value 
                }/>

                <br/>

                <label className="col-md-2">Phone Number</label>
                <input type='text' className='form-control'onChange={event =>
                newContact.phone_number = event.target.value 
                }/>
                    
                <br/>
        
                <button type="button" onClick={handleSubmitNewContactClick}>Submit</button>
            </form>
        
            <Link to='/contacts'>Back</Link>
        </div>
    )
    
}

export default NewContact