// Description:
// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order.

// Essentially, rearrange the digits to create the highest possible number.

// Solution:

function descendingOrder(n) {
    let arr = n.toString().split('');
    let sortedArr = arr.sort((a, b) => b - a);
    return Number(sortedArr.join(''));
}

// Tests:

console.log(descendingOrder(0), 0)
console.log(descendingOrder(1), 1)
console.log(descendingOrder(123456789), 987654321)
console.log(descendingOrder(1021), 2110)