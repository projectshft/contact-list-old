import { Link } from 'react-router-dom'
import React from 'react'
import uuid from 'react-uuid'

class NewContact extends React.Component {
    constructor() {
        super()

        this.state = {
            id: '',
            name: '',
            phone: '',
            email: '',
            picture: ''
        }

        this.handleSubmitNewContact = this.handleSubmitNewContact.bind(this);
        this.handlePicture = this.handlePicture.bind(this);
        this.randomPictureCall = this.randomPictureCall.bind(this);
    }
    // getting random picture for contacts
    randomPictureCall() {
        console.log('random pick clicked')
        fetch(`https://randomuser.me/api/?inc=picture`)
            .then(res => res.json())
            .then(data => {
                this.state.picture = data.results[0].picture.medium
                this.setState({ picture: data.results[0].picture.medium })
            })

    }

    handlePicture() {
        this.randomPictureCall()
    }

    handleSubmitNewContact() {
        const newContact = {
            id: uuid(),
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            picture: this.state.picture
        };

        // imput value verification
        const phoneNumberEntry = newContact.phone;
        // added email verification
        const emailEntry = newContact.email
        // google adviced verification for phone number. way shorter then 8 IF ELSE statemenst i would write 
        const phoneNumberValidation = (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
        // same for email validation
        const emailValidation = ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/));
        // check for validity of entries display error to user if any
        if (newContact.name.length < 2) {
            return window.confirm('name must be longet then 2 characters')
        } else if (phoneNumberValidation.test(phoneNumberEntry) != true) {
            return window.confirm('phone number must contains 9 numbers with spaces or dash example:  xxx-xxx-xxxx')
            //email can be left empty or it will have to contain @ and . 
        } else if ((emailValidation.test(emailEntry) != true) && (emailEntry != '')) {
            return window.confirm('not a valid e-mail')
        } else if (newContact.picture === '') {
            return this.setState({ picture: "https://randomuser.me/api/portraits/lego/7.jpg" })
        }

        this.props.addContact(newContact)
        this.props.history.push('/')
    }

    render() {

        return (
            <div>
                <div className="row d-flex justify-content-center">
                    <form className="col-8 justify-content-center">
                        <label>Name</label>
                        <input type='text' className='form-control' onChange={event =>
                            this.setState({ name: event.target.value })
                        } />

                        <br />

                        <label>Number</label>
                        <input type='text' className='form-control' onChange={event =>
                            this.setState({ phone: event.target.value })
                        } />
                        <br />
                        <label>email</label>
                        <input type='text' className='form-control' onChange={event =>
                            this.setState({ email: event.target.value })
                        } />
                        <br />
                        <div className="inline" ><input type='file' placeholder="picture" className='form-control-file ' onChange={event =>
                            this.setState({ picture: event.target.value })
                        } /> </div>
                    </form>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-8 m-3">
                        <button className="btn btn-sm btn-info float-left" onClick={this.handlePicture} >random picture</button>
                        <img className="offset-1" src={this.state.picture} />
                        <Link to='/'> <button className="btn btn-sm btn-info m-1 float-right" >back </button></Link>
                        <button type="button" className="btn btn-sm btn-info m-1 float-right" onClick={this.handleSubmitNewContact}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewContact

