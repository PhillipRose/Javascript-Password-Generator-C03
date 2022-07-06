// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", passLength);


// ALL POSSIBLE CHARACTERS FOR PASSWORD USE AS ARRAYS. 
var lowercaseArray = 'abcdefghijklmnopqrstuvwxyz'.split(``);

var uppercaseArray = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split(``);

var numberArray = '0123456789'.split(``);

var specialArray = `!"#$%&'()*+,-./:;<>=?@[]^_|{}~`.split(``);


// used when filling in the rest of the password with a for loop over the combined arrays. 
var charCount = 0;

// array to store characters as a result of user choices to the confirms
var fillerArray = [];



//  FIRST function that is called after hitting the generate password button. makes sure the input type is changed to a number if possible and resets the password content and length.
function passLength(){
  fillerArray = [];
  charCount = 0;
  var charLength = prompt('Enter the desired length of your password. Must be between 8 and 128 characters long');
  let number = Number(charLength);
  numValue(number);
};

//  makes sure the user input is a number and between 8-128 then calls the special character prompt or resets if input is not valid.
function numValue (chars) {
  if (typeof chars === 'number' && chars >= 8 && chars <= 128){
    charCount = chars;
    specialPrompt();
  } else {
    alert(`Your input is invalid, please enter a whole number between 8 and 128`)
    passLength();
  }  
};

//  Once the input is valid, ask if user wants at least 1 special character in their password. Save the answer as true/false. Then move onto the number prompt.
// pick a random element from the array 
// Used https://stackoverflow.com/a/5915122/19148641 as a resource.
function specialPrompt() {
  var specialChars = confirm('do you want at least one special character in your password? Ex:()*+,-./:;<>=?@[]^_|{}');
  var specialCheck = specialChars;
  if (specialChars) {
    var randomSpecial = specialArray[Math.floor(Math.random()*specialArray.length)];
    fillerArray.push(randomSpecial);
    charCount -= 1;
    numsPrompt(specialCheck);
  } else {
    numsPrompt(specialCheck);
  }  
};
 
// {{COMPLETE}} Passes down the boolean from specialCheck and logs its own in numsCheck. Passes both to uppercasePrompt.  
function numsPrompt(specialCheck){
  var numsChars = confirm('Do you want at least one number in your password?');
  var numsCheck = numsChars;
  if (numsChars) {
    var randomNums = numberArray[Math.floor(Math.random()*numberArray.length)];
    fillerArray.push(randomNums);
    charCount -= 1;
    uppercasePrompt(specialCheck, numsCheck);
  } else {
    uppercasePrompt(specialCheck, numsCheck);
  }
}

// checks if the user wants any uppercase letters in the password as well as passes the booleans from previous functions through along with its own 
function uppercasePrompt (specialCheck, numsCheck) {
  var uppercaseChars = confirm('Do you want at least one uppercase letter in your password?');
  var uppercaseCheck = uppercaseChars;
  if (uppercaseChars) {
    var randomUppercase = uppercaseArray[Math.floor(Math.random()*uppercaseArray.length)];
    fillerArray.push(randomUppercase);
    charCount -= 1;
    console.log(charCount + ' is the current count');
    lowercasePrompt(specialCheck, numsCheck, uppercaseCheck);
  } else {
    lowercasePrompt(specialCheck, numsCheck, uppercaseCheck);
  }
};

// last check on if the user wants lowercase letters in the password and also passes all the booleans from the other confirms to the next function 
function lowercasePrompt(specialCheck, numsCheck, uppercaseCheck){
  var lowercaseChars = confirm('do you want at least one lowercase letter in your password?');
  var lowercaseCheck =  lowercaseChars;

  if (lowercaseChars){
    var randomLowercase = lowercaseArray[Math.floor(Math.random()*lowercaseArray.length)];
    fillerArray.push(randomLowercase);
    charCount -= 1;
    getCharList(specialCheck, numsCheck, uppercaseCheck, lowercaseCheck);
  } else {
    getCharList(specialCheck, numsCheck, uppercaseCheck, lowercaseCheck);
  }
}

// uses the booleans from the previous 4 functions to make an array for the next function and also makes sure at least one character type was selected  
function getCharList(specialCheck, numsCheck, uppercaseCheck, lowercaseCheck) {
  var special = specialCheck;
  var nums = numsCheck;
  var upper = uppercaseCheck;
  var lower = lowercaseCheck;
  if(!special){
    special = [];
  } else {
    special = specialArray;
  } 
  if (!nums){
    nums = [];
  } else {
    nums = numberArray;
  }
  if (!upper){
    upper = []    
  } else {
    upper = uppercaseArray;
  }
  if (!lower){
    lower = []
  } else {
    lower = lowercaseArray;
  }
  var listPassword = [...special, ...nums, ...upper, ...lower];
  if (listPassword.length === 0){
    window.alert('You must pick at least one type of character for your password, please start over.')
    specialPrompt();
  } else {
    fillToLength(listPassword, charCount);
  }
}

// uses the array from the previous function to randomly pick extra characters until the correct length is made and then passes that into the last function to display it. 
function fillToLength(listPassword, charCount){
  for (let i = 0; i < charCount;i++) {
    console.log(i);
    fillerArray.push(listPassword[Math.floor(Math.random()*listPassword.length)]);     
  }
  var finalPass = fillerArray.join('');
  writePassword(finalPass);
};

// This will display the password once it is completed and in a string form use arrayName.join('')
// Write password to the #password input
function writePassword(finalPass) {
  var passwordText = document.querySelector("#password");
  passwordText.value = finalPass;
};