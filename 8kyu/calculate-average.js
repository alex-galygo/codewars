// Description:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// Solution:

function findAverage(array) {
    // your code here
    if (array.length === 0) {
        return 0;
    } else {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum = sum + array[i];
        }
        return sum / array.length;
    }


}

// Tests:

console.log(findAverage([1, 1, 1]), 1);
console.log(findAverage([1, 2, 3]), 2);
console.log(findAverage([1, 2, 3, 4]), 2.5);

