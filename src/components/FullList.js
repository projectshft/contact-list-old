import { Link } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types';

/* maps over contacts' state and displays a list of each contact name. makes each
  contact a link to that contacts details based on the contacts id.
*/
const FullList = ({contacts}) => (
  <div>
    <Link to="/">Home</Link><br />
    <Link to="/roladex/new">Add New Contact</Link>
    <h1>Contacts List</h1>
    <ul>
      {contacts.map(c => (
        <li key={c.id}>
          <Link to={`/roladex/${c.id}`}>{c.name}</Link>
        </li>
      ))}
    </ul>
  </div>
)

// props passed in have to be of a certain type or error message is displayed

FullList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FullList
