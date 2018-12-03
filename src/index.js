import {BrowserRouter} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
// import ContactList from '../src/Components/ContactList';
// import ContactListItem from '../src/Components/ContactListItem';

import registerServiceWorker from './registerServiceWorker';

const Contacts = [
    {
        "id": "70219577",
        "name": "Albert Einstein",
        "image_url": "https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
        "email": "aeinstein@example.com",
        "phone_number": 15555555555
    }
];

ReactDOM.render(
    (<BrowserRouter> 
        <App contactData={Contacts} />
    </BrowserRouter>),
    document.getElementById('root')
);
registerServiceWorker();
