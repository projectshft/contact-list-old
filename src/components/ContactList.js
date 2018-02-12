import React from 'react';
import Contact from './Contact'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faEdit from '@fortawesome/fontawesome-pro-regular/faEdit'
import faSortNumericDown from '@fortawesome/fontawesome-pro-regular/faSortNumericDown'

import {withRouter} from 'react-router-dom'

const ContactList = (props) => {
  // const {history} = props
  console.log('history PROPS: ', props.data.history.location.state)
  // const { match, location, history } = props
  // const contactList = props.contactsState.map((contact, i) => <Contact key={i} contact={contact} /> )
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
          props.data.history.location.state.map((elem, i) => {
            console.log(elem)
            return <Contact key={i} id={i} data={props} contactData={elem} />
          })
        }
        {
          // props.contactsState.map((contact, i) => {
          //   return <Contact key={i} id={i} props={this.props} />
          // })
        }
      </tbody>
    </table>
    </div>
  );
};

export default ContactList;