//Declare global variables and datasources //

var lowerCharacters = 'abcdefghijklmnopqrstuvwxyz';
var upperCharacters = lowerCharacters.toUpperCase();
var numbers = '0123456789';
var specialCharacters = '!@#$%^&*())-+';
var universalCharacters = '';
var lowerCasePref = false;
var upperCasePref = false;
var numbersPref = false;
var specialPref = false;
var prefCount = '';
var password = '';
var maxValue = universalCharacters.length;
var randomIndex = generateRandomIndex(universalCharacters);
var MaxValue = universalCharacters.length;


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
specialPref = confirm("Do you want special characters? Ok = Yes / Cancel = No. ");
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
// console.log("lowercase " + lowerCasePref + " " + universalCharacters);

// Get get upperCase char//
if (upperCasePref === true)
universalCharacters = universalCharacters+upperCharacters;
// console.log("uppercase " + upperCasePref + " " + universalCharacters);

// Get get numbers char//
if (numbersPref === true)
universalCharacters = universalCharacters+numbers;
// console.log("numbers " + numbersPref + " " + universalCharacters);

// Get get special char//
if (specialPref === true)
universalCharacters = universalCharacters+specialCharacters;
// console.log("specials " + specialPref + " " + universalCharacters);
return universalCharacters;

}

function generateRandomIndex(universalCharacters) {
  // Return a value between 0 and maxValue
  // Use: Math.floor() and Math.random()
  // var maxValue = universalCharacters.length;
    return (Math.floor(Math.random() * Math.floor(universalCharacters.length - 1)));
}


var password = ''
// for-loop ... start 0, and you will end with passwordLength
// Use a for-loop to pluck a character from universalCharacters using
// the generateRandomIndex() for the position or index
// index = generateRandomIndex();
// universalCharacters.charAt(index)
// password = password + universalCharacters.charAt(54);


function generatePassword()
 {
   var maxValue = universalCharacters.length; 

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
  generateRandomIndex(universalCharacters);

  var i;
  for(i=0; i < passwordLength; i++){
    index = generateRandomIndex(universalCharacters);
  universalCharacters.charAt(index)
  password = password + universalCharacters.charAt(index);
  // console.log(universalCharacters.charAt(index))
  }

  // console.log("Char string is " + universalCharacters);
  // console.log(universalCharacters.length);
  // randomIndex = generateRandomIndex(universalCharacters);
  // console.log("random index " +randomIndex);
  // console.log("password " + password);
  
  return password;
  
 }
  

