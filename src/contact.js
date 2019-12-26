import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h1>Contact by ID</h1>
        <Link to={`/home`}>
          <button>Back to Contact List</button>
        </Link>
      </div>
    );
  }
}

export default Contact;
