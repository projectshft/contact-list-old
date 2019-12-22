import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: props.contacts
    };
  }
  render() {
    return (
      <div>
        <h1>Contact List</h1>
        <div>{this.state.contacts}</div>
        <Link to={`/newcontact`}>
          <button>Add New Contact</button>
        </Link>

        <Link to={`/contact`}>
          <button>Contact ID</button>
        </Link>
      </div>
    );
  }
}

export default Home;
//map id key to individual contact?
