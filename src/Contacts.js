import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import React from 'react'


const Contacts = (props) => {
    const functioon = () => {
        return 45
    }

    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2 mr-5 pt-4">  
                    <h1>Contacts</h1>
                </div>
                <div className="col-sm-4">
                    <Link to="/new">
                        <button className="btn btn-primary btn-lg btn3d">Add Contact</button>
                    </Link>
                </div>
            </div>
            
            
            {props.contacts.map(c => (
                <div className="row">
                    <div className="col-md-3 pt-1">
                        <Link to={`/${c.id}`}>{c.name}</Link><br/>
                    </div>
                    <div>
                        <Link 
                            to= {`/edit/${c.id}`}>
                            <a href="#" className="col-md-3 text-center"><u>edit</u></a>
                        </Link>
                    </div>
                    <div>
                        <a href="#" onClick={ () => props.deleteContact(c)} className="col-md-3 text-center"><u>delete</u></a>
                    </div>
                </div>
            ))}
                 
        </div>
    )
};

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired
}

export default Contacts