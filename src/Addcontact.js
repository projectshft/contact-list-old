import { BrowserRouter, Link } from 'react-router-dom';
import React, { Component } from 'react';
import { threadId } from 'worker_threads';


class AddContact extends Component {
    constructor() {
        super()

    }
   handleClick () {
       const contact = {
            name: this.state.nameInput,
            email: this.state.emailInput,
            imageUrl: this.state.imageUrlInput,
            number: this.state.numberInput
       }
       this.props.addContact(contact)
   }

    render() {
        return (
            <div className="container">
                <form className="new-contact">
                    <div className="container">
                        <div className="form-row">
                            <div className="form-group">
                                <label for="inputName">Name: </label>
                                <input onChange={function(e){this.setState({name: e.target.value})}}value={this.props.nameInput} type="text" id="name" name="name" required minlength="8" maxlength="15" size="30" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputemail">E-mail: </label>
                            <input onChange={function(e){this.setState({email: e.target.value})}}value={this.props.emailInput}type="email" id="email" pattern="+@globex.com" size="30" required />
                        </div>
                        <div className="form-group">
                            <label for="inputUrl">image Url: </label>
                            <input onChange={function(e){this.setState({imageUrl: e.target.value})}}value={this.props.imageUrlInput} type="url" name="url" id="url" placeholder="" pattern="https://.*" size="30" />
                        </div>
                        <div className="form-group">
                            <label for="inputPhone">Phone: </label>
                            <input onChange={function(e){this.setState({number: e.target.value})}}value={this.props.numberInput} type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="ex. 555-555-5555" required />
                        </div>
                    </div>
                    <Link to="/contacts">
                        <button onClick={this.handleClick}type="button" className="btn btn-primary">
                            Add Contact
                        </button>
                    </Link>
                </form>
            </div>






        )
    }
}

export default AddContact
