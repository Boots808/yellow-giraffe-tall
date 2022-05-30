
// Assignment Code here
var userInfo = {
  passLength: 0,
  chars: "",
  password: "",
};

// characters to use
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = /[!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`]/;

// Alert Message

function prompt() {
  window.alert("Let's get a password!");
  window.alert("Use Lowercase Letters?");
  window.alert("Use uppercase Letters?");
  window.alert("Use Special Characters?")
}
prompt();

//Prompts asking for password length
function passwordLength() {
  window.alert(userInfo.passLength("Enter a number between 8 and 128"));
  Length();
}

//user to define password criteria
function chooseChars() {
  userInfo.chars="";
  var numericCheck = confirm("Include numbers in your password?");
  var specialCheck = confirm("Include special characters?");
  var upperCaseCheck = confirm("Include Upper Case Letters?");

  if (numericCheck) {
    userInfo.chars += numericChars;
  }

  if (specialCheck) {
    userInfo.chars += specialChars;
  }

  if (upperCaseCheck) {
    userInfo.chars += uppercaseChars;
  }
};

// Write password to the #password input

function generatePassword() {
  console.log("password");
  generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);