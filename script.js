//Declare global variables and datasources //
var lowerCharacters = 'abcdefghijklmnopqrstuvwxy';
var upperCharacters = lowerCharacters.toUpperCase();
var numbers = '0123456789';
var specialCharacters = '!@#$%^&*())-+';
var universalCharacters = '';
var lowerCasePref = false;
var upperCasePref = false;
var numbersPref = false;
var specialPref = false;
var prefCount = '';

// This is the id for the button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Request password length prompt//
function getPasswordLength() {
  return prompt("What's the password length?");
}

//Request preferences//
function getPrefCount(){
    // Get lowercase pref//
lowerCasePref = confirm("Do you want lower case letters? Ok = Yes / Cancel = No. ");
console.log(lowerCasePref);

// Get upperCase pref//
upperCasePref = confirm("Do you want upper case letters? Ok = Yes / Cancel = No. ");
console.log(upperCasePref);

// Get numbers pref//
numbersPref = confirm("Do you want numbers? Ok = Yes / Cancel = No. ");
console.log(numbersPref);

// Get numbers pref//
specialPref = confirm("Do you want numbers? Ok = Yes / Cancel = No. ");
console.log(specialPref);

if( lowerCasePref === true || upperCasePref === true || numbersPref === true || specialPref === true) {
  prefCount = 1;
  console.log(prefCount);    
} else {
  prefCount = 0;
  return prefCount;
}}

//Build Universale Character String//

function getUniversalCharString(){
  // Get lowercase options//
if (lowerCasePref === true)
universalCharacters = universalCharacters+lowerCharacters; 
console.log(lowerCasePref + " " + universalCharacters);

// Get get upperCase char//
if (upperCasePref === true)
universalCharacters = universalCharacters+upperCharacters;
console.log(upperCasePref + " " + universalCharacters);

// Get get numbers char//
if (numbersPref === true)
universalCharacters = universalCharacters+numbers;
console.log(numbersPref + " " + universalCharacters);

// Get get special char//
if (specialPref === true)
universalCharacters = universalCharacters+specialCharacters;
console.log(specialPref + " " + universalCharacters);
console.log(universalCharacters);

}




function generateRandomIndex(maxValue) {
  // Return a value between 0 and maxValue
  // Use: Math.floor() and Math.random()
  return (Math.floor(Math.random() * Math.floor(maxValue - 1)));
}

function generatePassword()
 {
      do {
    // Get desired password length//
    alert("Password must be greater than 8 or less than 128");
    passwordLength = getPasswordLength();
  } while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);
   
  do {
    // Get preferences//
    alert("You must select at least one character criterion.")
    prefCount = getPrefCount();
  } while (prefCount === 0);

  getUniversalCharString();
  console.log("Char string is " + universalCharacters);
  // do {
  //   // Get universal string//
  //  universalCharacters = getUniversalCharString();
  // } while (universalCharacters === '');
  // // return generatePassword();
 }
  

