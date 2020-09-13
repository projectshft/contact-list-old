import { Link } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'

class NewContact extends React.Component {
    constructor () {
        super()

        this.state = {
            id: '',
            name: '',
            image_url: '',
            email: '',
            phone_number: ''
        }
        
        this.handleSubmitContactClick = this.handleSubmitContactClick.bind(this)
    }

    handleSubmitContactClick () {
        const generateId = () => Math.round(Math.random() * 100000000)
        
        const nameCheck = () => {
            if (!this.state.name) {
               return 'No Name Added'
            } else {
                return this.state.name
            }
        }

        const imgCheck = () => {
            if (!this.state.image_url) {
                return 'https://upload.wikimedia.org/wikipedia/commons/1/15/No_image_available_600_x_450.svg'
            } else {
                return this.state.image_url
            }
        }

        const emailCheck = () => {
            if (!this.state.email) {
                return 'No E-mail Added'
            } else {
                return this.state.email
            }
        }

        const phoneCheck = () => {
            if (!this.state.phone_number) {
                return 'No Phone Number Added'
            } else {
                return this.state.phone_number
            }
        }

        const newContact = {
            id: generateId(),
            name: nameCheck(),
            image_url: imgCheck(),
            email: emailCheck(),
            phone_number: phoneCheck()
        }

        this.props.addContact(newContact)
        this.props.history.push('/contacts')
    }

    render () {
        return (
            <div className='container col-md-4'>
                <Link to='/contacts'>Contacts</Link>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className='form-control' onChange={event =>
                            this.setState({name: event.target.value})
                        }/>

                        <br/>

                        <label>Image</label>
                        <input type='text' className='form-control' onChange={event =>
                            this.setState({image_url: event.target.value})
                        }/>

                        <br/>

                        <label>E-mail</label>
                        <input type='text' className='form-control' onChange={event => 
                            this.setState({email: event.target.value})
                        }/>

                        <br/>

                        <label>Phone Number</label>
                        <input type='text' className='form-control' onChange={event =>
                            this.setState({phone_number: event.target.value})
                        }/>
                    </div>
                </form>
                <button type="button" onClick={this.handleSubmitContactClick}>Submit</button>
            </div>
        )
    }
}

NewContact.propTypes = {
    addContact: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    contacts: PropTypes.array.isRequired
}
export default NewContact