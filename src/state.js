import _ from 'lodash';

// A plain JavaScript object that contains our current state. We update this
// over time to reflect the current state of the application. When we first
// load, it represents the initial state of our application.
const STATE = {
  //Last Created ID
  lastCreatedID:null,
  contacts: [
    {
      id: 0,
      name: "Albert Einstein",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
      email: "A.Einstein@example.com",
      phoneNumber: "(123)123-1234",
    },
    {
      id: 1,
      name: "Ryan Gosling",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIe7XDIEvhNXpqK0CzeufFmow7R8zAZ_j90_pxNR4H_iijOyQ5LVauUXM",
      email: "R.Gosling@example.com",
      phoneNumber: "(234)111-1234",
    },
    {
      id: 2,
      name: "Neils Bohr",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Niels_Bohr.jpg/220px-Niels_Bohr.jpg",
      email: "N.Bohr@example.com",
      phoneNumber: "(555)555-1234",
    }
  ]
};

let ON_UPDATE_CALLBACK = null;

// Register a callback to be called with the new state whenever the state
// changes.
const onUpdate = (callback) => {
  ON_UPDATE_CALLBACK = callback;
};

// Calls all the currently-registered callbacks with the current state of the
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

const queryState = (name, data) => {
  switch(name) {
    case 'lastID':
      return STATE.lastCreatedID;
    case 'findContact':
      return STATE.contacts.find((contact) => {return contact.id === data});
    case 'getContacts':
      return STATE.contacts;
    default:
    // If we don't know what kind of event this is, alert the developer!
      throw new Error(`Unrecognized event: ${name}`);
  }
}

// Given an event name and the current state of the application, should mutate
// the state in-place as it sees fit.
//
// NOTE: This is where you should add support for any new events you want to
// handle!
const handleEvent = ({ name, data}, state) => {
  switch(name) {
    case 'addContact':
    // Generate random ID for new contact and concat contact to state.
    // Not the best way, since there's chance of duplication, but just for this exercise.
      data.id = Math.round(Math.random() * 1000000);
      state.lastCreatedID = data.id;
      state.contacts = state.contacts.concat([data]);
      break;
    case 'updateContact':
    // Not quite the definition of "updating", this deletes the previous entry and re-add the updated contact.
      const contactToBeUpdated = state.contacts.find((contact) => {return contact === data});
      state.contacts.splice(state.contacts.indexOf(contactToBeUpdated),1)
      state.contacts = state.contacts.concat([data]);
      break;
    case 'deleteContact':
    // Find contact in the state.contacts array, then splice it from state.contacts.
      const contactToBeDeleted = state.contacts.find((contact) => {return contact === data});
      state.contacts.splice(state.contacts.indexOf(contactToBeDeleted),1)
      break;
    default:
    // If we don't know what kind of event this is, alert the developer!
      throw new Error(`Unrecognized event: ${name}`);
    }

  }

export {
  // This is a shortcut to force the `onUpdate` callbacks to be called. It's
  // useful mostly on the very first render of the application, which otherwise
  // would have no way to get the state if it's unable to change its values!
  forceUpdate,

  onUpdate,

  sendEvent,

  queryState
};
