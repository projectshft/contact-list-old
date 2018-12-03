import React from "react"
import { Link } from "react-router-dom"


const Home = () => (
  <div>
    <h1>Famous Physicists Contact List</h1>
      <Link to = {'/ContactList'}>
      Click HERE For Your Contacts List!

      </Link>
  </div>
)



export default Home



{/* On this Page (the home page), their should be a current list of contacts and an add contact button that should re-direct you to another page to do so*/}
