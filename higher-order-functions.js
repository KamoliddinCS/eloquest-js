// Arrays provide a number of useful higher-order methods. 
// You can use forEach to loop over the elements in an array. 
// The filter method returns a new array containing only the elements that pass the predicate function. 
// You can transform an array by putting each element through a function using map. 
// You can use reduce to combine all the elements in an array into a single value. 
// The some method tests whether any element matches a given predicate function, while find finds the first element that matches a predicate.


// EXERCISES 1: FLATTENING

// let arrays = [[1, 2, 3], [4, 5], [6]];

// console.log(arrays.reduce((arr, arr2) => arr.concat(arr2)))

// EXERCISE 2: LOOP

// function loop(value, test, update, execute) {
//     if (!test(value)) return;
//     execute(value);
//     return loop(update(value), test, update, execute)
// };

// loop(3, n => n > 0, n => n - 1, console.log);

// EXERCISE 3: EVERYTHING

function every(array, test) {
    for (let element of array) {
        if (!test(element)) return false;
    };
    return true;
};

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 10], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true