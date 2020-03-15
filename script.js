// Assignment Code
var generateBtn = document.querySelector("#generate");

//an empty array to store password
var password = [];

//object of all the characters for password
var passwordCharacters = {
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "h", "I", "J", "k", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  numeric: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specialCharacters: [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~", "\\"]
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//password generator
function generatePassword() {

  //to confirm which type of characters user needs and how long is the password
  var confirmUppercase = confirm("Do you want uppercase characters?\nClick 'OK' for yes, click 'Cancel' for no.");
  var confirmLowercase = confirm("Do you want lowercase characters?\nClick 'OK' for yes, click 'Cancel' for no.");
  var confirmNumber = confirm("Do you want numbers?\nClick 'OK' for yes, click 'Cancel' for no.");
  var confirmSpecialChar = confirm("Do you want special characters?\nClick 'OK' for yes, click 'Cancel' for no.");
  var passwordLength = Number(prompt("Length of the password?\nEnter a number between 8~128."));

  //store how many of each characters we need
  var numberOfUppercase, numberOfLowercase, numberOfnumeric, numberOfSpecialChar;

  //must enter a number between 8~128
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    var passwordLength = Number(prompt("Invild entry.\nEnter a number between 8~128."));
  }

  //check which type of characters user needs and tells getPassword how many of each characters we need
  if (confirmUppercase === true && confirmLowercase === false && confirmNumber === false && confirmSpecialChar === false) {
    getPassword(passwordLength);
  } else if (confirmUppercase === false && confirmLowercase === true && confirmNumber === false && confirmSpecialChar === false) {
    getPassword(null, passwordLength);
  } else if (confirmUppercase === false && confirmLowercase === false && confirmNumber === true && confirmSpecialChar === false) {
    getPassword(null, null, passwordLength);
  } else if (confirmUppercase === false && confirmLowercase === false && confirmNumber === false && confirmSpecialChar === true) {
    getPassword(null, null, null, passwordLength);
  } else if (confirmUppercase === true && confirmLowercase === true && confirmNumber === false && confirmSpecialChar === false) {
    numberOfUppercase = Math.floor(Math.random() * passwordLength) + 1;
    while (numberOfUppercase === 0 || numberOfUppercase === passwordLength) {
      numberOfUppercase = Math.floor(Math.random() * passwordLength) + 1;
    }
    numberOfLowercase = passwordLength - numberOfUppercase;
    console.log(numberOfUppercase);
    console.log(numberOfLowercase);
    getPassword(numberOfUppercase, numberOfLowercase);
  } else if (confirmUppercase === true && confirmLowercase === false && confirmNumber === true && confirmSpecialChar === false) {

  } else if (confirmUppercase === true && confirmLowercase === false && confirmNumber === false && confirmSpecialChar === true) {

  } else if (confirmUppercase === false && confirmLowercase === true && confirmNumber === true && confirmSpecialChar === false) {

  } else if (confirmUppercase === false && confirmLowercase === true && confirmNumber === false && confirmSpecialChar === true) {

  } else if (confirmUppercase === false && confirmLowercase === false && confirmNumber === true && confirmSpecialChar === true) {

  } else if (confirmUppercase === false && confirmLowercase === true && confirmNumber === true && confirmSpecialChar === true) {

  } else if (confirmUppercase === true && confirmLowercase === false && confirmNumber === true && confirmSpecialChar === true) {

  } else if (confirmUppercase === true && confirmLowercase === true && confirmNumber === false && confirmSpecialChar === true) {

  } else if (confirmUppercase === true && confirmLowercase === true && confirmNumber === true && confirmSpecialChar === false) {

  }

  //shuffle password
  password = shuffle(password);

  //return password in string
  return password.join("");
}

//randomly add characters to password array
function getPassword(numberOfUppercase, numberOfLowercase, numberOfnumeric, numberOfSpecialChar) {
  if (numberOfUppercase > 0) {
    for (i = 0; i < numberOfUppercase; i++) {
      password.push(randomPickerUppercase());
    }
  }
  if (numberOfLowercase > 0) {
    for (i = 0; i < numberOfLowercase; i++) {
      password.push(randomPickerLowercase());
    }
  }
  if (numberOfnumeric > 0) {
    for (i = 0; i < numberOfnumeric; i++) {
      password.push(randomPickerNumber());
    }
  }
  if (numberOfSpecialChar > 0) {
    for (i = 0; i < numberOfSpecialChar; i++) {
      password.push(randomPickerSpecialChar());
    }
  }
}

//shuffle array
function shuffle(arr) {
  var copy = [];
  for (i = 0; i < arr.length; i++) {
    var current = Math.floor(Math.random() * arr.length) + 1;
    copy.push(arr[current]);
    arr.splice(current, 1);
  }
  return copy;
}

//random pick character from password object
function randomPickerUppercase() {
  return passwordCharacters.uppercase[Math.floor(Math.random() * 26)];
}
function randomPickerLowercase() {
  return passwordCharacters.lowercase[Math.floor(Math.random() * 26)];
}
function randomPickerNumber() {
  return passwordCharacters.numeric[Math.floor(Math.random() * 10)];
}
function randomPickerSpecialChar() {
  return passwordCharacters.specialCharacters[Math.floor(Math.random() * 33)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);