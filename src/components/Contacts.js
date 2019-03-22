import React, { Component } from 'react';
import Contact from './Contact';

//we will use a class component because Contacts will be stateful
export class Contacts extends Component {
    //Contacts should hold all of the contact info state
    state = {
        contacts: [
            {
                id: 1,
                name: 'Trevor Lane',
                image_url: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/33338886_10156293973414089_2950630575163047936_n.jpg?_nc_cat=106&_nc_ht=scontent-atl3-1.xx&oh=7af8a57da3d5470d94df303921a88600&oe=5D4C3A64',
                email: 'trevor@gmail.com',
                phont_number: '111-111-1111'
            }
        ]
    }

    render() { //Contacts will need to loop through the state and output on the page
        //destructure this.state
        const { contacts } = this.state;

        return (
            // contacts will need to call a method on the prop that will then be available for the app
            <React.Fragment>
                {contacts.map(contact =>
                    <Contact key={contact.id} contact={contact}
                    />
                )}
            </React.Fragment>
        )
    }
}
//should use proptypes to validate the information that is coming in

export default Contacts;
