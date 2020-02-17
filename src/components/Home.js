import React from 'react';
import { Link, Route } from 'react-router-dom'
import _ from 'lodash'

// generate constact list
const Home = ({ contacts, deleteContact, editContact }) => {

    return (
        <div>
            <div className="d-flex align-items-center justify-content-center ">
                <h4 className="m-4 d-flex align-items-center ">Contacts</h4>
                <Link to='/AddContact'><button id="addContact" className="btn btn-primary btn-sm">Add Contact</button></Link>
            </div>
            <div>
                <ul >
                    {
                        contacts.map(p => (
                            <ul className="d-flex justify-content-center " key={p.id}>
                                <div className="card shadow col-6 m-2"  >
                                    <div className="card-body d-inline-block ">
                                        <Link to={`/Contact/${p.id}`} style={{ color: '#000000' }}><img src={p.picture} width="72" height="72" />  &nbsp;&nbsp;&nbsp;<a className="font-weight-bold"> {p.name}</a></Link>
                                            <div className="d-inline-block float-right">
                                            <Link to={`/edit/${p.id}`}>
                                                <button className="btn-sm btn-outline-success m-2 justify-content-lg-end font-weight-bold" onClick={() => editContact(p.id)} >Edit</button>
                                            </Link>
                                            <button className="btn-sm btn-outline-danger m-2 justify-content-lg-end font-weight-bold" onClick={() => deleteContact(p.id)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        ))
                    }
                </ul>
            </div>
        </div>
    )

};

export default Home;

