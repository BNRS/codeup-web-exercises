"use strict";


/**old es5 way*/

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var remove9 = [];
// for (var i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] !== 9) {
//         remove9.push(numbers[i]);
//     }
// }
// console.log(remove9); // [2, 4, 6, 8, 10]
// $("body").html(remove9);
//
//
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var evens = numbers.filter(function(n) {
//     return n % 2 === 0;
// });
// console.log(evens); // [2, 4, 6, 8, 10]
// $("body").html(evens);
//
//
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var incremented = numbers.map(function(n) {
//     return n + 1;
// });
// console.log(incremented); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// $("body").html(incremented);

/** using es6 **/


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// const evens = numbers.filter(n => n % 2 === 0);
// console.log(evens); // [2, 4, 6, 8, 10]
// $("body").html(evens);
//
// const incremented = numbers.map(n => n + 1);
// console.log(incremented); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// $("body").html(incremented);
//
// const numbers = [1, 2, 3, 4, 5];
//
// const sum = numbers.reduce((accumulation, currentNumber) => {
//     return accumulation + currentNumber;
// }, 0);
//
// console.log(sum);
// $("body").html(sum);

// const salesPeople = [
//     {name: 'Jim Halpert', sales: 100},
//     {name: 'Dwight Schrute', sales: 50},
//     {name: 'Andy Bernard', sales: 150},
// ];
//
// const avgSales = salesPeople.reduce((total, person) => {
//     total += person.sales/salesPeople.length;
//     return total;
// }, 0);
//
// $("body").html(avgSales);

// function countWords(sentence) {
//     const words = sentence.split(' '); // transform a sentence into an array of words
//     const wordCountObject = words.reduce((wordCounts, word) => {
//         if (typeof wordCounts[word] === 'undefined') {
//             // if the word is not yet present in our object, set it's value to 1
//             wordCounts[word] = 1;
//         } else {
//             // otherwise increment the existing count
//             wordCounts[word] += 1;
//         }
//         return wordCounts;
//     }, {}); // start with an empty object
//     return wordCountObject;
// }
//
// countWords('Mary had a little lamb little lamb little lamb');
// // {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

/** more comfortable way**/
// const hasThreeLanguages = users.filter(user => {
//    return user.languages.length >2;
// });

/**es6 way**/
// const hasThreeLanguages = users.filter(({languages}) => languages.length >2);
// console.log(hasThreeLanguages);

// Use .map to create an array of strings where each element is a user's email address

// const userEmail = users.map(user => {
//    return user.email;
// });
// console.log(userEmail);


/** es6 way **/
// let userEmail = users.map(({email}) => email);
// console.log(userEmail);


// Use .reduce to transform the array into an object where the object's keys are ids and the values are objects that represent each user

// const transform = users.reduce((acc, user) => {
//     acc[user.id] = user;
//     return acc;
// }, {});
// console.log(transform);

/** es6 way **/
// const userObject = users.reduce((a,b)=> { a[b.id] = b; return a; }, {});
// console.log(userObject);

