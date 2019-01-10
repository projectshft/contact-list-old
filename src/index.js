// import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';


//INITIAL DATA
let contacts = [{
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
];

//PASS PROP'CONTACTS' TO APP
ReactDOM.render(<App contacts={contacts} />, document.getElementById('root'));



