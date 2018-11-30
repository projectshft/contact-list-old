import React from 'react'

const ContactsRow = ({contacts}) => {
    console.log(contacts);
    return (
        <tr>
          <td>{contacts[0].name}</td>
          <td><a className="edit " tabIndex='0'>edit</a></td>
          <td><a className="delete" tabIndex='0'>delete</a></td>
        </tr>
  )
}

export default ContactsRow
