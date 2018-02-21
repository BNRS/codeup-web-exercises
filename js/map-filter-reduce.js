"use strict";


/**old es5 way*/

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var evens = [];
// for (var i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//         evens.push(numbers[i]);
//     }
// }
// console.log(evens); // [2, 4, 6, 8, 10]
// $("body").html(evens);


// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var evens = numbers.filter(function(n) {
//     return n % 2 === 0;
// });
// console.log(evens); // [2, 4, 6, 8, 10]
// $("body").html(evens);


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

// const incremented = numbers.map(n => n + 1);
// console.log(incremented); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// $("body").html(incremented);

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

// const hasThreeLanguages = users.filter(el => {
//     if (el.languages.length >= 3) {
//         return el;
//     }
// });
//
// console.log(hasThreeLanguages);

// Use .map to create an array of strings where each element is a user's email address

// const userEmail = users.map(el => {
//     return el.email;
// });
// console.log(userEmail);


//even shorter way
// let userEmail = users.map(({email}) => email);
// console.log(userEmail);




// Use .reduce to transform the array into an object where the object's keys are ids and the values are objects that represent each user


function countWords(sentence) {
    const words = sentence.split(' '); // transform a sentence into an array of words
    const wordCountObject = words.reduce((wordCounts, word) => {
        if (typeof wordCounts[word] === 'undefined') {
            // if the word is not yet present in our object, set it's value to 1
            wordCounts[word] = 1;
        } else {
            // otherwise increment the existing count
            wordCounts[word] += 1;
        }
        return wordCounts;
    }, {}); // start with an empty object
    return wordCountObject;
}

countWords('Mary had a little lamb little lamb little lamb');
// {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}