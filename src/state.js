import _ from 'lodash'

const generateId = () => Math.round(Math.random() * 100000000)

// A plain JavaScript object that contains our current state. We update this
// over time to reflect the current state of the application. When we first
// load, it represents the initial state of our application.

const STATE = {
  defaultContact: {
    id: generateId(),
    name: 'New Contact',
    imageURL: 'http://your-image-url.com/image.jpg',
    email: 'someone@example.com',
    phoneNumber: '5551234567'
  },
  defaultHeaderText: 'Not Your Parents\' Rolodex',
  defaultHeaderButtonText: 'Add Contact',
  currentContact: null,
  currentHeaderText: 'Not Your Parents\' Rolodex',
  currentHeaderButtonText: 'Add Contact',
  contacts: [
    { id: generateId(), name: 'Albert E. Gator', imageURL: 'http://www.visitgainesville.com/media/782192/photo_gallery_medium_albert_clapping_football.jpg', email: 'al@ufl.edu', phoneNumber: '5551234567'},
    { id: generateId(), name: 'IBM Watson', imageURL: 'https://bigcommunity.net/wp-content/uploads/m5xbsgp3zxjvkztcxo4o.png', email: 'watson@ibm.com', phoneNumber: '5551234567'},
    { id: generateId(), name: 'Kiwi Bird', imageURL: 'https://s.cdpn.io/3/kiwi.svg', email: 'kiwi@kiwizrule.nz', phoneNumber: '5551234567'}
  ],
  showContacts: true,
  temporaryContact: {
    id: '',
    name: '',
    imageURL: '',
    email: '',
    phoneNumber: ''
  },
  temporaryContactTemplate: {
    id: '',
    name: '',
    imageURL: '',
    email: '',
    phoneNumber: ''
  }
};

let ON_UPDATE_CALLBACK = null

// Register a callback to be called with the new state whenever the state
// changes.
const onUpdate = (callback) => {
  ON_UPDATE_CALLBACK = callback
};

// Calls all the currently-registered callbacks with the current state of the
// application. If no callback is registered, does nothing.
const forceUpdate = () => {
  if (ON_UPDATE_CALLBACK) {
    ON_UPDATE_CALLBACK(STATE)
  }
};

// Sends an event to be handled by our event handler function. The event always
// has a name, and _may_ have some data.
const sendEvent = (name, data) => {
  // Make a copy of the existing state as a sort of "checkpoint" so we can
  // compare it to the potentially-changed state that comes out of
  // `handleEvent`.
  const oldState = _.cloneDeep(STATE)

  // This is just "naming" the variable for clarity since we'll be passing this
  // value to `handleEvent` for in-place modification.
  const newState = STATE

  // This modifies the state however it likes, or maybe even not at all!
  handleEvent({
    name,
    data: data
  }, newState)

  // If the state was changed between the time we made the copy and after we
  // passed it to `handleEvent`, we know we need to notify any listener that
  // there was a change!
  if (!_.isEqual(newState, oldState)) {
    forceUpdate()
  }
};

// Requests a piece of state from the model using event names similar to sendEvent.
// each request _may_ have some data that will help narrow down the scope of the
// state requested (e.g the id of the value desired)
const queryState = (name, data) => {
  if (name === 'getAllContacts') {
    return STATE.contacts
  } else if (name === 'getContact') {
    return STATE.contacts.find( (contact) => contact.id === data)
  } else if (name === 'getDefaultContact') {
    return STATE.defaultContact
  } else if (name === 'getTemporaryContact') {
    return STATE.temporaryContact
  } else if (name === 'getCurrentContact') {
    if (STATE.currentContact) {
      return STATE.currentContact
    }
  } else {
    // If we don't know what kind of event this is, alert the developer!
    throw new Error(`Unrecognized event: ${name}`);
  }
}

