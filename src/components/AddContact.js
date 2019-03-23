import React from "react";

class AddContact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: Math.round(Math.random() * 100000000),
      name: "",
      image_url: "",
      email: "",
      phone_number: ""
    };

    this.handleSubmitNewContactClick = this.handleSubmitNewContactClick.bind();
  }

  handleSubmitNewContactClick = () => {
    const newContact = {
      id: this.state.id,
      name: this.state.name,
      image_url: this.state.image_url,
      email: this.state.email,
      phone_number: this.state.phone_number
    };

    this.props.addContact(newContact);
    this.props.history.push("/Contacts");
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h1>Add New Contact</h1>
            <form>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={event =>
                    this.setState({ name: event.target.value })
                  }
                />
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={event =>
                    this.setState({ email: event.target.value })
                  }
                />
                <label>Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={event =>
                    this.setState({ phone_number: event.target.value })
                  }
                />
                <label>Image URL</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={event =>
                    this.setState({ image_url: event.target.value })
                  }
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleSubmitNewContactClick}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddContact;
