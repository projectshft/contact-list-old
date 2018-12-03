import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'
import React from "react";

class Confirmation extends React.Component {


  submit = () => {
    confirmAlert({
      title: "Delete?",
      message: "Are you sure you want to delete this contact?",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.props.deleteContact(this.props.contactKey)
        },
        {
          label: "No",
          onClick: () => {console.log("Not deleted")}
        }
      ]
    });
  };


  render() {
    return <div className="container">
        <button onClick={this.submit} className="delete-contact btn btn-danger">
          X
        </button>
      </div>;
  }
}

export default Confirmation
