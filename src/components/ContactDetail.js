import React, { Component } from 'react';


export class ContactDetail extends Component {

    //a "Back" button will takes the user back to the /contacts view and main contacts list.
    
  render() {
    //destructure props
    const { name, email, phone_number, image_url } = this.props.contacts;
    
    return (
        <div className="col-md-12 offset-md-2">
            <div className="row">
                <div className="col-md-3">
                    <img className="img-responsive contact-photo" style={contactPhotoStyle} src={image_url} alt="contact"/>
                </div>
                <div className="col-md-3">
                    <p>{name}</p>
                    <p>{phone_number}</p>
                    <p>{email}</p>
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
