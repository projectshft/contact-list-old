import React, { Component } from 'react';


class AddContact extends Component {
    constructor() {
        super()


    }
    render() {
        return (
                <div className="container">
                    <form className="new-contact">
                        <div className="container">
                        <div className="form-row">
                            <div className="form-group">
                                <label for="inputName">Name: </label>
                                <input type="text" id="name" name="name" required minlength="8" maxlength="15" size="30" required />
                            </div>
                            </div>
                            <div className="form-group">
                                <label for="inputemail">E-mail: </label>
                                <input type="email" id="email" pattern="+@globex.com" size="30" required />
                            </div>
                            <div className="form-group">
                                <label for="inputUrl">image Url: </label>
                                <input type="url" name="url" id="url" placeholder="" pattern="https://.*" size="30" />
                            </div>
                            <div className="form-group">
                                    <label for="inputPhone">Phone: </label>
                                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="ex. 555-555-5555"required />
                                </div>
                            </div>
                            <button onClicktype="submit" className="btn btn-primary">Add Contact</button>
                    </form>
                </div>






        )
    }
}

export default AddContact
