// Assignment code here

var length = prompt("How long will your password be?");
console.log(length);
  if (length < 8 || length > 128) {
    alert ("Password must be between 8 and 128 characters.");
  };

var characters = prompt("Lower case or Upper case characters?");
  if (characters === "lower" || characters === "LOWER") {
    window.alert("Lower characters selected.")
  }
  else if (characters === "upper" || characters === "UPPER") {
    window.alert("Upper characters selected.")
  } else {
    window.alert("Neither option selected.")
  };

var specCharacters = prompt("Include special characters?");
  if (specCharacters === "yes" || specCharacters === "YES") {
    window.alert("Special characters will be used.")
  }
  else if (specCharacters === "no" || specCharacters === "NO") {
    window.alert("Special characters won't be used.")
  }



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
