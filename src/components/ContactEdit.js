import {Link} from 'react-router-dom'
import React from 'react'
import _ from 'lodash'

//allows user to edit contact info
class ContactEdit extends React.Component {
    //creates a new state
    constructor(props) {
        super(props)
        const contact = _.find(this.props.contacts, {id: this.props.contactId});
        //condtion if ID number was found no state is created
        if (contact === undefined) {
            this.state = {}
        } else {
            //creates state if ID number is matched
            this.state = {
                id: contact.id,
                name: contact.name,
                phone: contact.phone,
                email: contact.email,
                imageURL: contact.imageURL
            }
            //binds function to this state
            this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
        }
    }

    //called when submit button is clicked 
    //calls editcontact function on main App
    handleSubmitContactClick() {

        const newContact = {
            id: this.state.id,
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            imageURL: this.state.imageURL
        };
        //alerts if letters are entered in for number. allows user to leave blank
        if (isNaN(this.state.phone)) {
            alert('The phone number must only contain numbers')
        } else {
            this.props.editContact(newContact.id, newContact)
            this.props.history.push('/contact')
        }
    }

    render() {
        //if id number is undefine will say sory the contact does not exist
        if (this.state.id === undefined) {
            return <div>Sorry, but that contact was not found</div>
        } else {

            return (
                <div className='row'>
                    <form>
                        <label >Name:</label>
                        <input
                            className='form-control'
                            type='text'
                            placeholder={this.state.name}
                            onChange={event => this.setState({name: event.target.value})}/>

                        <br/>

                        <label>Phone Number:</label>
                        <input
                            type='text'
                            className='form-control'
                            placeholder={this.state.phone}
                            onChange={event => this.setState({phone: event.target.value})}/>

                        <br/>

                        <label>Email:</label>
                        <input
                            type='text'
                            className='form-control'
                            placeholder={this.state.email}
                            onChange={event => this.setState({email: event.target.value})}/>

                        <label>Image URL:</label>
                        <input
                            type='text'
                            className='form-control'
                            placeholder={this.state.imageURL}
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
}

export default ContactEdit
