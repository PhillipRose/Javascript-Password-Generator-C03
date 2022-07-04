// Assignment Code
var generateBtn = document.querySelector("#generate");
var testWindow = document.querySelector('body');

// ALL POSSIBLE CHARACTERS FOR PASSWORD USE AS ARRAYS. 
var lowercaseArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
// console.log(lowercaseArray);

var uppercaseArray = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
// console.log(uppercaseArray);

var numberArray = [0,1,2,3,4,5,6,7,8,9];
// console.log(numberArray);

// had to use `` to avoid possible errors with "" or ''.
var specialArray = `!"#$%&'()*+,-./:;<>=?@[]^_|{}~`.split(``);
// console.log(specialArray);

// combine all 'true' value characters into this last array to fill password to the correct length 
var fillerArray = [];
// fillerArray.push(...numberArray, ...specialArray);
// console.log(fillerArray);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//  this will be to test the various types of popups and what they output / how to catch it. 
function testPrompts (){
  var testPrompt = prompt('Is this showing in the window when body is clicked?');
  return testPrompt;
}

 console.log(testPrompts());
 console.log('this is a linebreak');
//  console.log(testPrompt);
 
 if (testPrompts() === 1){
  console.log('this is how to catch prompt output', testPrompts())
 } else {
  console.log('look up how to catch prompt output.', testPrompts());
 };


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
testWindow.addEventListener('click', testPrompts);

// TODO: use .alert() with mdn syntax to create propmts which return true or false if confirm or cancel is clicked

// TODO: make input(s) to allow for length of password  and number of special, number, uppercase, and lowercase characters to use if any, make all lowercase the default

// TODO: Make a function to pick char length between 8 - 128 use >= 8 && 128 <=

// TODO: make a function that can will pick at least one special character if true, one number if true, one uppercase letter if true, one lowercase letter if true. Also have it use math.random to pick from a combined array of all the true options until the correct length is reached and then return the whole password as a string.


// use window.confirm('message here') to get back true/false for the inclusion of different characters and for filler characters at the end 