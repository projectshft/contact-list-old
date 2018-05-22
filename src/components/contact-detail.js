import React from "react";
import {queryState, sendEvent} from "../state.js";
import {Link} from "react-router-dom";

class ContactDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = queryState("getOne", props.match.params.id);
    this.update = this.update.bind(this);
  }
  update() {
    sendEvent("update", this.state);
  }
  render() {
    return (
      <div>
        <input value={this.state.name} onChange={event => this.setState({name: event.target.value})} />
        <input value={this.state.email} onChange={event => this.setState({email: event.target.value})}/>
        <input value={this.state.phone} onChange={event => this.setState({phone: event.target.value})}/>
        <Link to="/contacts"><button onClick={this.update}>Update</button></Link>
      </div>
    );
  }
}

export default ContactDetail;
