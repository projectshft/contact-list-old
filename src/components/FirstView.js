// component that will show the initial list of contacts
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import '../CSS/FirstView.css'


// create a function to render each contact entry to the first page as well add a button to link to the /contacts page
const FirstView = ({contacts}) => (
    <div id='first-view'>
        <h1 className='title'><u>Current Contacts</u></h1>
        <ul id='first-view-list'>
            {
                contacts.map(c => (
                    <li id='first-view-list-item' key={c.id}>
                        <h3>{c.name}</h3>
                    </li>
                ))
            }
            
        </ul>
        <Link to='/contacts'><button type='button' class='btn btn-info'>Go to contacts info page</button></Link>
    </div>
)
//define prop types
FirstView.propTypes = {
    contacts: PropTypes.array.isRequired

}

export default FirstView
