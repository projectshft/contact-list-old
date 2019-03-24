import React from 'react';
import { Link } from 'react-router-dom';

const ContactDetail = ({routerProps, contacts}) => {
    console.log('routerProps', routerProps);
    const clickedContact = parseInt(routerProps.match.params.contactId);
    console.log('clickedContact', clickedContact);
  
    const users = contacts;
    console.log('users', users);
  
    const user = users.find(u => u.id === clickedContact);
    console.log('user', user);
    //console.log('user.email', user.email); //breaks the program
  
    if (!clickedContact) { //this doesn't work
        return <div>There is not a record of this contact.<Link to="/contacts"><button className="btn-dark btn btn-sm">Back to Contacts</button></Link></div>;
   } else {
        return (
            <div className="container">
                <div className="col-md-12 offset-md-2">
                    <div className="row">
                        {/* <div className="col-md-3">
                            <img className="img-responsive contact-photo" style={contactPhotoStyle} src={users.image_url} alt="contact"/>
                        </div>
                        <div className="col-md-3 offset-md-1">
                            {/* <p>{props.contacts[0].fname} {props.contacts[0].lname}</p>
                            <p>{props.contacts[0].phone_number}</p>
                            <p>{props.contacts[0].email}</p>
                            <p>{props.match.params.contactId}</p> */}
                            {/* <p>{users.id}</p>
                            <p>{users.phone_number}</p>
                        </div> */} 

                        {/* a "Back" button will takes the user back to the /contacts view and main contacts list. */}
                        <Link to="/contacts"><button className="btn-dark btn btn-sm">Back to Contacts</button></Link>
                    </div>
                </div>
            </div>
        )
    }
 }

const contactPhotoStyle = {
    'maxWidth': '200px',
    'maxHeight': '200px',
    'borderRadius': '50%'
}

export default ContactDetail;
