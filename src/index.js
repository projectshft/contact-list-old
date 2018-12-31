

import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';



ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'))


   

    // ReactDOM.render(
    //     (<BrowserRouter>
    //         <App contactData={Contacts} />
    //     </BrowserRouter>),
    //     document.getElementById('root')
    // );

