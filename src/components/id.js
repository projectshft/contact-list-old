import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// !!! CHANGE THIS FILE NAME TO "person-detail.js"

// Component to render each person's detailed contact info
class Id extends React.Component {

   

    getStyle = () => {
        return {
            // Styling for each personal info panel
            // Strike-through if checkbox is checked
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            // textDecoration: this.props.person.completed ?
            // 'line-through' : 'none'
        }
    }

    

    render() {

            // Pulls out keys from the person object to be used as "shortcuts"
        // const { id, fullName, email } = this.props.person;

        // !!! LOOP THRU ROUTERPROPS TO GET DETAILED INFO FOR THE PERSON WITH ID WE WANT TO SHOW
        const matchId = this.props.routerProps.match.params.id; // set as const, then this.props.contacts.fullName of matching id --> see router example
        
        console.log('current state: ', this.props)
        console.log('find matchId is: ', matchId);

            // Renders each person's detailed info,
        return (
            <div style={this.getStyle()}>
                <Link className="btn" to={`/contacts`}>Back to Main</Link>

                <h3>PERSONAL INFO<br></br>
                    Name: { this.props.id } <br></br>
                    Email: { this.props.email }
                </h3> 


    
                <hr></hr>
        
            </div>          
        )
    }
}

// !! PROP-TYPES NOT IMPLEMENTED CORRECTLY
// Makes sure proptype passed from {Contacts} is an object
Id.propTypes = {
    person: PropTypes.object.isRequired
}


const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '10%',
    cursor: 'pointer',
    float: 'left'
}

export default Id;