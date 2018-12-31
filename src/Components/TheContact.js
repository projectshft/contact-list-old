import { Link } from 'react-router-dom'
import React from 'react';
// import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import _ from 'lodash'

const TheContact = ({ props, contacts}) => {
    const contact = _.find(contacts, { id: parseInt(props.match.params.id, 1)}
    )
    if (!contact) {
        return <div> Sorry, but the contact was not found.</div>
    }
    return (
        <div>
            <h1>{contact.name}</h1>
            <h2>Phone Number: {contact.phone_number}</h2>
            <Link to='/contactList'>Back</Link>
        </div>
    )
};
  

    // return (
    //     <div>
    //         <Card>
    //             <CardImg
    //                 // className="Image"
    //                 top width="25%"
    //                 src="{contact.image_url}"
    //                 alt="Card image cap"
    //             />

    //             <CardBody>
    //                 <CardTitle>{person.name}</CardTitle>

    //                 <ul>
    //                     <li>('Phone: ' + {person.phone_number})</li>
    //                     <li>('email: ' + {person.email})</li>
    //                 </ul>

    //                 <Link to="/contacts">
    //                     <Button>Back</Button>
    //                 </Link>

    //             </CardBody>
    //         </Card>

    //         <Route exact path="/contacts" component={App} />
    //     </div>
    // );
// };

export default TheContact