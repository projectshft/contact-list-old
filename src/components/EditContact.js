import React, {Component} from 'react';

class EditContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      name: '',
      email: '',
      phone: '',
      image: ''
    };
  }

  render() {
    return (
      <h1>{this.props.contact.name}</h1>
    );
  }
};

export default EditContact;