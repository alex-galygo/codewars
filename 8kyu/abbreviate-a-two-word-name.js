// Description:
//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot separating them.
//
// It should look like this:
//
// Sam Harris => S.H
//
// patrick feeney => P.F

// Solution:
function abbrevName(name){
  let nameArray = name.split(" ");
  let firstInitial = nameArray[0].charAt(0).toUpperCase();
  let secondInitial = nameArray[1].charAt(0).toUpperCase();
  return `${firstInitial}.${secondInitial}`;
}

// Tests:
console.log(abbrevName("Sam Harris"));