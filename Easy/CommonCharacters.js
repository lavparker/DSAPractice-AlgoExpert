// Common Characters
// Write a function that takes in a non-empty list of non-empty strings and returns a list of characters that are common to all strings in the list, ignoring multiplicity.
// Note that the strings are not guaranteed to only contain alphanumeric characters. The list you return can be in any order.

// Sample Input
// strings = ["abc", "bcd", "baccd" ]
// Sample Output
// ["b", "c"] // The characters could be ordered


function commonCharacters(strings){
  let common = [];
  let fstWrd = strings[0];
  let restStr = strings.slice(1);

  for(let i = 0; i < fstWrd.length; i++){
    let letter = fstWrd[i];
    if(sameChar(restStr, letter) && !common.includes(letter)){
      common.push(letter);
    }
  }

  return common;
}

function sameChar(restStr, letter){
  let counter = 0;

  for(let i = 0; i < restlength; i++){
    if(restStr[i].includes(letter)){
      counter += 1
    }
  }
  return counter === restStr.length;
}

//create a variable and set it equal to an empty array (common)
//create a variable called fstWrd and set it equal to the first string strings[0]
//create a variable called restArr  and set it equal to the rest ofthe string strings.slice(1)
//need 2 separate loops 1 for the first string (string[0]) and one for the array of strings; //you could also use a helper method
//loop through the first string.
//use a helper method and invoke it with restStr, letter.
//create a variable called counter set it = to 0 to keep track to make sure it's equal to the lenght meaning each words includes the char
//take the letter that you've iterated to and check that each element in the array .includes() in the other string
//if true for every string common.push the letter
//return common

// Do not edit the line below.
exports.commonCharacters = commonCharacters;


function commonCharacters(strings) {
  // Write your code here.
  let common = [];
  let firstStr = strings[0];
  let restStr = strings.slice(1);

  if(strings.length <= 1){
    return strings
  }

  for(let i = 0; i < firstStr.length; i++){
    let char = firstStr[i];
    if(otherStrs(restStr, char)){
      if(!common.includes(char)){
      common.push(char)
      }
    }

  }
  return common;
}

function otherStrs(restStr, char){
  for(let j = 0; j < restStr.length; j++){
    if(!restStr[j].includes(char)){
      return false;
    }
  }
  return true;
}

//create a variable called common and set it equal to an empty array
//create a variable called firstStr and set it equal to strings[0]
//create a variable called restStr and set it equal to strings.slice(1);
//loop through firstStr
//create a variable called char and set it equal to firstStr[i];
//call helper function
//if helper function is true, push letter to common array
//create a helper function and loop through restStr //parameter is restStr and letter
//check to see if letter.include() in the other strings. if true for all,
//return common array

//edge cases :
// what do you do if the string of arrays is only one element long
// what do you do if the "strings all have the same letters "
//Time Complexity: O(m * n * k)
//Space Complexity: O(m)

// Do not edit the line below.
exports.commonCharacters = commonCharacters;
