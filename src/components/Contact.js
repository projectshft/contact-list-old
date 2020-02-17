import { Link } from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

const Contact = ({ contactId, contacts }) => {
    const contact = _.find(contacts, { id: contactId });
    //set default for contact not find
    if (!contact) {
        return <div>this contact was not found !</div>
    }

    return (
        <div className=" row d-flex justify-content-center">
            <div className="card shadow col-5 bg-black rounded m-2 ">
                <div className="row">
                    <div className="col m-2">
                        <h5><a className="font-weight-normal">Name: </a> {contact.name} <br /><a className="font-weight-normal">phone: </a> {contact.phone}</h5>
                        <h5><a className="font-weight-normal">Email:</a> {contact.email}</h5><br />
                    </div>
                    <img className="m-2" src={contact.picture} width="120" height="120" />
                </div>
                <Link to='/'>Back</Link>
                <div className="col">

                </div>
            </div>
        </div>
    )
}


export default Contact;