
// Assignment Code here
var userInfo = {
  passLength: 0,
  chars: "",
  password: ""
};

// characters to use
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = /[!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`]/;


//Prompts asking for password length
function chooseLength() {
  userInfo.passLength = prompt("Enter a number between 8 and 128");
  chooseLength();
}

  // confirm length parameters
if(userInfo.value.length >= 8) {
  userInfo.passLength.remove("invalid");
  userInfo.passLength.add("valid");
} else {
  userInfo.passLength.remove("valid");
  userInfo.passLength.add("invalid");
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

function generatePassword() {

// Alert Message
function alert ();
  window.alert("Answer the following to receive your generated password");

};

// Write password to the #password input

function writePassword() {
  console.log('Password');
  return userInfo.password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

}
