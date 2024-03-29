// First Non-Repeating Character O
// Write a function that takes in a string of lowercase English-alphabet letters and returns the index of the string's first non-repeating character.
// The first non-repeating character is the first character in a string that occurs only once.
// If the input string doesn't have any non-repeating characters, your function should return -1 .

// Sample Input
// string = "abcdcaf"
// Sample Output
// 1 // The first non-repeating character is "b" and is four


function firstNonRepeatingCharacter(string) {
  // Write your code here.

  let usedStr = ""
  if(string.length === 0){
    return -1
  }
  if(string.length < 2){
    return 0
  }

  if(string.length === 2 && string[0] !== string[1]){
    return 0;
  }

  i = 0;
  while(i < string.length){

    let pointer = i + 1;
    while(pointer < string.length){
      if(string[i] !== string[pointer]){ //if the string is not equal to the pointer, move the pointer up 1 space
        pointer++

      }else if(string[i] === string[pointer]){
        break;
      }
      if(string[i] !== string[pointer] && pointer === string.length - 1 && !usedStr.includes(string[i])){
        return i
      }


    }
    if(i === string.length - 1 && !usedStr.includes(string[i])){
      return i
    }

    usedStr += string[i]
    i++
  }


  return -1;
}

//create a loop
//create a pointer
//for each iteration, use the pointer(starting at i + 1) to check each letter to the letter at the
//current iteration, go up to string.length - 2 so that the pointer doesn't become undefined
//if the pointer's letters are equal, i++, else, return the letter; else return -1

//another solution?

// hash

// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;


//SECOND ATTEMPT


function firstNonRepeatingCharacter(string) {
  let count = {};
  for(let i = 0; i < string.length; i++){
    let lett = string[i];

    if(count[lett]){
      count[lett] += 1
    }else{
      count[lett] = 1
    }
  }

  for(let j = 0; j < string.length; j++){
    let single = string[j];
    if(count[single] === 1){
      return j;
    }
  }
  return -1;
}

// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;


//create a hash
//loop through the string and count each character in that string in the hash
//create a second loop, and loop through the string. if the letter if the value of the letter is 1, return it


//time: O(n) the overall time complexity of your code is O(n), where n is the length of the input string.
//space: O(n)  the overall space complexity of your code is O(n), where n is the length of the input string.
