import React from "react";
import ReactDOM from "react-dom";

class New extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      image_url: null,
      email: null,
      phone_number: null
    };
  }

  render() {
    return (
      <div>
        <h1>New Contact info</h1>
        <form name="newContact">
          <input name="name" placeholder="Contact Name" />
          <input name="image_url" placeholder="Photo Url" />
          <input name="email" placeholder="Email Address" />
          <input name="phone_number" placeholder="Phone Number" />
        </form>
        <button>Submit New Contact</button>
      </div>
    );
  }
}

export default New;

//grab input fields and change new contact's state, then push that to contacts list's state.
//Incorporate prop types?
