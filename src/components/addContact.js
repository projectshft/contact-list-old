import { Link } from 'react-router-dom';
import React, {Component} from 'react';
import App from './App';

class AddContact extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      phone: '',
      email: '',
      picture:'',
      id: 0,
    }

    this.handleAddNewContactClick = this.handleAddNewContactClick.bind(this)

  }

  handleAddNewContactClick () {
    const generateId = () => Math.round(Math.random() * 100000000);
    const newContact = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      picture: this.state.picture,
      id: generateId()
    };
    console.log(newContact)
    this.props.addNewContact(newContact)
    this.props.props.contacts.push('/contactList')
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
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="John Smith" onChange={event =>
          this.setState({ name: event.target.value })
        }></input>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Email</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="johnsmith@hotmail.com" onChange={event =>
          this.setState({ phone: event.target.value })
        }></input>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput3">Phone Number</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="123-456-7890" onChange={event =>
          this.setState({ email: event.target.value })
        }></input>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput4">Picture URL</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Picture" onChange={event =>
          this.setState({ picture: event.target.value })
        }></input>
          </div>
        </form>
        <button type="button" className="btn btn-primary" onClick={this.handleAddNewContactClick}>Add Contact</button>
        <hr/>
        <div className="contacts">
          <h1>Contact</h1>
        </div>
      </div>
    </div>
    <Link to='/App'>Contact List</Link>
  </div>
);
}

}

export default AddContact;
