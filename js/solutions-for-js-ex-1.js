"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

// 1. Define a function named isBoolean that takes in a value and returns a boolean if the argument provided is a boolean value or not.
//
// isBoolean(true)             // true
// isBoolean(false)            // true
// isBoolean(0)                // false
// isBoolean(null)             // false
// isBoolean("")               // false
// isBoolean("Bob")            // false
// isBoolean([1, 2])           // false

function isBoolean(input) {
    return typeof input == "boolean";
}



// 2. Define a function named isNumeric that takes in a value and returns true if the input is numeric or not. Numeric strings are numeric and should return true.
// isNumeric(23)               // true
// isNumeric("42")             // true
// isNumeric(3.141)            // true
// isNumeric("")               // false
// isNumeric(true)             // false
// isNumeric("Bob")            // false
// isNumeric([1,2,3])          // false

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}



// 3. Define a function named isString that takes in a value as an input and returns a boolean if the input provided is a string or not. Numeric strings will count as strings and should return true.
// isString("Hello")           // true
// isString("Codeup")          // true
// isString("123")             // true
// isString(4)                 // false
// isString(true)              // false
// isString([1, 2, 3])         // false
// isString()                  // false
// isString(null)              // false

function isString(input) {
    return typeof input === "string";
}


// 4. Define a function named isArray that takes in an input and returns a boolean whether or not that input is an array or not.
//
// isArray([])                 // true
// isArray([1, 2, 3])          // true
// isArray(['a', 'b'])         // true
// isArray(false)              // false
// isArray(12)                 // false
// isArray("Bob")              // false
// isArray({'some': 'object'}) // false
// isArray(true)               // false
// isArray()                   // false

function isArray(input) {
    return Array.isArray(input);
}

// console.log(isArray([])                ); // true
// console.log(isArray([1, 2, 3])         ); // true
// console.log(isArray(['a', 'b'])        ); // true
// console.log(isArray(false)             ); // false
// console.log(isArray(12)                ); // false
// console.log(isArray("Bob")             ); // false
// console.log(isArray({'some': 'object'})); // false
// console.log(isArray(true)              ); // false
// console.log(isArray()                  ); // false




// 5. Define a function named isNegative that accepts a number and returns true or false based on whether the input is less than zero.

// isNegative(-1)              // true
// isNegative(-5)              // true
// isNegative("-3")            // true
// isNegative(0)               // false
// isNegative(6)               // false
// isNegative("10")            // false
// isNegative(true)            // false
// isNegative(false)           // false
// isNegative("Bob")           // false
// isNegative([-1, 2, 3])      // false
// isNegative(null)            // false

function isNegative(input) {
    return input < 0;
}


// 6. Define a function named isPositive that accepts an input and returns true or false based on whether the input is above zero. Any non-numeric input should return false.
//
// isPositive(1)               // true
// isPositive("6")             // true
// isPositive(3.141)           // true
// isPositive(-1)              // false
// isPositive(-5)              // false
// isPositive("-4")            // false
// isPositive(0)               // false
// isPositive("Bob")           // false
// isPositive(true)            // false

function isPositive(input) {
    return parseFloat(input) > 0;
}


// 7. Define a function named increment that takes in an input and adds 1 to it if the input is numeric. If the input is not numeric, then return false.
//
// increment(0)                // 1
// increment("10")             // 11
// increment(-5)               // -4
// increment("Bob")            // false
// increment([1, 2, 3])        // false
// increment(true)             // false
// increment(null)             // false

function increment(input) {
    // if (isNumeric(input)) {
    //     return ++input;
    // } else {
    //     return false
    // }
    return (isNumeric(input)) ? ++input : false;
}



// 8. Define a function named decrement. If the provided input is numeric, the function should subtract 1 and return the result. If the input is not numeric, decrement should return false.
//
// decrement(19)               // 18
// decrement(0)                // -1
// decrement("4")              // 3
// decrement("Bob")            // false
// decrement([1, 2, 3])        // false
// decrement(false)            // false
// decrement(null)             // false

