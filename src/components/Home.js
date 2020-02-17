import { Link } from 'react-router-dom';
import React from 'react';


const Home = () => (
    <div>
        <h1 className="text-center">Welcome to the Contact-List App</h1>
        <div className="text-center">
            <Link to='/contacts'>View Contacts</Link>
        </div>

    </div>
)

export default Home