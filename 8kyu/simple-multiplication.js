// Description: This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// Solution:

function simpleMultiplication(number) {
    if (number % 2 === 0) {
        return number * 8;
    } else {
        return number * 9;
    }
}

// Tests:

console.log(simpleMultiplication(2), 16);
console.log(simpleMultiplication(1), 9);
console.log(simpleMultiplication(8), 64);