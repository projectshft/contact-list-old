import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ContactView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Q. Dogs',
      imageUrl: 'https://i.pinimg.com/736x/97/27/a5/9727a533b8d35ec176155e92fd643477--pet-tattoos-wall-tattoo.jpg',
      email: 'qdogs@example.com',
      phoneNumber: '123-456-7890'
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-1 offset-md-1">
          <img className="img-fluid mw-100" src={this.state.imageUrl} alt={this.state.name}/>
        </div>
        <div className="col-md-8">
          <p className="name"><strong>Name:</strong> {this.state.name}</p>
          <p className="email"><strong>Email:</strong> {this.state.email}</p>
          <p className="phone-number"><strong>Phone number:</strong> {this.state.phoneNumber}</p>
        </div>
    </div>
  )
  }

}

export default ContactView;
