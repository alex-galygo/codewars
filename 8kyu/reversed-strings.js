//Description:
// Complete the solution so that it reverses the string passed into it.
//
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// Solution:

function solution(str) {
    let arr = str.split('');
    let revArr = arr.reverse();
    return revArr.join('');
}

// Tests:

console.log(solution('world'), 'dlrow');
console.log(solution('hello'), 'olleh');
console.log(solution(''), '');