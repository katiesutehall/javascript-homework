
var generateBtn = document.querySelector("#generate");

//arrays
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var arrNumbers = "0123456789".split("");
var arrSpecial = "!@#$%^&*?><".split("");
var hasNumbers = "0123456789".split("");




function generatePassword() {

    //prompts
    var length = prompt("How many characters would you like your password to have?");
    if (length < 8 || length > 128) {
        alert("Please enter a length between 8 and 128");
    }
    var specialChar = confirm("Would you like any special characters?");
    var numbers = confirm("Would you like numbers?");
    var lowerCase = confirm("Would you like lower case letters?");
    var upperCase = confirm("Would you like upper case letters?");

    var password = "";
    var characterArr = [];
    var passwordLength = parseInt(length);


    if (upperCase) {
        characterArr = characterArr.concat(upperCaseLetters)
    }

    if (lowerCase) {
        characterArr = characterArr.concat(lowerCaseLetters)
    }

    if (numbers) {
        characterArr = characterArr.concat(hasNumbers)
    }

    if (specialChar) {
        characterArr = characterArr.concat(arrSpecial)
    }
    console.log(characterArr)
    
    //loop over length prompt
    for (var i = 0; i < passwordLength; i++) {
        var random = Math.floor(Math.random() * characterArr.length);
        password += characterArr[random];

    }
    return password;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

