// Assignment Code
var generateBtn = document.querySelector("#generate");

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
  //to confirm which type of characters you need and how long is the password
  var confirmUppercase = confirm("Do you want uppercase characters? Click 'OK' for yes, click 'Cancel' for no.");
  var confirmLowercase = confirm("Do you want lowercase characters? Click 'OK' for yes, click 'Cancel' for no.");
  var confirmNumber = confirm("Do you want numbers? Click 'OK' for yes, click 'Cancel' for no.");
  var confirmSpecialChar = confirm("Do you want special characters? Click 'OK' for yes, click 'Cancel' for no.");
  var passwordLength = Number(prompt("Length of the password? Enter a number between 8~128."));
  console.log(passwordLength);

  //must enter a number between 8~128
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    var passwordLength = Number(prompt("Length of the password? Enter a number between 8~128."));
    console.log(passwordLength);
    console.log(isNaN(passwordLength));
  }

  //an empty array to store password
  var password = [];

  //randomly generator password
  for (let i = 0; i < passwordLength; i++) {
    if (confirmUppercase === true && confirmLowercase === false && confirmNumber === false && confirmSpecialChar === false) {
      password.push(randomPickerUppercase());
    } else if (confirmUppercase === false && confirmLowercase === true && confirmNumber === false && confirmSpecialChar === false) {
      password.push(randomPickerLowercase());
    } else if (confirmUppercase === false && confirmLowercase === false && confirmNumber === true && confirmSpecialChar === false) {
      password.push(randomPickerNumber());
    } else if (confirmUppercase === false && confirmLowercase === false && confirmNumber === false && confirmSpecialChar === true) {
      password.push(randomPickerSpecialChar());
    } else if (confirmUppercase === true && confirmLowercase === false && confirmNumber === true) {

    } else if (confirmUppercase === false && confirmLowercase === true && confirmNumber === true) {

    } else if (confirmUppercase === true && confirmLowercase === true && confirmNumber === false) {

    } else {

    }
  }

  //return password in string
  return password.join("");
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