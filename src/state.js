import _ from 'lodash'

const generateId = () => Math.round(Math.random() * 100000000)

// A plain JavaScript object that contains our current state. We update this
// over time to reflect the current state of the application. When we first
// load, it represents the initial state of our application.

const STATE = {
  defaultHeaderText: 'Not Your Parents\' Rolodex',
  defaultHeaderButtonText: 'Add Contact',
  currentContact: null,
  currentHeaderText: 'Not Your Parents\' Rolodex',
  currentHeaderButtonText: 'Add Contact',
  contacts: [
    { id: generateId(), name: 'Al E. Gator', imageURL: '', email: 'al@ufl.edu', phoneNumber: 5551234567},
    { id: generateId(), name: 'IBM Watson', imageURL: '', email: 'watson@ibm.com', phoneNumber: 5551234567}
  ],
  getAllContacts: function () { return this.contacts },
  getContact: id => {
    const isContact = contact => contact.id === id
    return this.contacts.find(isContact)
  },
  showContacts: true,
  temporaryContact: {
    id: 0,
    name: 'Full Name',
    imageURL: 'http://your-image.url.com/image.jpg',
    email: 'someone@example.com',
    phoneNumber: 5551234567
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
    return STATE.contacts;
  } else if (name === 'getContact') {
    return STATE.contacts.find( (contact) => contact.id === data)
  } else if (name === 'getTemporaryContact') {
    return STATE.currentContact
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
  } else if (name === 'deleteClickedContact') {
    if (typeof data === 'number') {
      state.contacts = state.contacts.filter(contact => contact.id !== data)
      state.currentContact = null
    }
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
