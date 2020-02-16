import {Link} from 'react-router-dom'
import React from 'react'

//maps through each individual contact and prints into list with edit and delete button
const ContactList = ({contacts, deleteContact}) => (
    <div>
        <table>
            <tbody>
                {contacts.map(c => (
                    <tr key={c.id}>
                        <td>
                            {//links to the contact details page
                            }
                            <Link to={`/contact/${c.id}`}>{c.name}</Link>
                        </td>

                        <td>
                            {//links to ContactEdit page
                            }
                            <Link to ={`/contact/${c.id}/edit`}>
                                <button>Edit</button>
                            </Link>
                        </td>

                        <td>
                            {//calls the deletefunction on App and allows user to delete contact
                            }
                            <button onClick={() => deleteContact(c.id)}>Delete</button>
                        </td>

                    </tr>
                   )
                  )
                }
            </tbody>
        </table>
    </div>
)

export default ContactList
