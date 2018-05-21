import { Link } from 'react-router-dom';
import React from 'react';

const ContactList = (props) => (
  <div>
    {
      props.contacts.map(c => (
        <div key={c.id} className="contact">
          <div className="row justify-content-between">
            <div className="d-flex align-items-start flex-column">
              <img className="" src={c.image_url !== "" ? c.image_url : "https://vignette.wikia.nocookie.net/inkagames-english/images/0/0e/No_image.jpg/revision/latest?cb=20170113194025"} alt="contact info" height="115px" width="115px"/>
            </div>
            <div className="d-flex align-items-center flex-column">
              <span className=""><b>{c.firstName !== "" ? c.firstName : "First Name: N/A"} </b></span>
              <span className=""><b>{c.lastName !== "" ? c.lastName : "Last Name: N/A"}</b></span>
            </div>
            <div className="d-flex mt-3 align-items-end flex-column">
              <p className="">Phone: {c.phone_number !== "" ? c.phone_number : "N/A"}</p>

              <p className="">Email: {c.email !== "" ? c.email : "N/A"}</p>

            </div>
          </div>
          <div className="row justify-content-center">
            {/*this is the edit and remove buttons*/}
            <Link className="btn btn-info" to={`/${c.id}`}>edit</Link>
            <button className="btn btn-danger" onClick={() => props.removeContact(c)} id={c.id}>delete</button>
          </div>
          <hr/>
        </div>
      ))
    }
  </div>
)

export default ContactList
