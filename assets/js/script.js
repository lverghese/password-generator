// Assignment Code
var generateBtn = document.querySelector("#generate");


//generate password

function generatePassword(passwordLength, passwordLower, passwordUpper, passwordNumbers, passwordSpecial) {

    var password = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const special = "!@#$%^&*_-";
  const numbers = "0123456789";

}


// Write password to the #password input
function writePassword() {
    
    var passwordLength = window.prompt("How long do you want your password? (8-128) characters");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please try again! You must choose a number between 8 and 128!");
    return 0;
  } 

  var passwordLower = window.confirm("Do you want lowercase letters?");
 
 var passwordUpper = window.confirm("Do you want uppercase letters?");

 var passwordNumbers = window.confirm("Do you want numbers?");

 var passwordSpecial = window.confirm("Do you want special characters?");


  var password = generatePassword(passwordLength, passwordLower, passwordUpper, passwordNumbers, passwordSpecial);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);