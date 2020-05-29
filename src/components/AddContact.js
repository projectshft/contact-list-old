import React from 'react'
import { Link } from 'react-router-dom';

const AddContact = () => {

    return (
        <div className="add-contact-form">
            <h2>Add Contact</h2>

            <form>

                <input id="input-name" placeholder="name" />

                <input id="input-email" placeholder="email address" />

                <input id="input-phone" placeholder="phone number" />

                <input id="input-image" placeholder="image URL" />

                <button id="submit-contact" type="text">Add</button>

            </form>

            <Link to="/contacts">Back</Link>

        </div>
    )
}

export default AddContact;

