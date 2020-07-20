03 Javascript Homework README

For this week's homework, I created a random password generator that asked the user a series of prompts and returned a random password with a series of uppercase characters, lowercase characters, special characters, and numbers, when a button was clicked. 

I first created an array for lowercase, uppercase, special chacters, and numbers and used the .split() method to split each individual item in the array.

Next, I created a function generatePassword() and inside it I listed the prompts that ask the user what characters they want in their password and the password length. I then used if statements to determine what characters the password would contain based on the user's input. The .concat() method merged the arrays. Also inside the generatePassword function, I created a for loop and used math.floor and math.random to determine a random password given the specified length.

Lastly, I wrote the password to the password input and added an eventListener that lustened for a click on the generate password button. 
