import React, { Component } from 'react';


export class ContactDetail extends Component {
  render() {
    
    const { name, email, phone_number, image_url } = this.props.contact;
    
    return (
        <div className="col-md-12 offset-md-2">
            <div className="row">
                <div className="col-md-3">
                    <img clasName="img-responsive contact-photo" style={contactPhotoStyle} src={image_url} alt="contact photo"/>
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

export default ContactDetail;
