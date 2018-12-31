import { Link } from 'react-router-dom'
import React from 'react'

//show full list of all contacts
const FullList = ({contacts}) => (            //FullRoster
    <div>
        <ul>
              {/* var uniqid = require('uniqid'); */}
{/* var id = uniqid.process(); */}
            {
                contacts.map(c => (
                <li key={c.id}>
                    <Link to={`/contacts/${c.id}`}>{c.name}</Link>
                </li>
            ))
            }
        </ul>
    </div>
)

console.log(FullList);
export default FullList