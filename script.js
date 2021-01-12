// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  function getUserconfirmation() {}

  function generatePasswordWithCriteria() {
    // return random lowercase alphabet.
    function randomLowerChar() {
      const alphabet = "abcdefghijklmnopqrstuvwxyz";
      const randomChar = generateRandomFromCharSet(alphabet);

      return randomChar;
    }

    // return random uppercase alphabet.
    function randomUpperChar() {
      return randomLowerChar().toUpperCase();
    }

    // return random number.
    function randomNumber() {
      return Math.floor(Math.random() * 10).toString();
    }

    // return random special character.
    function randomSpecialChar() {
      const charSet = "a-z A-Z, 0-9, ~!@#$%^&*()|}{}/.,<>?";
      const randomChar = generateRandomFromCharSet(charSet);

      return randomChar;
    }

    function generateRandomFromCharSet(charSet) {
      const charArray = charSet.split("");
      const random = Math.floor(Math.random() * charArray.length);

      return charArray[random];
    }
  }
  // possible password sets are a-z A-Z, 0-9, ~!@#$%^&*()|}{}/.,<>?

  // Get user confirmation regarding character types

  // With the criterial generating the password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
