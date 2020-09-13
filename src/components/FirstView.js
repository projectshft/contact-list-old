// component that will show the initial list of contacts
import React from 'react'

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
        </ul>
    </div>
)


export default FirstView
