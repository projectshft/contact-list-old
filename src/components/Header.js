import React from 'react';


//Header that will have the title and add contact button
const Header = (props) => {
  return (
    <div>
      <h1>Mariel's Contacts</h1>
      <a href='/'>Home</a>
      <a href='/contacts/new'>New Contact</a>

      
    </div>
  )
}
export default Header