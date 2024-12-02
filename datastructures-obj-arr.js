// EXERCIE 1: the sum of a range

// function range(start, end, step=1) {
//     result = [];
//     for (let counter = start; start < end ? counter <= end : counter >= end; counter += Math.round(step)) {
//         result.push(counter);
//     };
//     return result;
// };

// function sum(arr) {
//     result = 0;
//     for (let num of arr) {
//         result += num;
//     };
//     return result;
// };

// console.log(range(10, 1, -1))

// EXERCISE 2: reversing an array

function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    };
    return reversedArray;
};

console.log(reverseArray(["A", "b", "c"]))