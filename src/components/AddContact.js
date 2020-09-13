// component that will serve as button to route to the /contacts/new
import React from 'react';
import { Link } from 'react-router-dom'

const AddContact = () => (
    <div>
        <h1><u>Contacts</u>&nbsp;<Link to='/contacts/new'><button className='btn btn-info btn-lg add-contact'>Add Contact</button></Link></h1>      
    </div>
)

export default AddContact