function decrement(input) {
    return (isNumeric(input)) ? --input : false;
}



// 9. Define a function named square. If the provided input is numeric, square should return the number multiplied by itself. If the input is not numeric, square, should return false.
//
// square(2)                   // 4
// square(3)                   // 9
// square(-4)                  // 16
// square("5")                 // 25
// square(0.5)                 // .25
// square("Bob")               // false
// square(true)                // false
// square(false)               // false
// square(null)                // false
// square([1, 2, 3])           // false
// square()                    // false

function square(input) {
    return (isNumeric(input)) ? input * input : false;
}



// 10. Define a function named upperCase that takes in a single input. If the input is not a string, return false. If the input is a non-numeric string, then return it with all the letters capitalized.
//
// upperCase("Codeup")         // "CODEUP"
// upperCase("javascript")     // "JAVASCRIPT"
// uppercase("45")             // false
// upperCase(23)               // false
// upperCase(null)             // false
// upperCase([1, 2, 3])        // false
// upperCase(true)             // false
// upperCase()                 // false

function upperCase(input) {
    // if (isString(input) && !isNumeric(input)) {
    //     return input.toUpperCase();
    // }
    // return false;
    //
    return (isString(input) && !isNumeric(input)) ? input.toUpperCase() : false;
}

// console.log(upperCase());



// 11. Write a function named isPalindrome that takes in a single input. If the input is a numeric string, then return false. If the input is a string, then return true if the string is the same forwards as it is backwards. Return false if the string is different forwards from backwards. Ignore capitalization.
//
// isPalindrome("Bob")         // true
// isPalindrome("radar")       // true
// isPalindrome("ufotofu")     // true
// isPalindrome("Monday")      // false
// isPalindrome(232)           // false
// isPalindrome(null)          // false

// function isPalindrome(input) {
//
//     if (input === "" || input === " " ) {
//         return true;
//     }
//
//     if (typeof input === "string" && input.match(/^[a-zA-Z_]*$/)) {
//         var word = input.toLowerCase();
//         var wordLength = Math.floor(input.length / 2);
//         for (var i = 0; i < wordLength; i++) {
//              if (word[i] === word[input.length - i - 1]) {
//                  return true;
//              }
//         }
//     }
//
//     return false;
//
// }

function isPalindrome(input) {
    if (!isNumeric(input) && typeof input === "string") {
        var lowerVal = input.toLowerCase();
        // reverse the string
        var reverseVal = lowerVal.split('').reverse().join('');
        return lowerVal === reverseVal;
    } else {
        return false;
    }
}


// console.log(isPalindrome("Bob")     );    // true
// console.log(isPalindrome("radar")   );    // true
// console.log(isPalindrome("ufotofu") );    // true
// console.log(isPalindrome("Monday")  );    // false
// console.log(isPalindrome(232)       );    // false
// console.log(isPalindrome(null)      );    // false
//
//




// 12. Write a function named getHighestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the highest number. If any of the 3 inputs is missing or non-numeric, then return false.
//
// getHighestNumber(1, 3, 2)           // 3
// getHighestNumber(0, 1, "2")         // 2
// getHighestNumber(9, 3, -20)         // 9
// getHighestNumber(2, 2, 2)           // 2
// getHighestNumber(2, 5, 5)           // 5
// getHighestNumber(1, 2, 'x')         // false
// getHighestNumber("a", "b")          // false
// getHighestNumber()                  // false

function getHighestNumber(arg1, arg2, arg3) {

    if (isNumeric(arg1) && isNumeric(arg2) && isNumeric(arg3)) {

        if (arg1 > arg2 && arg1 > arg3) {
            return arg1;
        } else if (arg2 > arg1 && arg2 > arg3) {
            return arg2
        } else {
            return arg3;
        }

    } else {
        return false;
    }
}


// 13 Write a function named containsVowel that takes in a single input as its argument. If the argument is not a string, then return false. If the argument is a string, then return true if the string contains any of the vowels 'a', 'e', 'i', 'o', or 'u' either uppercased or lowercased. Ignore 'y'. If the string does not contain any of these vowels, then return false.

