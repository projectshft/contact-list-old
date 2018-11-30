import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'


const Info = ({props}, {contacts}) => {
  console.log(props.match.params)

  return (
    <div>
      <img src="" alt="" />
    </div>
  )

}

export default Info

//<Route path='/' render={(props) => <Info props={props} contacts={this.state.contacts} />} />
