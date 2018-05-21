let phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const capitalizeFirstLetterEveryWord = function(string) {
  return string.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1));
};

const removeNaNchar = function(string) {
  return string.replace(/\D/g, '');
}

// Validate User's Input, will temporary remove non-digits from user phone number input.
const validateUserInput = (contact) => {
  if (contact.name !== "") {
    contact.phoneNumber = removeNaNchar(contact.phoneNumber);
    if (contact.phoneNumber.length === 10 || contact.phoneNumber.length === 0) {
      if (emailRegex.test(contact.email) || contact.email === "" || contact.email === "N/A") {
        return true;
      }
    }
  } else {
    return false;
  }
}

// Format state during addContact and editContact Process
// Format numbers into (123)456-7890 format.
// Gives default values of "N/A" if email/phoneNumber is blank
// Gives default image Url if blank.
const formatState = (contact) => {
  // Capitalize 1st letter of every word
  contact.name = capitalizeFirstLetterEveryWord(contact.name);
  // Remove user formatting on phone number
  contact.phoneNumber = removeNaNchar(contact.phoneNumber);
  // Apply our own formatting on phone number.
  if (contact.phoneNumber.length === 10) {
    let formatNumber = contact.phoneNumber.replace(phoneRegex, "($1)$2-$3");
    contact.phoneNumber = formatNumber;
  } else {
    contact.phoneNumber = "N/A"
  }
  // If email is blank, fill in default "N/A"
  if (contact.email === "") {
    contact.email = "N/A";
  }
  // If image url not included, the app will provide.
  if (contact.imageUrl === "") {
    contact.imageUrl = 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792__340.png';
  }
  return contact;
}

export {
  validateUserInput,
  formatState,
  removeNaNchar,
  emailRegex
}
