import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { sendEvent, queryState } from '../state';
import '../App.css';

//No need for constructor in class Contacts
class Contacts extends Component {

  deleteContact = (id) => {
    //id must be a number to pass true in STATE.get
    sendEvent('deleteContact', Number(id))
  }

// render the contacts array from the state.js. Use queryState to retrieve the array.
  render() {
    return (
      <div>
        <div className="container box-center py-3 my-3 border border-dark">
          <div className="row">
            <div className = "col-sm-7 mx-2">
              <h1 className=""> Contacts </h1>
            </div>
            <div className = "col-sm-3 mx-1">
              <Link to={`/addContact`}>
                <button className="btn text-height btn-gray mx-2"> Add Contact </button>
              </Link>
            </div>
          </div>
          <div className="py-3">
          {//return and render each item from the contacts array as variable: c
            queryState('contacts').map(c => {


                const id = c.id
                return(
              <div key={c.id} className="row py-1">
                <div className = "col-sm-1 mx-2">
                  <img className="tiny-thumbnail" src={c.imgURL ? c.imgURL : 'https://storage.googleapis.com/lender-rate/CDN/megaloans/no-avatar.jpg'} alt= ''/>
                </div>
                <div className="col-sm-3">
                <div className ="mt-2">
                <Link className="text-black" to={`/${c.id}`}>
                  {c.firstName} {c.lastName}
                </Link>
                </div>

                </div>

                <div className="col-sm-3  mt-2">
                  {c.phoneNumber}
                </div>

                <div className="col-sm-1 mx-2 mr-2 mt-1">
                  <Link to={`/${c.id}/edit`}>
                    <button className="btn-options mx-1">Edit</button>
                  </Link>
                </div>

                <div className="col-sm-1 mx-2 ml-2 mt-1">

                  <button className='delete mx-1 btn-options'
                    value={c.id}
                    onClick={
                      event => { if (window.confirm('Are you sure you want to delete "' + c.firstName +' '+c.lastName+'"?')) this.deleteContact(event.target.value) } }
                  >Delete</button>

                </div>
              </div>
            )}

          )
          }
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts
