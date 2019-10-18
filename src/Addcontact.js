import React, { Component } from 'react';


class AddContact extends Component {
    constructor () {
        super ()

            return (

                    <div>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputName">Name</label>
                                    <input type="text" id="name" name="name" required minlength="4" maxlength="15" size="15" required/>
                                </div>
                            <div className="form-group">
                                <label for="inputemail">Email</label>
                                <input type="email" id="email"pattern=".+@globex.com" size="30" required />
                            </div>
                            <div className="form-group">
                                <label for="inputUrl">image Url</label>
                                <input type="url" name="url" id="url"placeholder="https://example.com"pattern="https://.*" size="30"required />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputPhone">Phone</label>
                                <input type="tel" id="phone" name="phone"pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"required />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Add Contact</button>
                            </div>
                        </form>
                    </div>

    
     

        
             
    );
  }
} 

export default AddContact
