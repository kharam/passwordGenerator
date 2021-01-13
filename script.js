// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // possible password sets are a-z A-Z, 0-9, ~!@#$%^&*()|}{}/.,<>?

  // Get user confirmation regarding character types
  let passwordCriteria = generateCriteria();

  // With the criteria generating the password
  let randomString = generatePasswordWithCriteria(passwordCriteria);

  console.log(randomString);

  return randomString;

  /**
   * Getting the the user confirmation, and generate password criteria object
   *
   * @returns {length: Number, lowercase: Boolean, uppercase: Boolean, nubmer: Boolean, special: Boolean}
   */
  function generateCriteria() {
    // Getting the length of password from user
    let length = getPasswordLength();

    // Getting the password type.
    let passwordCriteria = getPasswordCriteria();

    // appending length to the password criteria
    passwordCriteria["length"] = length;

    console.log(passwordCriteria);

    // return password criteria
    return passwordCriteria;

    function getPasswordLength() {
      let length = 0;

      // keep prompting till get valid length (8..128)
      while (length < 8 || length > 128) {
        length = Number(
          prompt("Type the length of the password you want (8~128)")
        );
      }

      return length;
    }

    function getPasswordCriteria() {
      let passowrdCriteria = {};

      // Choosing the password critieria from user input
      while (true) {
        // Displaying each criteria
        let lowercase = confirm("Do you want lowercase");
        let uppercase = confirm("Do you want upper case");
        let number = confirm("Do you want number");
        let special = confirm("Do you want special character");

        // If one of the criteria is true
        if (lowercase || uppercase || number || special) {
          // Se the password criteria object
          passowrdCriteria = {
            lowercase: lowercase,
            uppercase: uppercase,
            number: number,
            special: special,
          };
          break;
        }
      }

      return passowrdCriteria;
    }
  }

  function generatePasswordWithCriteria(passwordCriteria) {
    // extracting length
    const length = passwordCriteria.length;

    // Building criteria function list
    let criteria = [];

    // fill up the criteria fucnction
    if (passwordCriteria.lowercase) criteria.push(randomLowerChar);
    if (passwordCriteria.uppercase) criteria.push(randomUpperChar);
    if (passwordCriteria.number) criteria.push(randomNumber);
    if (passwordCriteria.special) criteria.push(randomSpecialChar);

    let randomString = "";

    for (let i = 0; i < length; ++i) {
      let random = Math.floor(Math.random() * criteria.length);
      let randomFunction = criteria[random];
      randomString += randomFunction();
    }

    return randomString;

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
      const charSet = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
      const randomChar = generateRandomFromCharSet(charSet);

      return randomChar;
    }

    function generateRandomFromCharSet(charSet) {
      const charArray = charSet.split("");
      const random = Math.floor(Math.random() * charArray.length);

      return charArray[random];
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
