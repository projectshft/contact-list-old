import React from "react";
import personplaceholder from '../assets/personplaceholder.png'

class AddContact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //AddContact's input data - this gets updated as keystrokes are entered in the fields
      id: Math.round(Math.random() * 100000000),
      name: "",
      image_url: "",
      email: "",
      phone_number: ""
    };

    this.handleSubmitNewContactClick = this.handleSubmitNewContactClick.bind();
  }

  handleSubmitNewContactClick = e => {
    //Changed from button onClick to form onSubmit so I could take advantage of html5 form validation.
    e.preventDefault(); //Prevents submit from trying to actually submit to a server and giving us pesky console warnings.

    const newContact = {
      id: this.state.id,
      name: this.state.name,
      image_url:
        this.state.image_url !== ""
          ? this.state.image_url
          : personplaceholder, //If no url was submitted, substitute placeholder image.
      email: this.state.email,
      phone_number: this.state.phone_number
    };
    this.props.addContact(newContact);
    this.props.history.push("/Contacts"); //Sends us back to /Contacts after clicking submit
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h1>Add New Contact</h1>
            <form onSubmit={this.handleSubmitNewContactClick}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Contact Name"
                  onChange={event =>
                    this.setState({ name: event.target.value })
                  }
                />
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="contactemail@gmail.com"
                  onChange={event =>
                    this.setState({ email: event.target.value })
                  }
                />
                <label>Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="123-456-7890"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  onChange={event =>
                    this.setState({ phone_number: event.target.value })
                  }
                />
                <label>Image URL</label>
                <input
                  type="url"
                  className="form-control"
                  placeholder="https://www.example.com/image.png"
                  onChange={event =>
                    this.setState({ image_url: event.target.value })
                  }
                />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddContact;
