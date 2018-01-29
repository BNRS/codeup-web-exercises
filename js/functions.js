"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {
    return "hello there, " + name;
}

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

var helloMessage = sayHello('Benjamin');
console.log(helloMessage + "! " + "you are starting to understand!");

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = 'Benjamin';
sayHello(myName);
console.log(sayHello(myName) + "! " + "you are starting to understand!");


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random

function randomNumberUnder(number) {
    return Math.ceil(Math.random() * number);
}


var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(x) {
    return (x === 2);
}

// double == in case there's a string of 2

isTwo(random);
console.log(isTwo(random) + ' because the value was ' + (random));


/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(bill, tipPercentage) {
    if(tipPercentage < 1) {
        return bill * tipPercentage;
    } else {
        return (tipPercentage / 100) * bill;
    }
}

// return bill * tipPercentage;



/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */


var bill = parseFloat(prompt('How much was your bill?'));
var tipPercentage = parseFloat(prompt('please put tip in decimal form on your bill of ' + bill + ' dollars'));
var totalTip = calculateTip(bill, tipPercentage);
var finalTotal = totalTip + bill;
alert("you tipped " + totalTip + " dollars on your bill of " + bill + " for a total bill of " + finalTotal + " dollars");
console.log("you tipped " + totalTip + " dollars on your bill of " + bill + " for a total bill of " + finalTotal + " dollars");

// var bill = parseFloat(prompt("How much was your lunch?"));
// var tipPercentage = parseFloat(prompt("Please input a tip percentage as a decimal: example .2 means 20%"));
// var tipAmount = calculateTip(bill, tipPercentage);
// var finalTotal = tipAmount + bill;
// console.log(finalTotal + " is the total for a " + bill + " bill with a " + tipPercentage + " tip.");




function doShit(item1, item2, item3){
    var totalItems = item1 + item2 + item3;
    return console.log(totalItems);
}

var item1value = 100;


function doItemOne() {
    return item1value;
}
function doItemTwo() {
    return "e";
}
function doItemThree() {
    return "s";
}

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */



function applyDiscount(originalPrice, discountPercent) {
    var discountAmount = originalPrice * discountPercent;
    var newPrice = originalPrice - discountAmount;
    return newPrice;
}

var originalPrice = 100;
var discountPercent = .25;
var newTotal = applyDiscount(originalPrice, discountPercent);
console.log(newTotal + " is the final price after apply the " + discountPercent + " discount to " + originalPrice);