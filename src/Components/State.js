import React from 'react';
import { Link} from "react-router-dom";
import PropTypes from 'prop-types'; 
import { Button } from 'reactstrap';
import ContactList from './ContactList';


class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                {
                    "id": '1',
                    "name": "Albert Einstein",
                    "image_url": "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
                    "email": "aeinstein@example.com",
                    "phone_number": 15555555555
                },
                {
                    "id": '2',
                    "name": "Niels Bohr",
                    "image_url": "https://en.wikipedia.org/wiki/Niels_Bohr#/media/File:Niels_Bohr.jpg",
                    "email": "nbohr@example.com",
                    "phone_number": 15553355555
                },
            ]
        }

        this.addContact = this.addContact.bind(this);
    }


    addContact(newContact) {
        this.setState({contacts: this.state.contacts.concat([newContact])});
    }

    render() {
        return (
            <div>
                <h1>My Contacts</h1>

                {/* Click "ADD CONTACT" --> /new */}
                <Link to="/new">
                    <Button color="primary">Add Contact </Button>
                </Link>

                {/* PASS CONTACTS PROP TO CONTACT lIST CHILD */}
                
                <ContactList contacts={this.state.contacts} />
            </div>
        )
    }
}

State.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    image_url: PropTypes.string,
    email: PropTypes.string,
    phone_number: PropTypes.string
};

export default State;