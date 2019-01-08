import React from "react"
import { Link } from "react-router-dom"


const Home = () => (
  <div>
    <h1>Famous Physicists Contact List</h1>
      <Link to = {'/Contacts'}>
      Click HERE For Your Contacts List!
      </Link>
  </div>
)



export default Home
