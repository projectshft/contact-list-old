import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import New from "./new";

class Home extends React.Component {
  render() {
    const { contacts } = this.props;
    return (
      <div>
        <h1>Contact List</h1>
        <div>{this.props.contacts}</div>

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
