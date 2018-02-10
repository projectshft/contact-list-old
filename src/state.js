import _ from 'lodash';

// A plain JavaScript object that contains our current state. We update this
// over time to reflect the current state of the application. When we first
// load, it represents the initial state of our application.
const STATE = {
  current_contact_id: 0,
  contacts: [
    {
      id: 0,
      name: "Albert Einstein",
      imageUrl: "https://ichef-1.bbci.co.uk/news/660/media/images/82399000/jpg/_82399978_75952740.jpg",
      email: "Albert@Genius.com",
      number: "919-123-4567",
      personal: false,
      business:false,
      family:false,
      other:true
    }, {
      id: 1,
      name: "Your Mom",
      imageUrl: "http://juicebubble.co.za/wp-content/uploads/2015/04/Supermom-on-white.png",
      email: "mom@yourhouse.com",
      number: "867-5309",
      personal: false,
      business:false,
      family:true,
      other:false
    },{
    id: 2,
    name: "Anonymous",
    imageUrl: "http://www.oebmidsummit.com/img/noavatar.jpg",
    email: "??@???.com",
    number: "???-???-????",
    personal: false,
    business:false,
    family:true,
    other:false
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
  if (name === 'getContacts') {
    return STATE.contacts;
  } else if (name === 'getCurrentContact') {
    return STATE.current_contact_id
  } else if (name === 'getSpecificContact') {
    const contact = STATE.contacts.find((contact) => {
      return contact.id === data
    })
    return contact
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
const handleEvent = ({ name, data}, state) => {
  if (name === 'addContact') {
    const newContact = {}
    if (state.contacts.length === 0) {
      newContact.id = 0
    } else {
      newContact.id = state.contacts[state.contacts.length-1].id+1
    }
    newContact.name= data.name
    newContact.imageUrl = data.imageUrl
    newContact.email = data.email
    newContact.number = data.number
    state.contacts = state.contacts.concat([newContact]);
  } else if (name === 'editContact') {
    state.contacts.forEach((c) => {
      if (c.id === data.id) {
        c.name = data.name
        c.imageUrl = data.imageUrl
        c.email = data.email
        c.number = data.number
      }
    });
  } else if (name === 'deleteContact') {
    const contact = state.contacts.find((contact) => {
      return contact === data
    })
    const index = state.contacts.indexOf(contact)
    state.contacts.splice(index,1)
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

  queryState
};
