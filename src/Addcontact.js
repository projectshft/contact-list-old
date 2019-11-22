import { BrowserRouter, Link } from 'react-router-dom';
import React, { Component } from 'react';


// Function that takes in information from user via a form and passes information back to state object
class AddContact extends Component {
    constructor(props) {
        super(props)

        this.state = {


            name: null,
            email: null,
            imageUrl: null,
            number: null
        }
    }

    render() {
        const contact = {
            name: this.state.name,
            email: this.state.email,
            imageUrl: this.state.imageUrl,
            number: this.state.number
        }
        return (
            <div className="container">
                <form className="new-contact">
                    <div className="container">
                        <div className="form-row">
                            <div className="form-group">
                                <label for="inputName">Name: </label>
                                <input onChange={(e) => { this.setState({ name: e.target.value }) }} value={this.state.name} type="text" id="name" name="name" required minlength="8" maxlength="15" size="30" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label for="inputemail">E-mail: </label>
                                <input onChange={(e) => { this.setState({ email: e.target.value }) }} value={this.state.email} type="email" id="email" pattern="+@globex.com" size="30" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-row">
                                <div className="form-row">
                                    <div className="form-row">
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label for="inputUrl">Image Url: </label>
                                                <input onChange={(e) => { this.setState({ imageUrl: e.target.value }) }} value={this.state.imageUrl} type="url" name="url" id="url" placeholder="" pattern="https://.*" height="42" width="42" size="30" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label for="inputPhone">Phone: </label>
                                <input onChange={(e) => { this.setState({ number: e.target.value }) }} value={this.state.number} type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="ex. 555-555-5555" size="30" required />
                            </div>
                        </div>
                    </div>
                    <Link to="/contacts">
                        <button onClick={() => this.props.addContact(contact)} type="button" className="btn btn-primary">
                            Add Contact
                        </button>
                    </Link>
                </form>
            </div>



        )
    }
}

export default AddContact
