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
  var generatedPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = generatedPassword;

  //reset password array
  password = [];
}

//password generator
function generatePassword() {

  //to store how confirm from user
  var confirmCounter = 0;

  var confirmAtLeastOneType = true;

  //to confirm which type of characters user needs
  while (confirmAtLeastOneType) {
    var confirmUppercase = confirm("Do you want uppercase characters?\nClick 'OK' for yes, click 'Cancel' for no.");
    if (confirmUppercase) {
      confirmCounter = confirmCounter + 1;
      confirmAtLeastOneType = false;
    }
    var confirmLowercase = confirm("Do you want lowercase characters?\nClick 'OK' for yes, click 'Cancel' for no.");
    if (confirmLowercase) {
      confirmCounter = confirmCounter + 1;
      confirmAtLeastOneType = false;
    }
    var confirmNumber = confirm("Do you want numbers?\nClick 'OK' for yes, click 'Cancel' for no.");
    if (confirmNumber) {
      confirmCounter = confirmCounter + 1;
      confirmAtLeastOneType = false;
    }
    var confirmSpecialChar = confirm("Do you want special characters?\nClick 'OK' for yes, click 'Cancel' for no.");
    if (confirmSpecialChar) {
      confirmCounter = confirmCounter + 1;
      confirmAtLeastOneType = false;
    }
    if (confirmAtLeastOneType) {
      alert("Please at least select one character type.")
    }
  }
  confirmAtLeastOneType = true;

  //enter how long the password
  var passwordLength = Number(prompt("Length of the password?\nEnter a number between 8~128."));

  //must enter a number between 8~128
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    var passwordLength = Number(prompt("Invild entry.\nEnter a number between 8~128."));
  }

  //store how many of each characters we need
  var charactersCounter;

  //split passwordlength into random numbers and return it as an array
  charactersCounter = randomlySplitNumber(passwordLength, confirmCounter);

  //generate password
  if (confirmUppercase) {
    getPassword(charactersCounter[0]);
    charactersCounter.splice(0, 1);
  }
  if (confirmLowercase) {
    getPassword(null, charactersCounter[0]);
    charactersCounter.splice(0, 1);
  }
  if (confirmNumber) {
    getPassword(null, null, charactersCounter[0]);
    charactersCounter.splice(0, 1);
  }
  if (confirmSpecialChar) {
    getPassword(null, null, null, charactersCounter[0]);
  }

  //shuffle password
  password = shuffle(password);

  //return password in string
  return password.join("");
}

//randomly add characters to password array
function getPassword(counterUppercase, counterLowercase, counterNumeric, counterSpecialCharacter) {
  if (counterUppercase > 0) {
    for (i = 0; i < counterUppercase; i++) {
      password.push(randomPickerUppercase());
    }
  }
  if (counterLowercase > 0) {
    for (i = 0; i < counterLowercase; i++) {
      password.push(randomPickerLowercase());
    }
  }
  if (counterNumeric > 0) {
    for (i = 0; i < counterNumeric; i++) {
      password.push(randomPickerNumber());
    }
  }
  if (counterSpecialCharacter > 0) {
    for (i = 0; i < counterSpecialCharacter; i++) {
      password.push(randomPickerSpecialChar());
    }
  }
}

//split password length randomly
function randomlySplitNumber(passwordLength, counter) {
  var counterArr = ["", "", "", ""];
  if (counter === 1) {
    counterArr[0] = passwordLength;
  } else if (counter === 2) {
    counterArr[0] = Math.floor(Math.random() * passwordLength) + 1;
    while (counterArr[0] === 0 || counterArr[0] === passwordLength) {
      counterArr[0] = Math.floor(Math.random() * passwordLength) + 1;
    }
    counterArr[1] = passwordLength - counterArr[0];
  } else if (counter === 3) {
    counterArr[0] = Math.floor(Math.random() * passwordLength) + 1;
    while (counterArr[0] === 0 || counterArr[0] === passwordLength || counterArr[0] === passwordLength - 1) {
      counterArr[0] = Math.floor(Math.random() * passwordLength) + 1;
    }
    if (counterArr[0] === passwordLength - 2) {
      counterArr[1] = 1;
      counterArr[2] = 1;
      return counterArr;
    }
    counterArr[1] = Math.floor(Math.random() * (passwordLength - counterArr[0])) + 1;
    while (counterArr[1] === 0 || counterArr[1] === passwordLength - counterArr[0]) {
      counterArr[1] = Math.floor(Math.random() * (passwordLength - counterArr[0])) + 1;
    }
    counterArr[2] = passwordLength - counterArr[0] - counterArr[1];
  } else if (counter === 4) {
    counterArr[0] = Math.floor(Math.random() * passwordLength) + 1;
    while (counterArr[0] === 0 || counterArr[0] === passwordLength || counterArr[0] === passwordLength - 1 || counterArr[0] === passwordLength - 2) {
      counterArr[0] = Math.floor(Math.random() * passwordLength) + 1;
    }
    if (counterArr[0] === passwordLength - 3) {
      counterArr[1] = 1;
      counterArr[2] = 1;
      counterArr[3] = 1;
      return counterArr;
    }
    counterArr[1] = Math.floor(Math.random() * (passwordLength - counterArr[0])) + 1;
    while (counterArr[1] === 0 || counterArr[1] === passwordLength - counterArr[0] || counterArr[1] === passwordLength - counterArr[0] - 1) {
      counterArr[1] = Math.floor(Math.random() * (passwordLength - counterArr[0])) + 1;
    }
    if (counterArr[1] === passwordLength - counterArr[0] - 2) {
      counterArr[2] = 1;
      counterArr[3] = 1;
      return counterArr;
    }
    counterArr[2] = Math.floor(Math.random() * (passwordLength - counterArr[0] - counterArr[1])) + 1;
    while (counterArr[2] === 0 || counterArr[2] === passwordLength - counterArr[0] - counterArr[1]) {
      counterArr[2] = Math.floor(Math.random() * (passwordLength - counterArr[0] - counterArr[2])) + 1;
    }
    counterArr[3] = passwordLength - counterArr[0] - counterArr[1] - counterArr[2];
  }
  return counterArr;
}

//shuffle array
function shuffle(arr) {
  var copy = [];
  var loopNumber = arr.length;
  for (i = 0; i < loopNumber; i++) {
    var current = Math.floor(Math.random() * arr.length);
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