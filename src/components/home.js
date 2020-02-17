import { Redirect } from 'react-router-dom'
import React from 'react';

//The home component redirects you from the home page to the contacts page 
const Home = () => (

    <Redirect to ="/contacts"/>

)

export default Home
