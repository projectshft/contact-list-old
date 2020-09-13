import { Link } from 'react-router-dom'
import React from 'react'

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

        console.log(this)
        
        const newContact = {
            id: generateId(),
            name: this.state.name,
            image_url: this.state.image_url,
            email: this.state.email,
            phone_number: this.state.phone_number
        }
        //console.log(this.props)
        this.props.addContact(newContact)
        this.props.history.push('/contacts')
    }

    render () {
        return (
            <div>
                <form>
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

                    <label>email</label>
                    <input type='text' className='form-control' onChange={event => 
                        this.setState({email: event.target.value})
                    }/>

                    <br/>

                    <label>Phone Number</label>
                    <input type='text' className='form-control' onChange={event =>
                        this.setState({phone_number: event.target.value})
                    }/>
                </form>
                <button type="button" onClick={this.handleSubmitContactClick}>Submit</button>
                <br/>
                <Link to='/contacts'>Contacts</Link>
            </div>
        )
    }
}

export default NewContact