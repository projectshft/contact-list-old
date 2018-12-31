import {Link} from 'react-router-dom'
import React from 'react';
import { Button } from 'reactstrap';

const Contacts = () => (
    <div>
        <h1>My Contacts</h1>
        <Link to="/contactList/new">
            <Button color="primary">Add Contact </Button>
        </Link>
    </div>
 
)

export default Contacts