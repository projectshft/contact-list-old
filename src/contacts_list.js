import React from 'react'

const ContactsList = (props) => {
    return (
        <h1>Contacts   <button className="btn btn-primary" onClick={props.addContact}>Add Contact</button></h1>
    )
}

export default ContactsList