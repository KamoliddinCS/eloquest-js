    // EXERCIE 1: the sum of a range

function range(start, end) {
    result = [];
    for (let counter = start; counter <= end; counter++) {
        result.push(counter);
    };
    return result;
};

function sum(arr) {
    result = 0;
    for (let num of arr) {
        result += num;
    };
    return result;
};

console.log(sum(range(1, 8)))