// EXERCISE 1: MINIMUM

// function minVal(a, b) {
//     return a > b ? b : a;
// };

// console.log(minVal(1, -2))

// EXERCISE 2: RECURSION

// function isEven(x) {
//     if (x % 2 == 0) {
//         return "even";
//     } else if (x % 2 == 1) {
//         return "odd";
//     } else if (x < 0) {
//         return isEven(x * -1);
//     } else {
//         return isEven(x - 2);
//     };
// };

// console.log(isEven(0));

// EXERCISE 3: COUNT BEANS

// function countBs(x) {
//     let count = 0;
//     for (let counter = 0; counter < x.length; counter++) {
//         if (x[counter] == "B") {
//             count += 1;
//         };
//     };

//     return count;
// };

// function countChar(x, char) {
//     let count = 0;
//     for (let counter = 0; counter < x.length; counter++) {
//         if (x[counter] == char) {
//             count += 1;
//         };
//     };

//     return count;
// };

// console.log(countChar("kakkerlak", "k"))/

function min(...numbers) {
    let result = numbers[0];
    for (let number of numbers) {
        if (number < result) result = number;
    };
    return result;
};

console.log(min(-5, 2, -3, 4));