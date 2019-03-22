import React, { Component } from 'react';
import Contact from './Contact';

//generate unique id
const generateId = () => Math.round(Math.random() * 100000000);
//we will use a class component because Contacts will be stateful
export class Contacts extends Component {
    //Contacts should hold all of the contact info state
    state = {
        contacts: [
            {
                id: generateId(),
                name: 'Juliette Ryan',
                image_url: 'https://static1.squarespace.com/static/59bc843229f1875d2162cea4/59bc88e8f7e0ab3297d524fb/5bdb626d4d7a9c8118757a94/1541104241789/SQUARE+4.jpeg',
                email: 'jry@gmail.com',
                phone_number: '111-111-1111'
            },
            {
                id: generateId(),
                name: 'James Bradley',
                image_url: 'https://ninaparkerstudios.com/wp-content/uploads/2018/07/LanceHuff-Headshot-Atlanta-NinaParkerStudios-9879-SQUARE-800x800.jpg',
                email: 'jbrad@gmail.com',
                phone_number: '222-222-2222'
            },
            {
                id: generateId(),
                name: 'Simon React',
                image_url: 'https://photos.peterhurley.com/sites/default/files/styles/large/public/uploads/2018/03/23/43/hurley-square.jpg?itok=t3bMGCXV',
                email: 'simon@gmail.com',
                phone_number: '333-333-3333'
            }
        ]
    }

    render() { //Contacts will need to loop through the state and output on the page
        //destructure this.state
        const { contacts } = this.state;

        return (
            // contacts will need to call a method on the prop that will then be available for the app
            <React.Fragment>

                {/* clicking the addContact button  should take you a new route (/contacts/new) with a form for adding a new contact */}
              <div><img className="add-contact-icon" src="https://static.thenounproject.com/png/783652-200.png" alt="add user icon"></img></div>

                {contacts.map(contact =>
                    <Contact key={contact.id} contact={contact}
                    />
                ).sort()}
            </React.Fragment>
        )
    }
}
//should use proptypes to validate the information that is coming in

export default Contacts;
