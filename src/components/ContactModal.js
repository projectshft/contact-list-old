import React, { Component } from 'react'

export class ContactModal extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { name, email, url, tel } = this.props.contactInfo.contacts
    return (
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add contact</h5>
              <button onClick={this.props.onClose}  type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
              <div className="col-md-12">
                <form className="form" autoComplete="off">
                  <div className="form-group">
                    <label htmlFor="inputName">Name</label>
                    <input value={name} name="name" autoComplete="Name" type="text" className="form-control" id="inputName" placeholder="Full name"
                      onChange={this.props.onChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputEmail3">Email</label>
                    <input value={email} name="email" autoComplete= "email" type="email" className="form-control" id="inputEmail3" placeholder="Email" required=""
                    onChange={this.props.onChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputVerify3">Image URL:</label>
                    <input value={url} name="url" autoComplete= "url" type="url" className="form-control" id="inputVerify3" placeholder="Image url" required=""
                    onChange={this.props.onChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputPassword3">Telephone</label>
                    <input value={tel} name="tel" autoComplete= "tel" type="tel" className="form-control" id="inputPassword3" placeholder="919-555-1234" required=""
                    onChange={this.props.onChange} />
                  </div>
                  <div className="modal-footer form-group">
                    <button onClick={this.props.onSubmit} type="button" className="btn btn-primary" data-dismiss="modal">Save changes</button>
                    <button onClick={this.props.onClose} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </form>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactModal
