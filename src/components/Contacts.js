import React, { Component } from 'react';

//we will use a class component because Contacts will be stateful
export class Contacts extends Component {
    //Contacts should hold all of the contact info state

    render() { //Contacts will need to loop through the state and output on the page
        return (
            // contacts will need to call a method on the prop that will then be available for the app
            <div>
                <h3>This is the Contacts Component</h3>
            </div>
        )
    }
}
//should use proptypes to validate the information that is coming in

export default Contacts;
