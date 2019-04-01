import React from 'react';
import {Link} from 'react-router-dom';

// TODO:
// !!! RENAME TO "add-new.js"
// How to embed link functionality into a submit button
// Add input fields for phone & image url

// Component to render input form for adding new contact info
class New extends React.Component {

constructor(props) {
    super(props);

    this.state = {
        fullName: '',
        email: ''
    }
}
   

    onSubmit = (e) => {
        e.preventDefault();
            //console.log(this.state.fullName, this.state.email)

        this.props.addContact(this.state.fullName, this.state.email);
        this.setState({ fullName: '' , email: ''});
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    // This doesn't work as intended
    toContacts = (e) => {
        <Link to={'/contacts'}></Link>
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h2>Add a New Contact</h2>
  
                <input style={{ flex: '10', padding: '5px' }}
                    type="text" 
                    name="fullName" 
                    placeholder="Full name" 
                    value={this.state.fullName}
                    onChange={this.onChange}
                />
            
                <input style={{ flex: '10', padding: '5px' }}
                    type="text" 
                    name="email" 
                    placeholder="Email address" 
                    value={this.state.email}
                    onChange={this.onChange}
                />

                <input 
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: 1}}
                    onClick={this.toContacts}
                />
                       
                <Link onSubmit={this.onSubmit.bind(this)} className="btn" to={`/contacts`}>Back to Main</Link>
            
            </form>         
        )
    }
}


export default New;