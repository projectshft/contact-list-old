import {BrowserRouter} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css'

//renders the App amd starts the browsers
ReactDOM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('root'))
