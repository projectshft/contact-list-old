import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import uuid from 'uuid'

class ContactsNew extends Component {
    constructor() {
        super()

        this.state = {
            id: '',
            name: '',
            email: '',
            phone_number: '',
            imgURL: ''
        }

        this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
    }

    //this function is run to add the new contact tot eh current state in the App.js file when the submit button is clicked
    handleSubmitContactClick() {
        const newContact = {
            id: uuid(),
            name: this.state.name,
            email: this.state.email,
            phone_number: this.state['phone_number'],
            imgURL: ''

        };

        this.props.addContact(newContact)
        this.props.history.push('/contacts')
    }

    render() {
        return (
            <div>
                <form>
                    <label>Name</label>
                    <input type='text' className='form-control' onChange={event =>
                        this.setState({ name: event.target.value })
                    } />

                    <br />

                    <label>email</label>
                    <input type='text' className='form-control' onChange={event =>
                        this.setState({ email: event.target.value })
                    } />

                    <br />

                    <label> Phone Number</label>
                    <input type='text' className='form-control' onChange={event =>
                        this.setState({ phone_number: parseInt(event.target.value, 10) })
                    } />

                    <br />

                    <label>imgURL</label>
                    <input type='text' className='form-control' onChange={event =>
                        this.setState({ imgURL: event.target.value })
                    } />

                    <button type="button" onClick={this.handleSubmitContactClick}>Submit</button>
                </form>

                <Link to='/contacts'>contacts</Link>
            </div>
        )
    }
}

export default ContactsNew


