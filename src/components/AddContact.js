import React from 'react'
import { Link } from 'react-router-dom';

const AddContact = () => {

    return (
        <div className="add-contact-form">
            <h2>Add Contact</h2>

            <form>

                <input id="input-name"/>

                <input id="input-email"/>

                <input id="input-phone"/>

                <input id="input-image"/>

                <button id="submit-contact" type="text">Add</button>

            </form>

            <Link to="/contacts">Back</Link>

        </div>
    )
}

export default AddContact;

