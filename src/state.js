import _ from 'lodash';

const STATE = {
  contacts: [
    {
      name: "John Doe",
      email: "johndoe@aol.com",
      phone: "555-555-5555",
      id: 0
    },
    {
      name: "Joe Schmo",
      email: "joeschmo@gmail.com",
      phone: "555-123-4567",
      id: 1
    }
  ],
  next_id: 2
}

let ON_UPDATE_CALLBACK = null;

// Register a callback to be called with the new state whenever the state
// changes.
const onUpdate = (callback) => {
  ON_UPDATE_CALLBACK = callback;
};

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
// Calls the currently-registered callback with the current state of the
// application. If no callback is registered, does nothing.
const forceUpdate = () => {
  if (ON_UPDATE_CALLBACK) {
    ON_UPDATE_CALLBACK(STATE);
  }
};

const queryState = (name,data) => { //data should be the id of the player if it's calling getOne
  if (name === 'getAll') {
    return STATE.contacts;
  } else if(name === "getOne") {
      const contact = STATE.contacts.find(function (element) {
          return element.id == data;
        });
      return contact;
  } else if(name === "getNextIndex"){
    return(STATE.next_id);
  } else {
    // If we don't know what kind of event this is, alert the developer!
    throw new Error(`Unrecognized event: ${name}`);
  }
}

const handleEvent = ({name, data}, state) => {
  if (name === 'add') {
    STATE.contacts.push({
      name: "Edit Me!",
      email: "",
      phone: "xxx-xxx-xxxx",
      id: STATE.next_id
    });
    STATE.next_id++;
  } else if(name === "update") {
    const contact = STATE.contacts.find(function (element){
      return element.id == data.id;
    });
    contact.name=data.name;
    contact.email = data.email;
    contact.phone = data.phone;
    console.log(STATE);
  } else if(name === "remove") {
    console.log(data);
    STATE.contacts = STATE.contacts.filter((item) => {
      console.log(item.id);
      return item.id != data;
    });
    console.log(STATE);
  } else {
    // If we don't know what kind of event this is, alert the developer!
    throw new Error(`Unrecognized event: ${name}`);
  }
}

export {queryState, onUpdate, forceUpdate, sendEvent};
