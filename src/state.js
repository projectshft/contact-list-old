import _ from 'lodash';

// A plain JavaScript object that contains our current state. We update this
// over time to reflect the current state of the application. When we first
// load, it represents the initial state of our application.
const STATE = {
  contacts:[{
    id: 1,
    firstName: 'Hew',
    lastName: 'Keller',
    email: 'matthewkeller921@gmail.com',
    phoneNumber: '(614) 586-2269',
    imgURL: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/30628892_10211055818219296_8734043247430598656_n.jpg?_nc_cat=0&oh=0fd761b1cd26f43e197b8f081ab7ada7&oe=5B7BAFD4'
  },
  {
    id: 2,
    firstName: 'Rachel',
    lastName: 'Keller',
    email: 'rachelkeller921@gmail.com',
    phoneNumber: '(734) 709-7284',
    imgURL: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/29542087_10210962158357858_371374910242691512_n.jpg?_nc_cat=0&oh=0042e3a385f90447dc9d4e04b0ea5e75&oe=5B8DD612'
  },
  {
    id: 3,
    firstName: 'Lorenzo',
    lastName: 'Topacio',
    email: 'TopLorenzo123@yahoo.com',
    phoneNumber: '(614) 329-7774',
    imgURL: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/734398_10151367971848520_376688757_n.jpg?_nc_cat=0&oh=ed0c914762b7faae7dc37320110c63e9&oe=5B7FB699'
  }],
    editView: false,
    currentContact: null,
    get: function(id){
      const isContact = (c) => {

        return c.id === id
      }

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
    console.log('updated')
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
  if (name === 'contacts') {
    return STATE.contacts;
  } else if (name === 'getContact'){
    return STATE.get(data)
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
  if (name === 'addContact') {
    state.contacts.push(data);
  } else if(name === "editContact") {
    const index = (state.contacts.indexOf(state.get(data.id)))
    state.contacts[index] = data

  } else if(name === 'deleteContact'){
    const index = (state.contacts.indexOf(state.get(data)))
    state.contacts.splice(index, 1)
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

  queryState,
};
