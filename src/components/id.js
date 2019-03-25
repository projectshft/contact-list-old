import React from 'react';
import PropTypes from 'prop-types';


// Component to render each person's detailed contact info
class Id extends React.Component {


    getStyle = () => {
        return {
            // Styling for each personal info panel
            // Strike-through if checkbox is checked
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.person.completed ?
            'line-through' : 'none'
        }
    }

    

    render() {

            // Pulls out keys from the person object to be used as "shortcuts"
        const { id, fullName, email } = this.props.person;

            // Renders each person's detailed info,
            // with the option to delete 
        return (
            <div style={this.getStyle()}>

                <h3>PERSONAL INFO<br></br>

                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                
                    Name: { fullName } <br></br>
                    Email: { email }
                </h3>
                
                <button onClick={this.props.deleteId.bind(this, id)} style={btnStyle}>Delete</button>
                <hr></hr>
        
            </div>          
        )
    }
}

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