// containsVowel("Index")      // true
// containsVowel("Codeup")     // true
// containsVowel("Jane")       // true
// containsVowel("bb8")        // false
// containsVowel("")           // false
// containsVowel(34)           // false
// containsVowel([1, 2, 3])    // false

function containsVowel(input) {
    if (typeof input !== "string" || isNumeric(input)) {
        return false
    } else {
        return input.includes("a") || input.includes("e") || input.includes("i") || input.includes("o") || input.includes("u");
    }
}

// console.log(containsVowel("Index")   );   // true
// console.log(containsVowel("Codeup")  );   // true
// console.log(containsVowel("Jane")    );   // true
// console.log(containsVowel("bb8")     );   // false
// console.log(containsVowel("")        );   // false
// console.log(containsVowel(34)        );   // false
// console.log(containsVowel([1, 2, 3]) );   // false
//
//


// 14. Write a function named add that takes in two inputs. If both inputs provided are numeric, add will return the sum of both inputs. If one or both inputs is not numeric, add should return false.
//
// add(1, 2)                   // 3
// add(0, 0)                   // 0
// add(-5, 10)                 // 5
// add("2", 4)                 // 6
// add(5, true)                // false
// add(true, false)            // false
// add("Monday", "Tuesday")    // false
// add(null)                   // false

function add(arg1, arg2) {
    if (isNumeric(arg1) && isNumeric(arg2)) {
        return parseFloat(arg1) + parseFloat(arg2);
    } else {
        return false;
    }
}


// console.log(add(1, 2)               );    // 3
// console.log(add(0, 0)               );    // 0
// console.log(add(-5, 10)             );    // 5
// console.log(add("2", 4)             );    // 6
// console.log(add(5, true)            );    // false
// console.log(add(true, false)        );    // false
// console.log(add("Monday", "Tuesday"));    // false
// console.log(add(null)               );    // false
//


// 15. Write a function named multiply that takes in two inputs. If both inputs provided are numeric, multiply returns the product of the first input multiplied by the second. If either or both inputs are not numeric, multiply should return false.
//
// multiply(4, 2)              // 8
// multiply(0, 44)             // 0
// multiply(-5, 10)            // -50
// multiply(5, true)           // false
// multiply(true, false)       // false
// multiply("Monday")          // false

function multiply(arg1, arg2) {
    if (isNumeric(arg1) && isNumeric(arg2)) {
        return parseFloat(arg1) * parseFloat(arg2);
    } else {
        return false;
    }
}

// console.log(multiply(4, 2)         );     // 8
// console.log(multiply(0, 44)        );     // 0
// console.log(multiply(-5, 10)         );   // -50
// console.log(multiply(5, true)          ); // false
// console.log(multiply(true, false)      ); // false
// console.log(multiply("Monday")         ); // false


// 16. Write a function named sumOfSquares that takes in two inputs. If both inputs are numeric, sumOfSquares should square each input and return the sum of them added together. For example, if we pass a and b then we should square a and add it to the square of b. If either or both inputs are not numeric, sumOfSquares should return false.
//
// sumOfSquares(2, 3)          // 13
// sumOfSquares(1, 0)          // 1
// sumOfSquares("4", 5)        // 41
// sumOfSquares(2, false)      // false
// sumOfSquares(null)          // false
// sumOfSquares()              // false


function sumOfSquares(arg1, arg2) {
    if (isNumeric(arg1) && isNumeric(arg2)) {
        return square(arg1) + square(arg2);
    } else {
        return false;
    }
}


//
// console.log(sumOfSquares(2, 3)     );     // 13
// console.log(sumOfSquares(1, 0)    );      // 1
// console.log(sumOfSquares("4", 5)   );     // 41
// console.log(sumOfSquares(2, false)    );  // false
// console.log(sumOfSquares(null)        );  // false
// console.log(sumOfSquares()            );  // false

var data = {
    name: "John",
    age: 28,
    maritalStatus: true
}

for (var elem in data);
console.log(elem);