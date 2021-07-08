// Assignment Code
var generateBtn = document.querySelector("#generate");


//generate password

function generatePassword(passwordLength, passwordLower, passwordUpper, passwordNumbers, passwordSpecial) {

    var password = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetUpper = alphabet.toUpperCase();
  const special = "!@#$%^&*_-";
  const numbers = "0123456789";
  var totalLibrary = "";
  var libArray = [];

  if (passwordLower) {
      totalLibrary = totalLibrary + alphabet;
  }

  if (passwordUpper) {
        totalLibrary = totalLibrary + alphabetUpper;
  }

  if (passwordNumbers) {
      totalLibrary = totalLibrary + numbers;
  }

  if (passwordSpecial) {
      totalLibrary = totalLibrary + special;
  }
  libArray = totalLibrary.split

  console.log(totalLibrary);
  



  //for (var i = 0; i < passwordLength; i++) {



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