import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// !!! CHANGE THIS FILE NAME TO "person-detail.js"

// Component to render each person's detailed contact info
class ContactDetail extends React.Component {

    getStyle = () => {
        return {
            // Styling for each personal info panel
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
        }
    }


    render() {

        console.log('current state: ', this.props.contacts)
        

        // !!! LOOP THRU ROUTERPROPS TO GET DETAILED INFO FOR THE PERSON WITH ID WE WANT TO SHOW
        const matchId = this.props.routerProps.match.params.id; // set as const, then this.props.contacts.fullName of matching id --> see router example
            console.log('find matchId is: ', matchId);


        const contactMatch = this.props.contacts.find((person) => {

                person.id === matchId
        })
            console.log('contactMatch found: ', contactMatch)

        // Error if contact not found
        if(!contactMatch) {
            <h3>Contact not found</h3>
        }

        // Else, render each person's detailed info
        return (
            <div>
                    <Link className="btn" to={`/contacts`}>Back to Main</Link>      
                <hr></hr> 
    
                <div style={this.getStyle()}>
                    <h3 className="card">PERSONAL INFO<br></br>
                        Name: { this.props.contacts.firstName } { this.props.contacts.lastName } <br></br>
                        Email: { this.props.contacts.email } <br></br>
                        Phone: { this.props.contacts.phone } <br></br>
                    </h3> 
                        <img className="card-img" alt="" src={this.props.contacts.image} />
                    <hr></hr>  
                </div>       
            </div>   
        )
    }
}

// !! PROP-TYPES NOT IMPLEMENTED CORRECTLY
// Makes sure proptype passed from {Contacts} is an object
ContactDetail.propTypes = {
    person: PropTypes.object.isRequired
}

export default ContactDetail;