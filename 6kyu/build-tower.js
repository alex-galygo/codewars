// Description:
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// Solution

function towerBuilder(nFloors) {
    let tower = [];
    for (let i = 0; i < nFloors; i++) {
        tower.push(" ".repeat(nFloors - i - 1) + "*".repeat(i * 2 + 1) + " ".repeat(nFloors - i - 1));
    }
    return tower;
}

// Tests

console.log(towerBuilder(1)); // ["*"]
console.log(towerBuilder(2)); // [" * ","***"]
console.log(towerBuilder(3)); // ["  *  "," *** ","*****"]
console.log(towerBuilder(4)); // ["   *   ","  ***  "," ***** ","*******"]