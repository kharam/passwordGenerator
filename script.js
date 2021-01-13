// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/**
 * returns enerated password, and pop up confirmation to set the criteria of the password.
 */
function generatePassword() {
  // Get user confirmation regarding character types
  const passwordCriteria = generateCriteria();

  // With the criteria generating the password
  const randomString = generatePasswordWithCriteria(passwordCriteria);

  return randomString;

  /**
   * Getting the the user confirmation, and generate password criteria object
   *
   * @returns {length: Number, lowercase: Boolean, uppercase: Boolean, nubmer: Boolean, special: Boolean}
   */
  function generateCriteria() {
    // Getting the length of password from user
    const length = getPasswordLength();

    // Getting the password type.
    const passwordCriteria = getPasswordCriteria();

    // appending length to the password criteria
    passwordCriteria["length"] = length;

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
        const lowercase = confirm("Do you want lowercase");
        const uppercase = confirm("Do you want upper case");
        const number = confirm("Do you want number");
        const special = confirm("Do you want special character");

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

  /**
   * returns generated password based on criteria
   *
   * @param {length: Number, lowercase: Boolean, uppercase: Boolean, nubmer: Boolean, special: Boolean} passwordCriteria
   */
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

    /**
     * returns a random lowercase alphabet.
     */
    function randomLowerChar() {
      const alphabet = "abcdefghijklmnopqrstuvwxyz";
      const randomChar = generateRandomFromCharSet(alphabet);

      return randomChar;
    }

    /**
     * returns a uppercase alphabet.
     */
    function randomUpperChar() {
      return randomLowerChar().toUpperCase();
    }

    /**
     * returns a random single digit char number.
     */
    function randomNumber() {
      return Math.floor(Math.random() * 10).toString();
    }

    /**
     * returns a special CharacterData.
     */
    function randomSpecialChar() {
      const charSet = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
      const randomChar = generateRandomFromCharSet(charSet);

      return randomChar;
    }

    /**
     *  Returns a random character from charset
     *
     * @param String charSet
     */
    function generateRandomFromCharSet(charSet) {
      const charArray = charSet.split("");
      const random = Math.floor(Math.random() * charArray.length);

      return charArray[random];
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
