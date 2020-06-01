import {Link} from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'

class AddContact extends React.Component {
    constructor() {
        super()

        this.state = {
            id: '',
            name: '',
            phone: '',
            email: '',
            imageURL: ''
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

            this.props.addContact(newContact)
            this.props.history.push('/')

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

                    <Link to='/'>Back</Link>
                </form>
            </div>
        )
    }
}
//sets Proptypes
AddContact.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    imageURL: PropTypes.string
};

export default AddContact
