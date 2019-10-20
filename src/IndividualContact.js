import React from 'react';
 

const IndividualContact = (props) => {


    return (
        <li>
            <span>{props.contacts.name} - {} -  {} </span>
            <hr />
        </li>
    )
}

export default IndividualContact
