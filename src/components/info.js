import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


//This destructiring is weird but it works???
const Info = ({ match, contacts }) => {
  console.log(contacts)
  const contactID = match.params.id
  console.log(contactID)
 const getPersonById = idNum => contacts.find(person => person.key === Number(idNum));
  let thisPerson = getPersonById(contactID)
  console.log(thisPerson)


  return <div>
      <img src={thisPerson.imgUrl} className="contact-list-img" />
      <h1>
        {thisPerson.firstName} {thisPerson.lastName}
      </h1>
      <p>email:{thisPerson.email}</p> <p># - {thisPerson.phone}</p>
      <Link to="/contacts">Clicka</Link>
    </div>;

}

export default Info

//<Route path='/' render={(props) => <Info props={props} contacts={this.state.contacts} />} />
