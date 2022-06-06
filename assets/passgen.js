//declare variables
var passLength="";
var password=document.getElementById("password");
var specialChar;
var lowerCaseChar;
var upperCaseChar;
var numericChar;

var numberArray = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27"];
var lowerLetterArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperLetterArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var characterArray = ["!","@","#","$","%","^","&","*","(",")"];


//Prompt question when button is pushed
document.querySelector("#generate").addEventListener("onclick", displayPassword);


  function generatePassword() {
    var passLength = (prompt("How many characters do you want to use for your password?"));
  }

  //Alert if answer is not within specified range
function genPassword() {
  while (passLength <= 8 || passLength >= 128) {
    alert("Password length MUST be between 8-128 characters!");
  }


//Password prompt questions using javascript confirm method
var specialChar = confirm("Would you like to include special characters in your password?");
var lowerCaseChar = confirm("Would you like to include lower case characters in your password?");
var upperCaseChar = confirm("Would you like to include upper case characters in your password?");
var numericChar = confirm("Would you like to include numbers in your password?");




//password character arrays

}

//create loop for password generation
for (var i = 0; <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
}



//resources
// https://dev.to/code_mystery/random-password-generator-using-javascript-6a