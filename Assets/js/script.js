// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", passLength);


// ALL POSSIBLE CHARACTERS FOR PASSWORD USE AS ARRAYS. 
var lowercaseArray = 'abcdefghijklmnopqrstuvwxyz'.split(``);

var uppercaseArray = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split(``);

var numberArray = '0123456789'.split(``);
// console.log(numberArray);

// had to use `` to avoid possible errors with "" or ''.
var specialArray = `!"#$%&'()*+,-./:;<>=?@[]^_|{}~`.split(``);


// used when filling in the rest of the password with a for loop over the combined arrays. 
var charCount = 0;


var fillerArray = [];

// This will display the password once it is completed and in a string form use arrayName.join('')
// Write password to the #password input
function writePassword(finalPass) {
  var passwordText = document.querySelector("#password");
  passwordText.value = finalPass;
}

// {{COMPLETED}} FIRST function that is called after hitting the generate password button. makes sure the input type is changed to a number if possible and resets the password content and length.
function passLength(){
  fillerArray = [];
  console.log(fillerArray);
  charCount = 0;
  var charLength = prompt('Enter the desired length of your password. Must be between 8 and 128 characters long');
  let number = Number(charLength);
  numValue(number);
};

// {{COMPLETED}} makes sure the user input is a number and between 8-128 then calls the special character prompt or resets if input is not valid.
function numValue (chars) {
  if (typeof chars === 'number' && chars >= 8 && chars <= 128){
    charCount = chars;
    specialPrompt();
  } else {
    alert(`Your input is invalid, please enter a whole number between 8 and 128`)
    passLength();
  }  
};

// {{COMPLETED}} Once the input is valid, ask if user wants at least 1 special character in their password. Save the answer as true/false. Then move onto the number prompt.
// pick a random element from the array 
// Used https://stackoverflow.com/a/5915122/19148641 as a resource.
function specialPrompt() {
  var specialChars = confirm('do you want at least one special character in your password? Ex:()*+,-./:;<>=?@[]^_|{}');
  var specialCheck = specialChars;
  if (specialChars) {
    var randomSpecial = specialArray[Math.floor(Math.random()*specialArray.length)];
    fillerArray.push(randomSpecial);
    numsPrompt(specialCheck);
  } else {
    numsPrompt(specialCheck);
  }
  console.log(fillerArray);  
};
 
// {{COMPLETE}} Passes down the boolean from specialCheck and logs its own in numsCheck. Passes both to uppercasePrompt.  
function numsPrompt(specialCheck){
  var numsChars = confirm('Do you want at least one number in your password?');
  var numsCheck = numsChars;
  if (numsChars) {
    var randomNums = numberArray[Math.floor(Math.random()*numberArray.length)];
    fillerArray.push(randomNums);
    uppercasePrompt(specialCheck, numsCheck);
  } else {
    uppercasePrompt(specialCheck, numsCheck);
  }
  console.log(fillerArray);
}

function uppercasePrompt (specialCheck, numsCheck) {
  var uppercaseChars = confirm('Do you want at least one uppercase letter in your password?');
  var uppercaseCheck = uppercaseChars;
  if (uppercaseChars) {
    var randomUppercase = uppercaseArray[Math.floor(Math.random()*uppercaseArray.length)];
    fillerArray.push(randomUppercase);
    lowercasePrompt(specialCheck, numsCheck, uppercaseCheck);
  } else {
    lowercasePrompt(specialCheck, numsCheck, uppercaseCheck);
  }
  console.log(fillerArray);
};

function lowercasePrompt(specialCheck, numsCheck, uppercaseCheck){
  var lowercaseChars = confirm('do you want at least one lowercase letter in your password?');
  var lowercaseCheck =  lowercaseChars;

  if (lowercaseChars){
    var randomLowercase = lowercaseArray[Math.floor(Math.random()*lowercaseArray.length)];
    fillerArray.push(randomLowercase);
    getCharList(specialCheck, numsCheck, uppercaseCheck, lowercaseCheck);
  } else {
    getCharList(specialCheck, numsCheck, uppercaseCheck, lowercaseCheck);
  }
  console.log(fillerArray);
}

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
    nums = [''];
  } else {
    nums = numberArray;
  }
  if (!upper){
    upper = ['']    
  } else {
    upper = uppercaseArray;
  }
  if (!lower){
    lower = ['']
  } else {
    lower = lowercaseArray;
  }
  var listPassword = [...special, ...nums, ...upper, ...lower];
  fillToLength(listPassword, charCount);
}

function fillToLength(listPassword, charCount){
  console.log(fillerArray);
  for (let i = 0; i < charCount;i++) {
    console.log(i);
    fillerArray.push(listPassword[Math.floor(Math.random()*listPassword.length)]); 
    if (fillerArray.length+1 (charCount+1)){
  
    }
    // i+1;     
  }
  var finalPass = fillerArray.join('')
  console.log(fillerArray);
  writePassword(finalPass);
};

// Add event listener to generate button
// ORIGINAL EVENTLISTENER FOR BUTTON 
// generateBtn.addEventListener("click", writePassword);



