import React from 'react';
import {Link} from 'react-router-dom';


// Component to render input form for adding new contact info
class AddContact extends React.Component {

constructor(props) {
    super(props);

    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        image: ''
    }
}
   

    onSubmit = (e) => {
        e.preventDefault();
        
        if (!this.state.firstName || !this.state.lastName || !this.state.email || !this.state.phone) {
            alert('Please complete form!')
        }

        this.props.addContact(this.state.firstName, this.state.lastName, this.state.email, this.state.phone, this.state.image);
        this.setState({ firstName: '', lastName: '', email: '', phone: '', image: ''});
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
                    name="firstName" 
                    placeholder="First name" 
                    value={this.state.firstName}
                    onChange={this.onChange}
                />

                <input style={{ flex: '10', padding: '5px' }}
                    type="text" 
                    name="lastName" 
                    placeholder="Last name" 
                    value={this.state.lastName}
                    onChange={this.onChange}
                />
            
                <input style={{ flex: '10', padding: '5px' }}
                    type="text" 
                    name="email" 
                    placeholder="Email address" 
                    value={this.state.email}
                    onChange={this.onChange}
                />

                <input style={{ flex: '10', padding: '5px' }}
                    type="text" 
                    name="phone" 
                    placeholder="Phone number" 
                    value={this.state.phone}
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


export default AddContact;