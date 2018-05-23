import React from "react";
import {Link} from "react-router-dom";
import {sendEvent} from "../state.js";

const ContactListItem = (props) => {
    return (
      <li key={props.id}>{props.name}&nbsp;
      <Link to={`/contacts/${props.id}`}>edit</Link>&nbsp;
      <Link to={"/contacts"} onClick={()=>{
        sendEvent("remove", props.id);
      }}>remove</Link>
      </li>
    );
}

export default ContactListItem;
