// import { Switch, Route} from 'react-router-dom';
import React from 'react';
import Contact from './Contact';
// import ContactNew from './ContactForm';
// import FullList from './FullList';


class ContactList extends React.Component {
    render() {
        return (
            <ul>
                {/* <li>{this.props.contacts.name} {this.props.contacts.phone_number} </li> */}

{/* iterate over array of contacts and render each CONTACT PASSED IN */}
                {this.props.contacts.map((contact) => {
                    return <Contact contact={contact} key={contact.id} />
                })}
            </ul>
        )

    }
};


//     <Switch>
//     <Route path='contactList/new' render={(props) => (
//         <ContactNew props={props} contacts={contacts} addContact={addContact} />
//     )} />

//     <Route path="/contactList/:id" render={(props) => (<TheContact props=       {props} contacts={contacts} />
//     )} />


//     <Route path='/contactList'  render={() => (
//         <FullList contacts={contacts} />
//     )} />
// </Switch>





export default ContactList;