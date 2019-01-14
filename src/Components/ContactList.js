
import React from 'react';
import Contact from './Contact';
import PropTypes from 'prop-types';

//RENDERS LIST OF CONTACTS

class ContactList extends React.Component {
    render() {
        console.log('this ContactList:', this);
        return (
            <ul>
                {this.props.contacts.map((contact) => {
                    return <Contact contact={contact} key={contact.id} />
                })}
            </ul>
        )
    }
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape(Contact.propTypes)).isRequired
};


//     <Switch>
//     <Route path='contactList/new' render={(props) => (
//         <ContactNew props={props} contacts={contacts} addContact={addContact} />
//     )} />

// <Route path="/contactList/:id" render={(props) => (<TheContact props=       {props} contacts={contacts} />
// )} />


// </Switch>





export default ContactList;