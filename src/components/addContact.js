
import React from 'react'

class AddContact extends React.Component {
  constructor () {
    super ()

    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      imgUrl: ''
    }

    this.handleAddNewContact = this.handleAddNewContact.bind(this)
  }

handleAddNewContact () {
  const newContact = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      imgURL: this.state.imgURL
    }

  this.props.addContact(newContact)
  console.log(this.props);
  this.props.props.history.push('/contactList')

  };

render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <form>

              <label>First Name:</label>
              <input type='text' className="form-control first-name" onChange={event =>
                this.setState({ firstName: event.target.value })
              }/>

              <br/>

              <h4>Last Name:</h4>
              <input type='text' className="form-control last-name" onChange={event =>
                this.setState({ lastName: event.target.value })
              }/>

              <br/>

              <h4>Email:</h4>
              <input type="text" className="form-control email" onChange={event =>
                this.setState({ email: event.target.value })
              }/>

              <br/>

              <h4>Phone Number:</h4>
              <input type="text" className="form-control phone-number" onChange={event =>
                this.setState({ phoneNumber: event.target.value })
              }/>

              <br/>

              <h4>Avatar URL:</h4>
              <input type="text" className="form-control image-url" onChange={event =>
                this.setState({ imageURL: event.target.value })
              }/>

              <br/>

            </form>

            <button type="button" onClick={this.handleAddNewContact} className="btn btn-primary"> Add Contact </button>

            <a href="/home">back</a>
          </div>
        </div>
      </div>
    )
  }
}
export default AddContact
