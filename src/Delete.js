import React from 'react'

class App extends Component {
  removeItem(e) {
    this.props.removeContact(item);
  }
  render () {
    return(
      <ul>
        {this.props.contactList.map((contactList) => {
            return <li onClick={() => {this.removeItem(contactList) key = {index} > {index}</li>}
          }
        )}
      </ul>
    );
  }
}
