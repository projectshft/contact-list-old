import { Link } from 'react-router-dom'
import React from 'react'

class ContactEdit extends React.Component {
  constructor (props) {
    super (props)

    this.state = {
      name: '',
      image_url: '',
      email: '',
      number:''
    }

    // this.handleSubmitPlayerClick = this.handleSubmitPlayerClick.bind(this)
  }

  // componentDidMount () {
  //   const findPlayerByNumber = (number) => {
  //     return this.props.players.filter((player) => {
  //       return player.number === number
  //     });
  //   };
  //
  //   const currentPlayer = findPlayerByNumber(this.props.playerId)[0];
  //
  //   this.setState({
  //     name: currentPlayer.name,
  //     number: currentPlayer.number,
  //     position: currentPlayer.position
  //   })
  // }
  //
  // handleSubmitPlayerClick () {
  //   const newPlayer = {
  //     name: this.state.name,
  //     number: this.state.number,
  //     position: this.state.position
  //   };
  //
  //   this.props.updatePlayer(newPlayer)
  //   this.props.history.push('/contacts')
  // }

  render () {
    return (
      <div>
        <form>
        <label>Name</label>
        <input type='text' value={this.state.name} className='form-control'onChange={event =>
          this.setState({ name: event.target.value })
        }/>

        <br/>

        <label>Image_url</label>
        <input type='text' value={this.state.image_url} className='form-control'onChange={event =>
          this.setState({ image_url: event.target.value})
        }/>

        <br/>

        <label>Email</label>
        <input type='text' value={this.state.email} className='form-control'onChange={event =>
          this.setState({ email: event.target.value })
        }/>
        <br/>

        <label>Phone Number </label>
        <input type='text' value={this.state.number} className='form-control'onChange={event =>
          this.setState({ number: parseInt(event.target.value, 10) })
        }/>

        <br/>


        <button type="button" onClick={this.handleSubmitPlayerClick}>Submit</button>
        </form>

        <Link to='/contacts'>Contact List</Link>
      </div>
    )
  }
}

export default ContactEdit
