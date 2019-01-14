// Route = /new
// generate unique id
// SUBMIT button-- > /
//USE PROPTYPES


import { Link, withRouter } from "react-router-dom";
import React from 'react';


class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        const generateId = () => Math.round(Math.random() * 100000000);

        this.state = {
            id: generateId(),
            name: '',
            image_url: '',
            email: '',
            phone_number: ''
        }


        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //updates the state of the parent component and passes the new value 
    // handleChange = (event) => {
    //     this.setState({
    //         name: event.target.name,
    //         image_url: event.target.image || null,
    //         email: event.target.email,
    //         phone_number: event.target.phone
    //     });
    // };


    //After clicking "submit", the user should be re-routed back to the / view where they'll see all their contacts.


    handleSubmit = (event) => {
        console.log("Submitted");
        event.preventDefault();
        const newContact = {
            id: this.state.id,
            name: this.state.name,
            image_url: this.state.image,
            email: this.state.email,
            phone_number: this.state.phone_number
        };

        this.props.addContact(newContact)
        // this.props.history.push('/')
        // this.setState({
        //     name: event.target.name,
        //     image_url: event.target.image || null,
        //     email: event.target.email,
        //     phone_number: event.target.phone
        // });

    };
    // onChange = { this.handleChange }

    render() {
        return (
            <div>
                {/* When you need to handle multiple controlled input elements, you can add a name attribute to each element and let the handler function choose what to do based on the value of event.target.name. */}
                <form>
                    <label>Name:
                        <input type='text' placeholder="First Last" name="name" onChange={event => this.setState({ name: event.target.value })} />
                    </label>

                    <br />

                    <label>Phone Number:
                        <input type="text" placeholder="(123) 456-7890" name="phone_number" onChange={event => this.setState({ phone_number: event.target.value })} />
                    </label>

                    <br />

                    <label>Email:
                        <input type="text" name="email" onChange={event => this.setState({ email: event.target.value })} />
                    </label>

                    <br />

                    <label>Image URL:
                        <input type="text" name="image" onChange={event => this.setState({ image: event.target.value || null })} />
                    </label>

                    <br />
                    
                    <button type="submit" onSubmit={this.handleSubmit}>Submit</button>
                </form>

                {/* <Link to="/"> */}

                {/* </Link> */}

            </div>
        )
    }
}



export default withRouter(ContactForm);
