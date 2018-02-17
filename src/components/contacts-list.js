import { Link } from 'react-router-dom';
import React from 'react';

// Renders list of contacts on home page
const ContactsList = (props) => (
  <div>
    {
      props.contacts.map(c => (
        <div key={c.number} className="contact">
          <div className="row justify-content-between d-flex">
            <div className="d-flex align-items-start flex-column">
              <img className="p-2" src={c.imageUrl !== "" ? c.imageUrl : "https://vignette.wikia.nocookie.net/detectiveconan96/images/7/72/Generic_Male_Profile.jpg/revision/latest?cb=20140709000724"} height="90px" width="auto"/>
            </div>
            <div className="d-flex align-items-center flex-column">
              <h3 className="p-2"><b>{c.name !== "" ? c.name : "No Name"}</b></h3>
            </div>
            <div className="d-flex align-items-end flex-column">
              <p className="p-2">Email: {c.email !== "" ? c.email : "N/A"}</p>
              <p className="p-2">Phone: {c.phoneNumber !== "" ? c.phoneNumber : "N/A"}</p>
            </div>
          </div>
          <div className="row justify-content-end">
            <Link className="btn btn-info" to={`/${c.number}`}>edit</Link>
            <button className="btn btn-danger" onClick={() => props.removeContact(c)} id={c.number}>delete</button>
          </div>
          <hr/>
        </div>
      ))
    }
  </div>
)

export default ContactsList;
