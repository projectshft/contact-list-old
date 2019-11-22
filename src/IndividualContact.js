import _ from 'lodash'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';


class IndividualContact extends Component {
    constructor(props) {
        super(props)

    }




    render() {
        const contact = _.find(this.props.contacts, { id: parseInt(this.props.props.match.params.id, 10) });
        if (!contact) {
            return <div>Sorry, but the contact was not found</div>;
        }
        return (
            <div>
                <h1>
                    {contact.name}
                </h1>
                <hr />
                <Link to="/contacts">Back</Link>
                <hr />
                <img height="300" width="400" src={contact.imageUrl}></img>
                <h3>Email:{contact.email}</h3>
                <h3>Phone:{contact.number}</h3>

            </div>
        );

    }


};
export default IndividualContact