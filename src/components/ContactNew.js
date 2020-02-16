import {Link} from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'

class ContactNew extends React.Component {
    //constructs a new state for the new contact
    constructor() {
        super()

        this.state = {
            id: '',
            name: '',
            phone: '',
            email: '',
            //gives a default profile pic
            imageURL: 'https://avatarfiles.alphacoders.com/151/151212.jpg'
        }
        //binds the functions
        this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
    }
    //called when user hits submit
    handleSubmitContactClick() {
        //generates an id number
        const generateId = () => Math.round(Math.random() * 100000000)

        //sets the details for the new contact
        const newContact = {
            id: generateId(),
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            imageURL: this.state.imageURL
        };
        //if no name is enter gives a warning
        if (!this.state.name) {
            alert('You must enter the contacts name.')
        //if phone number has letters in it, gives warning. Can leave blank or have numbers
        } else if (isNaN(this.state.phone)) {
            alert('The phone number must only contain numbers')
        //if the above two are not true, addContact on main App is called
        //user is routed back to main page
        } else {
            this.props.addContact(newContact)
            this.props.history.push('/contact')
        }
    }

    render() {
        return (
            <div className='row'>
                <form>
                    <label >Name:</label>
                    <input
                        className='form-control'
                        type='text'
                        onChange={event => this.setState({name: event.target.value})}/>

                    <br/>

                    <label>Phone Number:</label>
                    <input
                        type='text'
                        className='form-control'
                        onChange={event => this.setState({phone: event.target.value})}/>

                    <br/>

                    <label>Email:</label>
                    <input
                        type='text'
                        className='form-control'
                        onChange={event => this.setState({email: event.target.value})}/>

                    <label>Image URL:</label>
                    <input
                        type='text'
                        className='form-control'
                        onChange={event => this.setState({imageURL: event.target.value})}/>
                    <br></br>

                    <button type="button" onClick={this.handleSubmitContactClick}>Submit</button>

                    <br></br>
                    <br></br>

                    <Link to='/contact'>Back</Link>
                </form>
            </div>
        )
    }
}
//sets Proptypes as strings, only requires ID and name
ContactNew.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string,
    email: PropTypes.string,
    imageURL: PropTypes.string
};

export default ContactNew
