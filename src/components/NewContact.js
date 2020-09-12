// component that is accessed by click on add contacts, takes us to a form with
// the route /contacts/new , once submit button is clicked should rerout back to /contacts
// with that new contact appearing 
import React from 'react';
// adds a new contact component that will have input fields for a new contact to be added to our contat list on 
// home page
const NewContact = () => (
    <div>
        <form>
        <label>Name</label>
        <input type='text' className='form-control'/>

        <br/>

        <label>Image URL</label>
        <input type='text' className='form-control'/>

        <br/>

        <label>Phone #</label>
        <input type='text' className='form-control'/>

        <br/>

        <label>Email</label>
        <input type='text' className='form-control'/>

        <button type="button" onClick={this.handleSubmitContactClick}>Submit</button>
        </form>
    </div>
)


export default NewContact;