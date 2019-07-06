import _ from 'lodash';

// A plain JavaScript object that contains our current state. We update this
// over time to reflect the current state of the application. When we first
// load, it represents the initial state of our application.
const generateId = () => Math.round(Math.random() * 100000000)

const STATE = {
  contacts: [
    {
      id: 0,
      name: "Kitten",
      email: "kitten@catmail.com",
      phone_number: "1234567890",
      image_url: "https://timedotcom.files.wordpress.com/2019/03/kitten-report.jpg"
    },
    {
      id: 1,
      name: "Peppermint Butler",
      email: "pepbut@darkmail.com",
      phone_number: "6666666666",
      image_url: "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/c/c9/Baby_Pep-But.jpg/revision/latest?cb=20180905195334"
    }
  ]
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
  console.log('event name:', name, 'event data: ', data);
  handleEvent(
    {
      name,
      data: data || null
    },
    newState
  );
  console.log('new state:', newState);
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
  switch (name) {
    case 'addContact': {
      data.id = generateId();
      if (data.image_url === '') {
        data.image_url = "https://lh3.googleusercontent.com/a/default-user=s100-p-k-rw-no";
      }
      state.contacts = state.contacts.concat([data])
      break;
    }
    case 'deleteContact': {
      state.contacts = state.contacts.filter(contact =>
        contact.id !== Number(data)
      )
      break;
    }
    case 'editContact': {
      state.contacts = state.contacts.map(contact =>
        (contact.id === data.id) ? Object.assign({}, contact, data) : contact
      )
      break;
    }
    default: {
      throw new Error(`Unrecognized event: ${name}`);
    }
  }

  // if (name === 'changeName') {
  //   state.name = data;
  // } else if (name === 'addContact') {
  //   console.log('add', data);
  //   data.id = generateId();
  //   if (data.image_url === '') { data.image_url = "https://lh3.googleusercontent.com/a/default-user=s100-p-k-rw-no"; }
  //   state.contacts = state.contacts.concat([data])
  // } else if (name === 'deleteContact') {
  //   console.log('delete', data);
  //   state.contacts = state.contacts.filter(contact =>
  //     contact.id !== Number(data)
  //   )
  // } else if (name === 'editContact') {
  //   console.log('edit', data);
  //   state.contacts = state.contacts.map(contact =>
  //     (contact.id === data.id) ? Object.assign({}, contact, data) : contact
  //   )
  // } else {
  //   // If we don't know what kind of event this is, alert the developer!
  //   throw new Error(`Unrecognized event: ${name}`);
  // }
};

export {
  // This is a shortcut to force the `onUpdate` callbacks to be called. It's
  // useful mostly on the very first render of the application, which otherwise
  // would have no way to get the state if it's unable to change its values!
  forceUpdate,

  onUpdate,

  sendEvent
};
