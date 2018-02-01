"use strict";

/**Create a while loop that uses console.log() to create the output shown below.**/

// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

/**instructor answer**/
// var number = 2;
// var end = 65536;
//
// while(number <= end) {
//     console.log(number);
//     number = number * 2;
// }
//

/**my answer**/
// var i = 1;
//
// while (i < 65536) {
//     i *= 2
//     console.log(i);
// }

/** An ice cream seller can't go home until she sells all of her cones.
// Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell.
// Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients.
// Use a do-while loop to log to the console the amount of cones sold to each person. This is how you get the random numbers.**/

/**instructor answer**/
// // allCones represents the entire inventory
// var allCones = Math.floor(Math.random() * 50) + 50;
// // order will hold a random number of cone orders each time through the loop
// var order;
// console.log("Welcome to the icecream stand");
// console.log("I start my day with " + allCones + " cones.");
// do {
//     order = Math.floor(Math.random() * 5) + 1;
//     if(order <= allCones) {
//         allCones = allCones - order;
//         console.log("Sold " + order + " cones.");
//     } else {
//         console.log("Cannot sell you " + order + " cones. I only have " + allCones);
//         console.log("Next customer, please!");
//     }
//
// } while(allCones > 0);
//
// console.log("I sold all the ice cream cones and get to go home!");


/**my answer**/

// var allCones = Math.floor(Math.random() * 50) + 50;
//
// do {
//     var cones = Math.floor(Math.random() * 5) + 1;
//     allCones = allCones - cones;
//     console.log("I sold " + cones + " cones.");
//     if (cones > allCones)
//     {console.log("I cannot sell you " + cones + ", I only have " + allCones + " left.")
//     }
//
// }   while (allCones > 0);
//     console.log("I'm all out of cones to sell!");


// var i = 0;
//
// while (i < 10) {
//     console.log('while loop iteration #' + i);
//     i++;
// }

//never gets executed//
// var i = 10;
//
// while (i < 10) {
//     console.log('while loop iteration #' + i);
//     i++;
// }


// Do While //

// var i = 11;
//
// do {
//     console.log('while loop iteration #' + i);
//     i++;
// } while (i < 10);


// For Loop //

// for (/*initialization*/; /*condition*/; /*increment*/) {
    // body
// }

// count up i will be < than and i will be i++ // count down i will be > than and i will be i--

// for (var i = 0; i <= 10; i++) {
//     console.log('for loop iteration #' + i);
// }


// var i = 0;
// // DONT DO THIS
// for (; i < 10;) {
//     console.log('for loop iteration #' + i);
//     i++;
// }

// Although uncommonly used, it should also be noted that additional
// initializations or increments can be provided as part of the first or third
// parameters by using a comma to separate them.
//
//
// for (var i = 0, j = 9; i < 10; i++, j--) {
//     console.log('for loop iteration #' + i + ', j = ' + j);
// }

/**Break and Continue**/

// var numberToStopAt = 5;
//
// for (var i = 1; i < 100; i++) {
//
//     console.log('Loop counter is: ' + i);
//
//     if (i === numberToStopAt) {
//         console.log('We have reached the stopping point: break!');
//         // use the break keyword to exit from the while loop
//         break;
//         // nothing after the break will get processed
//         console.log('You will never see this line.');
//     }
// }


/**Continuing the Next Iteration of a Loop**/

// for (var i = 1; i < 100; i++) {
//
//     if (i % 2 !== 0) {
//         // number isn't even
//         // odd numbers aren't as cool
//         // skip the rest of the loop and continue with the next iteration
//         continue;
//     }
//
//     console.log('Here is a lovely even number: ' + i);
// }

