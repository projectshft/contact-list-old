import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

export class Contact extends Component {
    constructor() {
       super();
        this.handleClick = this.handleClick.bind(this);

    }
    // each contact on the main route should be clickable; when clicked, leads to new route
    handleClick = () => {
        let path = `/contacts/${this.props.contact.id}`;
        this.props.history.push(path);
    }
    render() {
        //destructure props
        const { contact } = this.props;

        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item shadow-sm bg-white rounded" onClick={this.handleClick} >{contact.name} </li>
                </ul>
            </div>
        )
    }
}

//proptypes to validate the data coming in
Contact.propTypes = {
    contact: PropTypes.object.isRequired,

}

//wrap the component in withRouter to give it access to this.props.history to allow routing
export default withRouter(Contact);
