import _ from 'lodash';

// A plain JavaScript object that contains our current state. We update this
// over time to reflect the current state of the application. When we first
// load, it represents the initial state of our application.
const STATE = {
      contacts: [  {
      id: 70219577,
      name: "Albert Einstein",
      image_url: "https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      email: "aeinstein@example.com",
      phone_number: "15555555555"
    }],
      selectedContact: null,
      showDeleteModal: false
    }

const getState = prop => {
  return STATE[prop];
}

//use this to validate instead of proptypes because there are no props anywhere
const validateContact = contact => {
  return (contact.name.length > 0 &&
  contact.email.includes('@') &&
  contact.email.includes('.') &&
  contact.phone_number.length >= 10)
}

let ON_UPDATE_CALLBACK = null;

// Register a callback to be called with the new state whenever the state
// changes.
const onUpdate = (callback) => {
  ON_UPDATE_CALLBACK = callback;
};

// Calls the currently-registered callback with the current state of the
// application. If no callback is registered, does nothing.
const forceUpdate = () => {
  if (ON_UPDATE_CALLBACK) {
    ON_UPDATE_CALLBACK(STATE);

  }
};

// Sends an event to be handled by our event handler function. The event always
// has a name, and _may_ have some data.
const sendEvent = (name, data) => {
  // Make a copy of the existing state as a sort of "checkpoint" so we can
  // compare it to the potentially-changed state that comes out of
  // `handleEvent`.
  const oldState = _.cloneDeep(STATE);

  // This is just "naming" the variable for clarity since we'll be passing this
  // value to `handleEvent` for in-place modification.
  const newState = STATE;

  // This modifies the state however it likes, or maybe even not at all!
  handleEvent({
    name,
    data: data
  }, newState);

  // If the state was changed between the time we made the copy and after we
  // passed it to `handleEvent`, we know we need to notify any listener that
  // there was a change!
  if (!_.isEqual(newState, oldState)) {
    forceUpdate()
  }
};

// Given an event name and the current state of the application, should mutate
// the state in-place as it sees fit.
//
// NOTE: This is where you should add support for any new events you want to
// handle!
const handleEvent = ({ name, data }, state) => {
  if (name === 'addNewContact') {
    state.contacts.push(data);
  } else if (name === 'deleteContact') {
    state.showDeleteModal = false;
    state.contacts = state.contacts.filter(contact => data.id !== contact.id);
  } else if (name === 'setSelectedContact') {
    state.selectedContact = data;
  }  else if (name === 'requestDelete') {
    state.showDeleteModal = true;
  }  else if (name === 'cancelDelete') {
    state.showDeleteModal = false;
  }  else {
    // If we don't know what kind of event this is, alert the developer!
    throw new Error(`Unrecognized event: ${name}`);
  }
};

export {
  forceUpdate,
  onUpdate,
  sendEvent,
  getState,
  validateContact
};
