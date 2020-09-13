// component that will show the initial list of contacts
import React from 'react'
import { Link } from 'react-router-dom'

// create a function to render each contact entry to the first page
const FirstView = ({contacts}) => (
    <div>
        <ul>
            {
                contacts.map(c => (
                    <li key={c.id}>
                        <h3>{c.name}</h3>
                    </li>
                ))
            }
            <Link to='/contacts'><button>Go to contacts page</button></Link>
        </ul>
    </div>
)


export default FirstView
