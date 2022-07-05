// Assignment Code
var generateBtn = document.querySelector("#generate");


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

// used when filling in the rest of the password with a for loop over the combined arrays. 
var charCount = 0;

// combine all 'true' value characters into this last array to fill password to the correct length 
var fillerArray = [];

// This will display the password once it is completed and in a string form use arrayName.join('')
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// {{COMPLETED}} FIRST function that is called after hitting the generate password button.
function passLength(){
  var charLength = prompt('Enter the desired length of your password. Must be between 8 and 128 characters long');
  let number = Number(charLength);
  numCheck(number);
};

// {{COMPLETED}} makes sure the user input is a number and between 8-128 then calls the special character prompt or resets if input is not valid.
function numCheck (chars) {
  if (typeof chars === 'number' && chars >= 8 && chars <= 128){
    console.log('This input IS a number' + chars);
    charCount = chars;
    specialPrompt();
  } else {
    alert(`Your input is invalid, please enter a whole number between 8 and 128`)
    passLength();
  }  
};

// {{COMPLETED}} Once the input is valid, ask if user wants at least 1 special character in their password. Save the answer as true/false. Then move onto the number prompt.

// pick a random element from the special characters array 
// Used https://stackoverflow.com/a/5915122/19148641 as a resource
function specialPrompt() {
  console.log(charCount);
  var specialChars = confirm('do you want at least one special character in your password? Ex:()*+,-./:;<>=?@[]^_|{}');
  var specialCheck = specialChars;
  if (specialChars) {
    var randomSpecial = specialArray[Math.floor(Math.random()*specialArray.length)];
    fillerArray.push(randomSpecial);
    console.log(fillerArray);
    console.log('this is the output from the confirm! ' + specialChars);
    numsPrompt(specialCheck);
  } else {
    console.log('no special characters');
    console.log('this is the output from the confirm? ' + specialChars);
    numsPrompt(specialCheck);
  }
  
};
 


function numsPrompt(specialCheck){
  console.log(specialCheck);
  var numsChars = confirm('Do you want at least one number in your password?');
  var numsCheck = numsChars;
  if (numsChars) {
    var randomNums = numberArray[Math.floor(Math.random()*numberArray.length)];
    fillerArray.push(randomNums);
    uppercasePrompt(specialCheck, numsCheck);
  } else {
    uppercasePrompt(specialCheck, numsCheck);
  }
}

function uppercasePrompt (specialCheck, numsCheck) {
  var uppercaseChars = confirm('Do you want at least one uppercase letter in your password?');
  var uppercaseCheck = uppercaseChars;
  if (uppercaseChars) {
    var randomUppercase = uppercaseArray[Math.floor(Math.random()*uppercaseArray.length)];
    fillerArray.unshift(randomUppercase);
    lowercasePrompt(specialCheck, numsCheck, uppercaseCheck);
  } else {
    lowercasePrompt(specialCheck, numsCheck, uppercaseCheck);
  }
  console.log('These are the values from the functions so far as T/F ' + specialCheck + ' ' + numsCheck + ' ' + uppercaseCheck);
};

function lowercasePrompt(specialCheck, numsCheck, uppercaseCheck){
  console.log('this is the pass so far ! ' + fillerArray);
}


// Add event listener to generate button
// ORIGINAL EVENTLISTENER FOR BUTTON 
// generateBtn.addEventListener("click", writePassword);



generateBtn.addEventListener("click", passLength);


// TODO: use .alert() with mdn syntax to create propmts which return true or false if confirm or cancel is clicked

// TODO: make input(s) to allow for length of password  and number of special, number, uppercase, and lowercase characters to use if any, make all lowercase the default

// TODO: Make a function to pick char length between 8 - 128 use >= 8 && 128 <=

// TODO: make a function that can will pick at least one special character if true, one number if true, one uppercase letter if true, one lowercase letter if true. Also have it use math.random to pick from a combined array of all the true options until the correct length is reached and then return the whole password as a string.


// use window.confirm('message here') to get back true/false for the inclusion of different characters and for filler characters at the end 