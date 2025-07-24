/*
Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
*/

/*
// First attempt:
function flattenAndSort(array) {
    let flatArray = []
    for (let i = 0; i < array.length; i++) {
      if (array[i].length > 0) { // ensure inner Arr has value
        flatArray = [...flatArray, ...array[i]] // use the spread operator to join into the new arr
      }  
    }
  return flatArray.sort((a,b) => a - b); // sort numerically
}
*/

// Method using modern JS

"use strict";

function flattenAndSort(array) {
  return array.flat().sort((a,b) => a - b); 
}