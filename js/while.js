"use strict";

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

// Break and Continue //

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


//   Continuing the Next Iteration of a Loop   //

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

// var i = 1;
//
// while (i < 65536) {
//     i *= 2
//     console.log(i);
// }



// for (var i = 100; i >= 5; i -=5) {
//     console.log(i);
// }


// Use a do-while loop to log to the console the amount of cones sold to each person.
// This is how you get the random numbers.

// Do While //


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



// var allCones = Math.floor(Math.random() * 50) + 50;
//
// do {
//     var cones = Math.floor(Math.random() * 5) + 1;
//
//     if (cones > allCones) {
//         console.log("I cannot sell you " + cones + ", I only have " + allCones + " left.")
//     } else {
//         allCones -= cones;
//         console.log("I sold " + cones + " cones.");
//     }
// }
//
// while (allCones > 0);
// console.log("I'm all done bitches!")

// var conesInStock = Math.floor(Math.random() * 50) + 50;
//
// do {
//     var conesOrdered = Math.floor(Math.random() * 5) + 1;
//
//     if (conesOrdered > conesInStock) {
//         console.log("I cannot sell you " + conesOrdered + ", I only have " + conesInStock + " left.")
//     } else {
//         conesInStock -= conesOrdered;
//         console.log("I sold " + conesOrdered + " cones.");
//     }
// }
//
// while (conesInStock > 0);
// console.log("I'm all done bitches!")

// var allCones = Math.floor(Math.random() * 50) + 50;
// var iteration = 0;
//
// do {
//     iteration++;
//     console.log('---------------------');
//     console.log('iteration number ', iteration);
//     console.log('number of cones available', allCones);
//     console.log('cones that I tried to sell last time', cones);
//     console.log('---------------------');
//     var cones = Math.floor(Math.random() * 5) + 1;
//
//     if (cones > allCones) {
//         console.log("I cannot sell you " + cones + ", I only have " + allCones + " left.")
//     } else {
//         allCones -= cones;
//         console.log("I sold " + cones + " cones.");
//     }
// }
//
// while (allCones > 0);
// console.log("I'm all done bitches!")

