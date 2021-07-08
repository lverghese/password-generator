// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    
    var passwordLength = window.prompt("How long do you want your password? (8-128) characters");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please try again! You must choose a number between 8 and 128!");
    return 0;
  } 




  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);