// EXERCISE 1: LOOPING A TRIANGLE

// for (let result = "#"; result.length < 8; result += "#") {
//     console.log(result);
// }

// EXERCISE 2: FizzBuzz

// for (let num = 1; num <= 100; num += 1) {
//     if (num % 3 == 0 && num % 5 > 0) {
//         console.log("Fizz", num);
//     } else if (num % 5 == 0 && num % 3 > 0) {
//         console.log("Buzz", num);
//     } else if (num % 5 == 0 && num % 3 == 0) {
//         console.log("FizzBuzz", num);
//     } else {
//         console.log(num);
//     };
// }

// EXERCISE 3: Chessboard

// let size = prompt();
// let result = "";

// for (let counter = 0; counter < size; counter++) {
//     for (let counter2 = 0; counter2 < size; counter2++) {
//         if ((counter + counter2) % 2 > 0) {
//             result += " ";
//         } else {
//             result += "#";
//         };
//     };
    
//     result += "\n";
// };

// console.log(result)


// EXPLORING THE POSSIBILITIES OF DOM API

// changing the title of an html document using js

let heading = document.getElementById("main-heading");