// Given an event name and the current state of the application, should mutate
// the state in-place as it sees fit.
//
// NOTE: This is where you should add support for any new events you want to
// handle!
const handleEvent = ({ name, data }, state) => {
  if (name === 'changeName') {
    state.name = data
  } else if (name === 'updateShowContacts') {
    data === 'viewContacts' ? state.showContacts = true : state.showContacts = false
  } else if (name === 'updateCurrentContact') {
    if (typeof data === 'object') {
      state.currentContact = data
    }
  } else if (name === 'updateTemporaryContact') {
    if (typeof data === 'object') {
      state.temporaryContact = data
    }
  } else if (name === 'generateNewIdForDefaultContact') {
    const updatedDefaultContact = Object.assign({}, state.defaultContact)
    updatedDefaultContact.id = generateId()
    state.defaultContact = updatedDefaultContact
  } else if (name === 'deleteClickedContact') {
    if (typeof data === 'number') {
      state.contacts = state.contacts.filter(contact => contact.id !== data)
      state.currentContact = null
    }
  } else if (name === 'resetTemporaryContact') {
    state.temporaryContact = Object.assign({}, state.temporaryContactTemplate)
  } else if (name === 'validateInput') {
    switch (data.type) {
      case 'NAME':
        const inputName = document.querySelector('.invalid-name')
        if (typeof data.payload === 'string' && data.payload.length) {
          console.log(`updated name is ${data.payload}`)
          let updatedTemporaryContact = Object.assign({}, state.temporaryContact)
          updatedTemporaryContact.name = data.payload
          state.temporaryContact = updatedTemporaryContact
          inputName.classList.remove('d-block')
        } else {
          inputName.classList.add('d-block')
        }
        break
      case 'IMAGE_URL':
        // @author Pascale Beier, bootstrap-validate (https://github.com/PascaleBeier/bootstrap-validate)
        // RegExp to check that a user has entered at least a valid url
        const urlValidationExpression = new RegExp(/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i)
        const inputImageURL = document.querySelector('.invalid-imageURL')
        if (typeof data.payload === 'string' && data.payload.match(urlValidationExpression) !== null) {
          console.log(`updated url is ${data.payload}`)
          let updatedTemporaryContact = Object.assign({}, state.temporaryContact)
          updatedTemporaryContact.imageURL = data.payload
          state.temporaryContact = updatedTemporaryContact
          inputImageURL.classList.remove('d-block')
        } else {
          inputImageURL.classList.add('d-block')
        }
        break
      case 'EMAIL':
        // @author Pascale Beier, bootstrap-validate (https://github.com/PascaleBeier/bootstrap-validate)
        // RegExp to check that a user has entered a valid email address
        const emailValidationExpression = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        const inputEmail = document.querySelector('.invalid-email')
        if (typeof data.payload === 'string' && data.payload.match(emailValidationExpression) !== null) {
          console.log(`updated email is ${data.payload}`)
          let updatedTemporaryContact = Object.assign({}, state.temporaryContact)
          updatedTemporaryContact.email = data.payload
          state.temporaryContact = updatedTemporaryContact
          inputEmail.classList.remove('d-block')
        } else {
          inputEmail.classList.add('d-block')
        }
        break
      case 'PHONE':
        const inputPhone = document.querySelector('.invalid-phone')
        // Look for length of 10-13 numbers to account for international prefixes
        if (typeof data.payload === 'string' && data.payload.length > 9 &&
            data.payload.length < 14) {
          console.log(`updated email is ${data.payload}`)
          let updatedTemporaryContact = Object.assign({}, state.temporaryContact)
          updatedTemporaryContact.phoneNumber = data.payload
          state.temporaryContact = updatedTemporaryContact
          inputPhone.classList.remove('d-block')
        } else {
          inputPhone.classList.add('d-block')
        }
        break
      default:
        return false
    }
  } else if (name === 'submitChangesIfValid') {

    const isValidContact = () => {
      return Object.values(state.temporaryContact).every( property => property.length !== 0 )
    }
    const contactIndex = state.contacts.findIndex( contact => state.currentContact.id === contact.id)
    const contactAlreadyExists = contactIndex !== -1 ? true : false
    console.log(isValidContact())
      if (isValidContact()) {
        const validContact = Object.assign({}, state.temporaryContact)
        contactAlreadyExists ? state.contacts[contactIndex] = validContact : state.contacts = state.contacts.concat([validContact])
      }
  } else if (name === 'giveTemporaryContactTheDefaultID') {
    state.temporaryContact.id = state.defaultContact.id
  } else {
    // If we don't know what kind of event this is, alert the developer!
    throw new Error(`Unrecognized event: ${name}`)
  }
};

export {
  // This is a shortcut to force the `onUpdate` callbacks to be called. It's
  // useful mostly on the very first render of the application, which otherwise
  // would have no way to get the state if it's unable to change its values!
  forceUpdate,

  onUpdate,

  queryState,

  sendEvent,
}
