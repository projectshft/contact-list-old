import React from 'react';
import { Link, Route } from 'react-router-dom'
import AllContacts from './AllContacts';
import _ from 'lodash'
import App from '../App';

const Home = ({ contacts, deleteContact }) => {
   
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
                                <div className="card col-7 ">
                                    <div className="card-body d-inline-block ">
                                        name -   <Link to={`/Contact/${p.id}`}>{p.name}</Link>,
                                        <div className="d-inline-block float-right">
                                            <button className="btn-sm badge-success m-2 justify-content-lg-end">edit</button>
                                            <button className="btn-sm badge-warning m-2 justify-content-lg-end" onClick={() => deleteContact(p.id)}>delete</button>
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

