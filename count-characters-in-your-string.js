/*
Count characters in your string

The main idea is to count all the occurring characters(UTF-8) in string. 
If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

What if the string is empty? Then the result should be empty object literal { }
*/

function count (string) {  

  let count = {};
  if (string.length > 0 ) {
    for (let i = 0; i < string.length; i++) {
      if (count.hasOwnProperty(string[i])) {
        count[string[i]] += 1;  
      } else {
        count[string[i]] = 1;
      }
    }
    return count;
  } else {
    return {};
  }
  
}