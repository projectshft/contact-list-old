import React from "react";
import ReactDOM from "react-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: ["bob", "mary", "jim"]
    };
  }
  render() {
    return (
      <div>
        <h1>Contact List</h1>
        <div>{this.state.contacts}</div>
        <button>Add New Contact</button>
      </div>
    );
  }
}

export default Home;
