// Assignment code here
var totalPassword = ""
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "0123456789"
var special = "!@#$%^&*()?!"


function generatePassword() {

var length = prompt("How long is your password?")
console.log(length);
  if (length < 8 || length > 128) {
    alert("password must be between 8 and 128 characters.")
    return generatePassword();
  };

var textUpperCase = window.confirm("Upper case letters in your password?")
  if (textUpperCase) {
    totalPassword += upper;
  };

var textLowerCase = window.confirm("Lower case letters in your password?")
  if (textLowerCase) {
    totalPassword += lower;
  };

var textNumbers = window.confirm("Numbers in your password?")
  if (textNumbers) {
    totalPassword += number;
  };

var textSpecCh = window.confirm("Special Characters in your password?")
  if (textSpecCh) {
    totalPassword += special;
  };

  var finalPassword = ''

  for (var i = 0; i <= length; i++) {
    finalPassword += totalPassword.charAt(Math.floor(Math.random() * totalPassword.length));
  }


return finalPassword;

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
