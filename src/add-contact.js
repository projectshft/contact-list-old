import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


class AddContact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.generateId(this.props),
      name: 'Q. Dogs',
      imageUrl: 'https://i.pinimg.com/736x/97/27/a5/9727a533b8d35ec176155e92fd643477--pet-tattoos-wall-tattoo.jpg',
      email: 'qdogs@example.com',
      phoneNumber: '123-456-7890'
    }
  }

  //helper function to generate unique ID for each contact
  generateId (props) {
    //when generating pseudorandom ID, check to make sure it is unique. regenerate if it isn't.
    let id = Math.round(Math.random() * 10000);
    //condition returns true only if another contact has the same id
    let idIsDuplicate = props.contacts.find((contact) => {return contact.id === id})

    while (idIsDuplicate) {
      id = Math.round(Math.random() * 10000);
    }
    return id;
  }

  onInputChange(input) {
    //input has both className and value. use className to determine which input has changed.
    this.setState({
      [input.className]: input.value
    })
  }

  render() {
    return (<div><div>
      <div className="row">
        <div className="col-md-1 offset-md-1">
          <Link to="/">
            <button className="btn btn-outline-secondary m-3">Back</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-md-1 offset-md-1">

          <img className="img-fluid mw-100" src={this.state.imageUrl} alt={this.state.name}/>

        </div>
        {/* attach change handler to entire div to avoid repetition. */}
        <div className="col-md-4" onChange={(event) => this.onInputChange(event.target)}>
          <p>
            <strong>Name:
            </strong>
            <input className="name" value={this.state.name}/>
          </p>
          <p>
            <strong>Email:
            </strong>
            <input className="email" value={this.state.email}/>
          </p>
          <p>
            <strong>Phone number:
            </strong>
            <input className="phoneNumber" value={this.state.phoneNumber}/>
          </p>
          <p>
            <strong>Image URL:
            </strong>
            <input className="imageUrl" value={this.state.imageUrl}/>
          </p>
          <button className="btn btn-default m-1">Cancel</button>
          <Link to="/"><button className="btn btn-primary btn-lg m-1" onClick={() => this.props.addContact(this.state)}>Add</button></Link>
        </div>
      </div>
    </div>
</div>
    )
  }

}

export default AddContact;
