import React from 'react'

const ContactsPage = ({contacts}) => {
    console.log(contacts);
    return (
      <div className="container">
          <div className="row d-flex justify-content-center">
            <h1>Contacts</h1>
            <button className="btn btn-primary btn-sm" type="button" name="button">Add Contact</button>
          </div>
          <div className="row d-flex justify-content-center">
            <table className="table contacts-list border">
              <tr>
                <td>First name</td>
                <td>Last name</td>
                <td><a className="edit " href="#">edit</a></td>
                <td><a className="delete" href="#">delete</a></td>
              </tr>
              <tr>
                <td>First</td>
                <td>Last</td>
                <td><a className="edit" href="#">edit</a></td>
                <td><a className="delete" href="#">delete</a></td>
              </tr>
            </table>
          </div>
      </div>
  )
}

export default ContactsPage
