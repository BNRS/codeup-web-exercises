"use strict";


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */


/** instructor answer **/

// var enterNumber = confirm("Would you like to enter a number?");
// if (enterNumber) {
//     NumberLogic();
// }
//
//
//
//
function NumberLogic() {
    var num = prompt("Enter Number");
    num = parseInt(num);

    if (isNaN(num)) {
       alert('you did not enter a number');
    } else {

        //Odd or even number
        if (num % 2 === 0) {
            alert("Number is even");
        } else {
            alert("number is odd");
        }

        //Number Is Positive/Negative
        if (num < 0) {
            alert("Number is negative");
        } else if (num > 0) {
            alert("Number is positive")
        } else {
            alert("Number IS 0");
        }
        //Add 100 to the number
        alert("Number + 100 is: " + (num + 100));
    }
}

/** my answer **/

// var userWillEnterNumber = confirm('Would you please enter your favorite number?');
//
// if (userWillEnterNumber) {
//     var favNumber = parseInt(prompt('please enter your favorite number.'));
//     if (isNaN(favNumber)) {
//         alert('you did not enter a number')
//     } else {
//         if (favNumber % 2 !== 0) {
//             alert('your number was odd');
//         } else {
//             alert('your number was even');
//         }
//
//         alert('your number plus 100 is ' + (favNumber + 100));
//
//         if (favNumber > 0) {
//             alert('your number was positive!');
//         } else {
//             alert('your number was negative!');
//         }
//     }
// }

/* ########################################################################## */

/** if/else if/else example **/


// function number(x) {
//     if (x === 1) {
//         return true;
//     } else if (x === 2) {
//         return 'you entered 2';
//     } else if (x === 3) {
//         return alert('you entered a 3');
//     } else {
//         return false;
//     }
// }




/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that is related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


/** my answer **/

// function analyzeColor(input) {
//     if (input === 'green') {
//         return "It's green, which is the color of grass";
//     } else if(input === 'red') {
//         return ("It's red, which is the color of fire");
//     } else if(input === 'orange') {
//         return ("It's orange, which is the color of an orange");
//     } else if(input === 'yellow') {
//         return ("it's yellow, which is the color of the sun");
//     } else if(input === 'blue') {
//         return ("It's blue, which is the sky");
//     } else if(input === 'indigo') {
//         return ("indigo is close to purple");
//     } else if(input === 'violet') {
//         return ('violet is pretty');
//     }
// }

/** instructor answer **/

// function analyzeColor(input) {
//     var message;
//
//     if(input === "blue") {
//         message = "Blue is the color of the sky!";
//     } else if(input === "red") {
//         message = "Roses are red";
//     } else if(input === "orange") {
//         message = "Orange you glad I didn't say banana";
//     } else if(input === "yellow") {
//         message = "Yellow is the color of your cup when you're on the exercise";
//     } else if(input === "green") {
//         message = "grass is green";
//     } else if (input === "indigo") {
//         message = "indigo is the color of blue-jeans";
//     } else if (input === "violet") {
//         message = "violets are violet";
//     } else {
//         message = "I don't know anything about the color " + input;
//     }
//
//     return message;
// }

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

// (color === favorite) ? console.log(color + " is best!") : console.log(color + " is not my favorite color");


/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// switch (randomColor) {
//     case 'red':
//         console.log('coke cans are red');
//         break;
//     case 'orange':
//         console.log('the sun is orange');
//         break;
//     case 'yellow':
//         console.log('gold is yellow');
//         break;
//     case 'green':
//         console.log('grass is green');
//         break;
//     case 'blue':
//         console.log('jeans are blue');
//         break;
//     case 'indigo':
//         console.log('indigo is indigo');
//         break;
//     case 'violet':
//         console.log('violet is violet');
//         break;
//     default:
//         console.log('I do not know anything by that color');
// }

/** Instructor answer **/

// function analyzeColor(input) {
//     var message;
//
//     switch(input) {
//         case "red":
//             message = "Roses are red";
//             break;
//         case "orange":
//             message = "Orange you glad I didn't say banana";
//             break;
//         case "yellow":
//             message = "Gold is yellow, sorta";
//             break;
//         case "green":
//             message = "Grass is green";
//             break;
//         case "blue":
//             message = "Blue is the color of the sky.";
//             break;
//         case "violet":
//             message = "Violets are violet";
//             break;
//         case "indigo":
//             message = "Jeans are indigo";
//             break;
//         default:
//             message = "I don't know anything about the color " + input;
//             break;
//     }
//
//     return message;
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var favColor = prompt('please enter your favorite color!');
// alert(analyzeColor(favColor));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


