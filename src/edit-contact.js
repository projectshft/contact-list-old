import React from 'react'
import { Link } from 'react-router-dom'
import Contacts from './Contacts';
import PropTypes from 'prop-types'



class EditContact extends React.Component {
    constructor (props) {
        super()

        this.state = {
            name: '',
            image: '',
            email: '',
            phone_number: '',
            id: null
            
        }
    }

    componentDidMount() {
        let contactToEdit = this.props.getContactById(parseInt(this.props.match.params.id, 10))
        this.setState({ 
            name: contactToEdit.name, 
            image: contactToEdit.image, 
            email: contactToEdit.email, 
            phone_number: contactToEdit.phone_number, 
            id: contactToEdit.id 
        })
    }

    render() {
        return (    
            <div className="container">
                <div className="row mb-3">
                    <Link to='/'>Back</Link>
                </div>
                <div className="row">
                    <form id="edit-contact-form">
                        <label>Name</label>
                        <input 
                            type='text'
                            className='form-control'
                            defaultValue={this.state.name}
                            onChange={(e) => this.setState({name: e.target.value})}
                            onKeyPress={(e) => {if (e.which = 13) {
                                this.props.editContact(this.state) }
                            }}
                        /><br/>
                
                        <label>Image</label>
                        <input 
                            type='text' 
                            className='form-control' 
                            defaultValue={this.state.image}
                            onChange={(e) => this.setState({image: e.target.value})} 
                        /><br/>
                
                        <label>Email</label>
                        <input 
                            type='text' 
                            className='form-control' 
                            defaultValue={this.state.email}
                            onChange={(e) => this.setState({email: e.target.value})} 
                        /><br/>
    
                        <label>Phone Number</label>
                        <input 
                            type='text' 
                            className='form-control' 
                            defaultValue={this.state.phone_number} 
                            onChange={(e) => this.setState({phone_number: e.target.value})}
                        /><br/>
                
                        <Link to="/">
                        <button type="button" className="btn btn-primary" onClick={() => this.props.editContact(this.state)}>Save</button>
                        </Link>
                    </form>
                </div>
            </div>
        )
    }
    
}

EditContact.propTypes = {
    getContactById: PropTypes.func.isRequired,
    editContact: PropTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            id:PropTypes.string
        })
    })
}
    
export default EditContact