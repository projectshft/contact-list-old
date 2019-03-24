import React from 'react';


// Component to render each person's contact info

// Renders name, email, phone, photo
// Back button to go back to {contacts component}

class Id extends React.Component {

    goBack () {
        console.log('Back clicked!')
      }

    render() {
        return (
            <div>
                <h2>Personal info:</h2> 
                <h3>{this.props.name}</h3>
                <button onClick={this.goBack}>Back</button>
            </div>          
        )
    }
}

export default Id;