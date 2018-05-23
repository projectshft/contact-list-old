import React from "react";
import ContactListItem from "./contact-list-item.js";
import {queryState, sendEvent} from "../state.js";

class ContactList extends React.Component {
  constructor(props){
    super(props);
    this.add=this.add.bind(this);
  }

  add() {
    sendEvent("add");
  }

  render() {
    return(
      <div>
        <ul>
          {
            queryState("getAll").map(p => (
              <ContactListItem id={p.id} name={p.name} />
            ))
          }
          </ul>
          <button onClick={this.add}>Add Contact</button>
        </div>
      )
  }
}

export default ContactList;
