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

// function reverseArray(arr) {
//     let reversedArray = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversedArray.push(arr[i]);
//     };
//     return reversedArray;
// };

// console.log(reverseArray(["A", "b", "c", "t", "JJJ"]))

// function reverseArrayInPlace(arr) {
//     let tempVal;
//     for (let i = 0; i < Math.round(arr.length/2); i++) {
//         tempVal = arr[i];
//         arr[i] = arr[arr.length - 1 - i];
//         arr[arr.length - 1 - i] = tempVal;
//     };
//     return arr;
// };

// let arrayValue = ["A", "b", "c", "t", "JJJ"];

// console.log(reverseArrayInPlace(arrayValue))

// EXERCISE 3: a list

function arrayToList(arr) {
    if (arr.length == 0) {
        return null;
    } else {
        return {value: arr.shift(), rest: arrayToList(arr)};
    };
};

// console.log(arrayToList([1, 2, 3]))

function prepend(element, list) {
    return {value: element, rest: list};
};

// console.log(prepend(10, prepend(20, null)));

function nth(list, position) {
    let currentList = list;
    for (let counter = 0; counter < position; counter++) {
        currentList = currentList["rest"];
    };
    return currentList["value"];
};

// console.log(nth(arrayToList([10, 20, 30]), 2));

