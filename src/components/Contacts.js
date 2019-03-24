import React from "react";
import { Link } from "react-router-dom";

class Contacts extends React.Component {
  //Working on building out Contacts as a ul
  constructor(props) {
    super(props);

    this.handleNewContactClick = this.handleNewContactClick.bind(this);
  }

  handleNewContactClick() {
    this.props.history.push("/Contacts/New");
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h1>Contacts</h1>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleNewContactClick}
            >
              Add Contact
            </button>
            <ul className="list-group">
              {this.props.contacts.map(contact => {
                //Generates the list items that populate the Contacts page and gives them a link to their details page.
                return (
                  <li key={contact.id}>
                    <Link to={`/Contacts/${contact.id}`}>{contact.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
