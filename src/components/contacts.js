import React from 'react';
import {Link} from 'react-router-dom';

// Component to render list of names

// Each name is clickable, and redirects user to </id>
// Button to add new contact, and redirects user to </new>

class Contacts extends React.Component {


    goToNew () {
        console.log('Add clicked!')
      }

    render() {
        return (
            <div>
                <h2>Contacts List:</h2> 
                <h3>{this.props.name}</h3>
                {/* <li>
                    <Link to={'/contacts/${id}'}>{this.props.name}</Link>
                </li> */}
                <button onClick={this.goToNew}>Add</button>
            </div>          
        )
    }
}

export default Contacts;