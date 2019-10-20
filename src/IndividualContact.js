import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
 

const IndividualContact = props => {
    const contact = ContactAPI.get(parseInt(props.match.params.number, 10));
    if (!contact) {
        return <div>Sorry, but the contact was not found</div>;
    }
    return (
        <div>
            <h1>
                {contact.name} 
             </h1>
                <hr/>
            <h3>Name: {contact.name}</h3>
            <h3>Number: {contact.nunber}</h3>
            <h3>Phone: {contact.phone}</h3>
            <h3>Photo: {contact.imageUrl}</h3>
            <Link to="/contact/:">Back</Link>
        </div>
    );
};
export default IndividualContact