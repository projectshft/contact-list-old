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
            number: this.state.number,
            email: this.state.email,
            picture: this.state.picture
        };

        this.props.addContact(newContact)
        console.log(newContact)
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
                            this.setState({ number: parseInt(event.target.value, 10) })
                        } />
                        <br />
                        <label>email</label>
                        <input type='text' className='form-control' onChange={event =>
                            this.setState({ email: event.target.value })
                        } />
                        <br />
                        <label>Picture</label>
                        <input type='file' className='form-control-file' onChange={event =>
                            this.setState({ picture: event.target.value })
                        } />
                        <br />
                        <Link className="" to='/'>back</Link>
                        <button type="button" className="btn btn-sm btn-info m-3 float-right" onClick={this.handleSubmitNewContact}>Submit</button>
                    </form>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-8 ">
                        <button className="btn btn-sm btn-info" onClick={this.handlePicture} >random picture</button>
                        
                        <img className="m-2" src={this.state.picture} />
                    </div>
                </div>
            </div>
        )
    }
}

export default NewContact

