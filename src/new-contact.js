import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import React from 'react'


const NewContact = props => {
    const newContact = {
        name: '',
        image: '',
        email: '',
        phone_number: ''
    }
    //THus functions clears the NewContact form after the submmit button has been clicked and the new contact submitted.
    const clearInputForm = () => {
        document.getElementById("new-contact-form").reset()
    }

    //This function creates a random number that will serve as a unique id for the newly created Contact in the appstate.
    const generateNewContactId = () => Math.floor(Math.random() * 100000000)

    const handleSubmitNewContactClick  = () => {
        newContact.id = generateNewContactId();
        props.addContact(newContact);
        clearInputForm()
    }
    
    return (
        <div className="container">
            <div className="row mb-3">
                <Link to='/'>Back</Link>
            </div>
            <div className="row">
                <form id="new-contact-form">
                    <label >Name</label>
                    <input type='text' className='form-control' onChange={event =>
                    newContact.name = event.target.value 
                    }/>
            
                    <br/>
            
                    <label>Image</label>
                    <input type='text' className='form-control' onChange={event =>
                    newContact.image = event.target.value 
                    }/>
            
                    <br/>
            
                    <label>Email</label>
                    <input type='text' className='form-control' onChange={event =>
                    newContact.email = event.target.value 
                    }/>

                    <br/>

                    <label>Phone Number</label>
                    <input type='text' className='form-control'  onChange={event =>
                    newContact.phone_number = event.target.value 
                    }/>
                        
                    <br/>
                    <Link to="/">
                    <button type="button" onClick={handleSubmitNewContactClick}>Submit</button>
                    </Link>
                </form>
            
                
            </div>
        </div>
    )
    
}

NewContact.propTypes ={
    addContact: PropTypes.func.isRequired
}

export default NewContact