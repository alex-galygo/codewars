// Description: This kata is about converting numbers to their binary or hexadecimal representation:
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//
// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// Solution:

function digitize(n) {
    let numArray = n.toString().split("");
    let reversedArray = [];
    for (let i = 0; i < numArray.length; i++) {
        reversedArray.unshift(parseInt(numArray[i]));
    }
    return reversedArray;
}

// Tests:
console.log(digitize(35231), [1, 3, 2, 5, 3]);
console.log(digitize(23582357), [7, 5, 3, 2, 8, 5, 3, 2]);
console.log(digitize(0), [0]);