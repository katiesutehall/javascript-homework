//create varaible for generate button  (id of generate) and "grab" it using querySelector
var generateBtn = document.querySelector("#generate");

//arrays
//.split() splits each individual character into an index of an array
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var arrNumbers = "0123456789".split("");
var arrSpecial = "!@#$%^&*?><".split("");
var hasNumbers = "0123456789".split("");


console.log(hasNumbers)
console.log(arrSpecial)

//funtion that is going to generate the password
function generatePassword() {

    //prompts that generate user input; input is stored in variables
    var length = prompt("How many characters would you like your password to have?");
    //specifies the length parameters (between  and 128)
    if (length < 8 || length > 128) {
        alert("Please enter a length between 8 and 128");
        return;
    } if (!upperCase && !lowerCase && !numbers && !specialChar) {
        alert("please select at least one password type")
        return;
    }
    var specialChar = confirm("Would you like any special characters?");
    var numbers = confirm("Would you like numbers?");
    var lowerCase = confirm("Would you like lower case letters?");
    var upperCase = confirm("Would you like upper case letters?");

    //set password equal to an empty string
    var password = "";
    //create an empty variable
    var characterArr = [];
    //takes length string from prompt and converts the length into a number
    var passwordLength = parseInt(length);

    //if user wants uppercase characters (upperCase === true) then add (.concat) upperCaseLetters array into new characterArr
    if (upperCase) {
        characterArr = characterArr.concat(upperCaseLetters)
        //concat is used to merge two or more arrays
    }
    //if user wants lowercase characters, combine lowerCaseLetters with characterArr
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
        //generating random index
        var random = Math.floor(Math.random() * characterArr.length);
        //password equal to itself + random index in character array
        password += characterArr[random];
        console.log(random);

    }
    return password;
    //returns finished password
}

// Write password to the #password input
function writePassword() {
    //calling function and storing result in password variable
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    //putting the password in the password text area in browser
    passwordText.value = password;
}

    // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//arguments are placeholders
function add(num1, num2){
    return num1 + num2;
    
  //returning value lets you reuse 
}
add(5, 5);
console.log(add (5, 5) + add(5,5))
//takes in fives, adds together, console logs result