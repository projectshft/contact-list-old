//I tried to implement this at one point but I couldn't figure it out
//So I'm leaving this here for now till I understand how.

import _ from 'lodash';

// A plain JavaScript object that contains our current state. We update this
// over time to reflect the current state of the application. When we first
// load, it represents the initial state of our application.
const STATE = "currentContact": 123,
"contacts": [{
    "id": 1,
    "name": "Albert Einstein",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
    "email": "aeinstein@example.com",
    "phone_number": "3361115555"
  },
  {
    "id": 2,
    "name": "Jake Statefarm",
    "image_url": "http://i0.kym-cdn.com/entries/icons/original/000/017/912/uhh_khakis.png",
    "email": "JakeSF@example.com",
    "phone_number": "9192224444"
  },
  {
    "id": 3,
    "name": "Henry John",
    "image_url": "https://411mania.com/wp-content/uploads/2018/01/Mark-Henry-645x370.jpg",
    "email": "HJ101@example.com",
    "phone_number": "9101117777"
  }
],
all: function() { return this.contacts},
get: function(id) {
  const isContact = p => p.id === id
  return this.contacts.find(isContact)
}
};

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

// Requests a piece of state from the model using event names similar to sendEvent.
// each request _may_ have some data that will help narrow down the scope of the
// state requested (e.g the id of the value desired)
const queryState = (name,data) => {
  if (name === 'getName') {
    return STATE.name;
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
    state.name = data;
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
