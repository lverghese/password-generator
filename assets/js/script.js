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

  //adding conditions chosen to total library
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

  if (totalLibrary.length > 0) {
    for (var i = 0; i < passwordLength; i++) {
        console.log(i);
      password += totalLibrary[Math.floor(Math.random() * totalLibrary.length)];
  
    };
    //send info to password variable
    return password;

  } else {
      //indicates error, no conditions selected
      return 0;
  }
  

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

//if statement if no conditions are selected for the password
  if (password == 0) {
      alert("You need to select at least one of the conditions to generate a password");
  } else {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
 


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);