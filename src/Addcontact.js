import { BrowserRouter, Link } from 'react-router-dom';
import React, { Component } from 'react';
import { threadId } from 'worker_threads';


class AddContact extends Component {
    constructor(props) {
        super(props)

    }
   handleClick () {
       const contact = {
            name: 'Dave',
            email: 'hello@yahoo.com',
            imageUrl: '' ,
            number: '676-887-8989'
       }
       return contact
   }

    render() {
        return (
            <div className="container">
                <form className="new-contact">
                    <div className="container">
                        <div className="form-row">
                            <div className="form-group">
                                <label for="inputName">Name: </label>
                                <input onChange={function(e){this.setState({name: e.target.value})}}value={this.state.nameInput} type="text" id="name" name="name" required minlength="8" maxlength="15" size="30" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputemail">E-mail: </label>
                            <input onChange={function(e){this.setState({email: e.target.value})}}value={this.state.emailInput}type="email" id="email" pattern="+@globex.com" size="30" required />
                        </div>
                        <div className="form-group">
                            <label for="inputUrl">image Url: </label>
                            <input onChange={function(e){this.setState({imageUrl: e.target.value})}}value={this.state.imageUrlInput} type="url" name="url" id="url" placeholder="" pattern="https://.*" size="30" />
                        </div>
                        <div className="form-group">
                            <label for="inputPhone">Phone: </label>
                            <input onChange={function(e){this.setState({number: e.target.value})}}value={this.state.numberInput} type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="ex. 555-555-5555" required />
                        </div>
                    </div>
                    <Link to="/contacts">
                        <button onClick={() => props.addContact(this.handleClick)} type="button" className="btn btn-primary">
                            Add Contact
                        </button>
                    </Link>
                </form>
            </div>



        )
    }
}

export default AddContact
