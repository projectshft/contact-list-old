import React from 'react';
import Contact from './Contact'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faEdit from '@fortawesome/fontawesome-pro-regular/faEdit'
import faSortNumericDown from '@fortawesome/fontawesome-pro-regular/faSortNumericDown'


const ContactList = (props) => {

  return (
    <div className="row">
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#<FontAwesomeIcon icon={faSortNumericDown}/></th>
          <th scope="col">Name:</th>
          <th scope="col">email</th>
          <th scope="col">image:</th>
          <th scope="col">Telephone:</th>
          <th scope="col"><FontAwesomeIcon icon={faEdit} />

          </th>
        </tr>
      </thead>
      <tbody>
        {
          props.data.history.location.state.map((elem = {}, i) => {
            // console.log(elem)
            // let id = i+1
            return <Contact key={i} id={i} data={props} contactData={elem} />
          })
        }
      </tbody>
    </table>
    </div>
  );
};

export default ContactList;