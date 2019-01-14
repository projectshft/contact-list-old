// import { Link } from 'react-router-dom'
import React from 'react';
// import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
// import _ from 'lodash'

//RENDERS NAME AND NUMBER FOR EACH CONTACT IN LIST
class Contact extends React.Component {
    render() {
        return (
            <div>
                <li> 
                    {this.props.contact.name} 
                    {this.props.contact.phone_number}
                </li>
              </div>
        )
    }
}



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

export default Contact;   