// function WalmartDiscount(num) {
//     var discount;
//     var totalDue = parseFloat(prompt("What is your total bill?")).toFixed(2);
//
//
//
//     switch (num){
//         case 0:
//             discount = 0;
//             alert("You get a " + discount + "% discount!");
//             CalculateTotal(discount, totalDue);
//             break;
//         case 1:
//             discount = 10;
//             alert("You get a " + discount + "% discount!");
//             CalculateTotal(discount, totalDue);
//             break;
//         case 2:
//             discount = 25;
//             alert("You get a " + discount + "% discount!");
//             CalculateTotal(discount, totalDue);
//             break;
//         case 3:
//             discount = 35;
//             alert("You get a " + discount + "% discount!");
//             CalculateTotal(discount, totalDue);
//             break;
//         case 4:
//             discount = 50;
//             alert("You get a " + discount + "% discount!");
//             CalculateTotal(discount, totalDue);
//             break;
//         case 5:
//             discount = 100;
//             alert("You get a " + discount + "% discount!");
//             CalculateTotal(discount, totalDue);
//             break;
//         default:
//             alert("You don't get a discount because you can't count to 5....");
//             break;
//     }
// }
//
// function CalculateTotal (discountPercent, totalBill) {
//     var total = totalBill - ((discountPercent / 100)* totalBill);
//     alert("You're total bill is $" + total.toFixed(2));
// }


// var randomDiscount = discountAmount[Math.floor(Math.random() * discountAmount.length)];


// function calculateTotal(luckyNumber, total) {
//
//     if(luckyNumber == 0) {
//         return total;
//     } else if(luckyNumber == 1) {
//         return total - (total * .1);
//     } else if(luckyNumber == 2) {
//         return total - (total * .25);
//     } else if(luckyNumber == 3) {
//         return total - (total * .35);
//     } else if(luckyNumber == 4) {
//         return total - (total * .50);
//     } else if(luckyNumber == 5) {
//         return total - (total * 1);
//     } else {
//         return total;
//     }
// }



// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 6.
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
//

// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
//
// var total = parseFloat(prompt("How much was your bill?"));
// alert("Your lucky number is " + luckyNumber);
// alert("your price before the discount is " + total);
// alert("Your new total after the discount is " + calculateTotal(luckyNumber, total));
//
//



/**
================================= CONDITIONALS BONUSES

Bonus 1.

Write a function (or multiple functions) that will return
a boolean depending on if the string value passed to it
as an argument is the name of a day of the week that starts with a T.
    Otherwise, it should return false.

    Example: dayOfTheWeekStartsWithT("Monday")     => returns false
Example: dayOfTheWeekStartsWithT("Tuesday")     => returns true
Example: dayOfTheWeekStartsWithT("Tommy")     => returns false
*/


// function dayOfTheWeekStartsWith(input) {
//     input = input.toLowerCase();
//
//     if(input === "tuesday" || input === "thursday") {
//         return true
//     } else {
//         return false
//     }
// }


/**
Bonus 2.

Write a function, isValidPassword, that takes in a string argument and returns true or false
depending on whether or not all the following conditions are true:

1) Must be 6 characters long (only for the sake of this exercise, NOT a best practice)
2) Contains at least one letter and one number
3) Contains at least one upper and one lower case letter
4) Only comprised of letters and numbers
5) EXTRA BONUS: is not the same forwards and backwards
*/

function isValidPassword(input) {
    var lengthIsGood = input.length == 6;
    var hasAtLeastOneLetter = hasLetter(input);
    var hasAtLeastOneNumber = hasNumber(input);
    var hasLowerCaseLetter;
    var hasUpperCaseLetter;
    var alphaNumeric;

    return lengthIsGood && hasAtLeastOneLetter && hasAtLeastOneNumber && hasLowerCaseLetter && hasUpperCaseLetter && alphaNumeric;
}

function hasLetter(input) {
    input = input.toLowerCase();

    return input.includes("a") || input.includes("b") || input.includes("c") ||
        input.includes("d") || input.includes("e") || input.includes("f") ||
        input.includes("g") || input.includes("h");
}

function hasNumber(input) {
    input = input.toLowerCase();

    return input.includes(0) || input.includes(1) || input.includes(2) ||
        input.includes(3) || input.includes(4) || input.includes(5) ||
        input.includes(6) || input.includes(7) || input.includes(8) ||
        input.includes(9) || input.includes(0);
}

