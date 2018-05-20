import _ from 'lodash';

// A plain JavaScript object that contains our current state. We update this
// over time to reflect the current state of the application. When we first
// load, it represents the initial state of our application.
const STATE = {
  contacts: [
    {
      id: 9999,
      name: "Albert Einstein",
      image_url: "https://web.archive.org/web/20071025130813/http://www.bhm.ch/downloads/11_Einstein_1921.jpg",
      email: "aeinstein@example.com",
      phone_number: "15555555555"
    }
  ],
  currentContact: null
};

// create a variable that will assign a unique ID and a function that
// will allow components to retrieve it. ID will be incremented after
// it has been assigned to a new contact (inside handleEvent - 'saveContact').
let ID = 0;
const getNextId = () => ID;

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
  // passed it to `handleState`, we know we need to notify any listener that
  // there was a change!
  if (!_.isEqual(newState, oldState)) {
    forceUpdate()
  }
};

// This function returns all contacts
const getAll = () => {
  return STATE.contacts;
};

// This function returns the contact with the given id
const get = (id) => {
  const contact = _.find(STATE.contacts, { id: id });
  if (contact) {
    return contact;
  } else {
    return null;
  }
};

// This checks if a contact with given id exists
// and returns a boolean
const getContactIndex = (id) => {
  return STATE.contacts.indexOf(_.find(STATE.contacts, { id: id }));
};

// Given an event name and the current state of the application, should mutate
// the state in-place as it sees fit.
const handleEvent = ({
  name,
  data
}, state) => {
  if (name === 'saveContact') {
    // store the index of the contact passed in via data parameter
    const contactIndex = getContactIndex(data.id);
    // if the index doesn't exist (contactIndex = -1),
    // add it to the contacts array and increment the counter
    // used to assign new ID's
    if (contactIndex < 0) {
      // assign a unique ID to new contacts
      data.id = getNextId();
      // add new contact to contacts list
      state.contacts = state.contacts.concat([data]);
      // increment ID for next contact
      ID++
    // if the contact does exist, update the contact
    } else {
      state.contacts[contactIndex] = data;
    }

  } else if (name === 'deleteContact') {
    // find the contact in contacts array by id and assign it to contact
    const contact = state.contacts.find((item) => item.id === data);
    // if a contact by given id exists, remove it from the contacts array
    if (contact) {
      state.contacts.splice(state.contacts.indexOf(contact), 1);
      // otherwise alert the user that no contact was found
    } else {
      alert('No contact found');
    }

  } else {
    // If we don't know what kind of event this is, alert the developer!
    throw new Error(`Unrecognized event: ${name}`);
  }
};

export {
  // This is a shortcut to force the `onUpdate` callbacks to be called. It's
  // useful mostly on the very first render of the application, which otherwise
  // would have no way to get the state if it's unable to change its values!
  forceUpdate,

  onUpdate,

  sendEvent,

  getAll,

  get,

  getNextId
};
