"use strict";

/**to count up "i" will be < than and "i" will be i++ // count down "i" will be > than and "i" will be i--

/**Create a function named showMultiplicationTable that accepts a number and
// console.logs the multiplication table for that number
// (just multiply by the numbers 1 through 10)
 **/

// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

/**instructor answer**/
// function showMultiplicationTable(number) {
//     for(var i = 1; i <= 10; i++) {
//         console.log(number + " x " + i + " = " + (number * i));
//     }
// }

/**my answer**/
// var randomNumberUpToTen = Math.floor(Math.random() * 10) + 1;
//
// function showMultiplicationTable(randomNumberUpToTen) {
//
//     for(var i = 1; i <= 10; i++) {
//         console.log(randomNumberUpToTen + " x " + i + " = " + (randomNumberUpToTen * i));
//     }
// }
//
// showMultiplicationTable(randomNumberUpToTen);


/**ask the user for a number and create a multiplication table from the input**/
// var num = prompt("Enter Number", "0") //prompt user to enter the number
// var num = parseInt(num); //parse the num to number
// var i = 0;
//
// for(i = 1; i <= 10; i++) {
//
//     console.log("" + num + " x " + i + " = " + num*i + "");
// }



/** Generate 10 random numbers between 20 and 200 and output to
// the console whether each number is odd or even. For example:
 **/
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
//  ...

/**my answer**/
// for(var i = 1; i <= 10; i++) {
//     var randomNumber = Math.floor(Math.random() * 200) + 20;
//     if (randomNumber % 2 === 0)
//         console.log(randomNumber + " is even!");
//     else if (randomNumber % 2 !== 0) {
//         console.log(randomNumber + " is odd!");
//     }
// }


/**instructor answer**/
// var number;
// var min = 20;
// var max = 200;
// for(var i = 1; i <= 10; i++) {
//     number = Math.floor(Math.random() * (max - min)) + min;
//     if(number % 2 === 0) {
//         console.log(number + " is even.");
//     } else {
//         console.log(number + " is odd.");
//     }
// }


/**Create a for loop that uses console.log to create the output shown below.**/

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999


/**my answer**/
// function addDigit() {
//     for (var i = 1; i <= 9; i++) {
//         i = i.toString();
//         console.log(i.repeat(i));
//     }
// }
//
// function addDigit2() {
//     for(let i=0; i<10; i++) {
//         let result = '';
//         for(let j=0; j<i; j++) {
//             result += i;
//         }
//         console.log(result);
//     }
// }

/**instructor answer**/
// for(var i = 1; i <= 9; i++) {
//     i = i.toString();
//     console.log(i.repeat(i));
// }
//
// for(var i = 1; i <= 9; i++) {
//     var output = "";
//     for(var j = 1; j <= i; j++) {
//         output += i;
//     }
//     console.log(output);
// }

/**Create a for loop that uses console.log to create the output shown below.**/

// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

// for (var i = 100; i >= 5; i -=5) {
//     console.log(i);
// }



