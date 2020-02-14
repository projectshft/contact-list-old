import React from 'react';
import { Link, Route } from 'react-router-dom'
import AllContacts from './AllContacts';
//import Home from './App';

const Home = ({contacts}) => {
   
    return (
        <div>
            <div className="d-flex align-items-center ">
                <h4 className="m-4">Contacts</h4>
                <button id="addConatct" className="btn btn-primary btn-sm" onClick={this.handleAddContact}>Add Contact</button>
            </div>
            <div>
            <ul>
        {
        contacts.map(p => (
          <ul key={p.id}>
                    <div className="card col-5">
                    <div className="card-body">
                         name -   <Link to={`/Contact/${p.id}`}>{p.name}</Link>,    
                         <button className="btn badge-success m-2 justify-content-lg-end">edit</button>
                         <button className="btn badge-warning m-2 ">delete</button>
                         
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

