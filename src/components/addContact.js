import React, {Component} from 'react';
import App from './App';

class AddContact extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      phone: '',
      email: '',
      picture:''
    }

    this.handleAddNewContactClick = this.handleAddNewContactClick.bind(this)
  }

  handleAddNewContactClick () {
    const newContact = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      picture: this.state.picture
    };
console.log(newContact)
    this.props.addNewContact(newContact)
    this.state.contacts.push('/App')
  }



render() {
  return (<div className="container-fluid">
    <div className="row">
      <div className="col-md-8 offset-md-3">
        <div className="page-header">
          <h1>New Contact Information</h1>
          <hr/>
        </div>
        <form>
          <div class="form-group">
            <label for="formGroupExampleInput">Name</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="John Smith"></input>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Email</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="johnsmith@hotmail.com"></input>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput3">Phone Number</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="123-456-7890"></input>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput4">Picture URL</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Picture"></input>
          </div>
        </form>
        <button type="button" className="btn btn-primary" onClick={this.handleAddNewContactClick}>Add Contact</button>
        <hr/>
        <div className="contacts">
          <h1>Contact</h1>
        </div>
      </div>
    </div>
  </div>);
}

}

export default AddContact;
