// Route = /new
// generate unique id
// SUBMIT button-- > /
//USE PROPTYPES



import React from 'react';


class ContactForm extends React.Component {
    constructor() {
        super()
        this.state = {
            id: Math.round(Math.random() * 100000000),
            name: '',
            image_url: '',
            email: '',
            phone_number: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    //After clicking "submit", the user should be re-routed back to the / view where they'll see all their contacts.
    handleSubmit = (e) => {
        e.preventDefault();

        const { addContact, history } = this.props;
        console.log("Submitted");
        
        const newContact = {
            id: this.state.id,
            name: this.state.name,
            image_url: this.state.image,
            email: this.state.email,
            phone_number: this.state.phone_number
        };
        console.log(newContact)
        
        addContact(newContact)
        history.push('/')
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <div>
                {/* When you need to handle multiple controlled input elements, you can add a name attribute to each element and let the handler function choose what to do based on the value of event.target.name. */}
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label>Name:
                        <input type='text' placeholder="First Last" name="name" onChange={e => this.handleChange(e)} />
                    </label>

                    <br />

                    <label>Phone Number:
                        <input type="text" placeholder="(123) 456-7890" name="phone_number" onChange={e => this.handleChange(e)} />
                    </label>

                    <br />

                    <label>Email:
                        <input type="text" name="email" onChange={e => this.handleChange(e)} />
                    </label>

                    <br />

                    <label>Image URL:
                        <input type="text" name="image_url" onChange={e => this.handleChange(e)} />
                    </label>

                    <br />
                    <button type="submit">Submit</button>
                </form>




            </div>
        )
    }
}



export default ContactForm;
