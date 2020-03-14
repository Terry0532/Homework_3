// Assignment Code
var generateBtn = document.querySelector("#generate");

//object of all the characters for password
var passwordCharacters = {
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "h", "I", "J", "k", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  numeric: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specialCharacters: [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~", "\\"]
}

//to confirm which type of characters you need
var confirmUppercase = confirm("uppercase characters? ok for yes, cancel for no.");
var confirmLowercase = confirm("lowercase characters? ok for yes, cancel for no.");
var confirmNumber = confirm("numbers? ok for yes, cancel for no.");
var confirmSpecialChar = confirm("special characters? ok for yes, cancel for no.");
var passwordLength = Number(prompt("length of the password?"));

//an array of generated password
var password = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//password generator
function generatePassword() {
  for (let i = 0; i < passwordLength; i++) {
    if (confirmUppercase === true && confirmLowercase === false && confirmNumber === false && confirmSpecialChar === false) {
      password.push(randomPickerUppercase());
      console.log(password.join(""));
    } else if (confirmUppercase === false && confirmLowercase === true && confirmNumber === false && confirmSpecialChar === false) {

    } else if (confirmUppercase === false && confirmLowercase === false && confirmNumber === true && confirmSpecialChar === false) {

    } else if (confirmUppercase === false && confirmLowercase === false && confirmNumber === false && confirmSpecialChar === true) {

    } else if (confirmUppercase === true && confirmLowercase === false && confirmNumber === true) {

    } else if (confirmUppercase === false && confirmLowercase === true && confirmNumber === true) {

    } else if (confirmUppercase === true && confirmLowercase === true && confirmNumber === false) {

    } else {

    }
  }
}

//random pick character from password object
function randomPickerUppercase() {
  return passwordCharacters.uppercase[Math.floor(Math.random() * 26)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);