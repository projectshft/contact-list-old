import React from 'react';

// Component to render input form and submit button

// Input boxes for name, email, phone, photo
// Submit button redirects to </contacts>
// Pass input values as props to state at </app>

class New extends React.Component {

    submitEntry() {
        console.log('Submit clicked!')
    }
   

    render() {
        return (
            <div>
                <h2>Add a New Contact</h2>
  
                <input 
                    type="text" 
                    id="name" 
                    placeholder="Full name" 
                    //value={this.state.name} 
                    onChange={event => this.setState({ name: event.target.value })}
                />

                <button 
                    onClick={this.submitEntry} 
                    type="button">
                    Submit
                </button>
            
            </div>         
        )
    }
}

export default New;