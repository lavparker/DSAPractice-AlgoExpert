


// Longest Palindromic Substring
// Write a function that, given a string, returns its longest palindromic substring.
// A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.
// You can assume that there will only be one longest palindromic substring.


// Sample Input
// string = "abaxyzzyxf"
// Sample Output
// "xyzzyx"


// REMEMBER HOW TO FIND SUBSTRINGS IN A STRING USING A NESTED LOOP AND SPLITTING AT EACH ITERATION.
//MADE MINOR MISTAKES; IMPORTANT TO MAKE SURE YOU KNOW HOW TO FIND THE SUBSTRING FOR EVERY STRING


function longestPalindromicSubstring(string) {
  // Write your code here.
  let counter = 0;
  let longest;
  let substrings = [];

  for(let i = 0; i < string.length; i++){
    for(let j = i + 1; j <= string.length; j++){
      substrings.push(string.slice(i, j))
    }
  }

  for(let k = 0; k < substrings.length; k++){
    let array = substrings[k]

    if (palindromes(array)){
      if (array.length > counter){
        counter = array.length;
        longest = array;
      }
    }

  }
  return longest || "";
}

function palindromes(array){
  let lowerString  = array.toLowerCase();

  let newString = ""


  for(let i = lowerString.length - 1; i >= 0; i--){
    newString += lowerString[i]
  }

    return newString === lowerString
}

//find the longest palindrome substring in the string
//single character strings are palindromes
//create a variable called counter;
//create a variable called longest and set it equal to an empty string
//create a variable called substrings and set it equal to an empty array
//find a list of substrings
//create a nested loop (i and j) and find every substring in the string;
//push each iteration into the substring array and split at i,j

//outside of the loop, create another loop and loop through the substring array.
//create a helper method called palindrome and it takes in an array
//iterate through the array adn see if it's a palindrome
//if true (in the upper function) check the length of the array, if it's greater than the current counter,
//then the counter is now equal to that lenght and the longest is now equal to that array.toString().
//return longest


//SECOND ATTEMPT

function longestPalindromicSubstring(string) {
  // Write your code here.
  let counter = 0;
  let longpali = "";
  let substringArray = []

  if(string.length === 1){
    return string;
  }

  for(let i = 0; i < string.length; i++){
    for(let j = i + 1; j < string.length; j++){
      let substring = string.slice(i, j);
      substringArray.push(substring)
    }
  }

  for(let k = 0; k < substringArray.length; k++){
      let str = substringArray[k];
      if(isPalindrome(str) && str.length > counter){
        counter = str.length
        longpali = str
      }
  }

  return longpali;
}

function isPalindrome(string){
  let reversed = "";

  for(let i = string.length - 1; i >= 0; i--){
    let ele = string[i];
    reversed += ele
  }

  return string === reversed
}


//THIRD ATTEMPT

function longestPalindromicSubstring(string) {
  let count = 0;
  let longest = "";
  if(string.length <= 1){
    return string;
  }

  for(let i = 0; i < string.length; i++){
    for(let j = i+1; j < string.length; j++){
      let subStr = string.substring(i,j+1);
      // console.log(subStr)
      if(isAnagram(subStr) && subStr.length > count){
        count = subStr.length
        longest = subStr;
      }

    }
  }

  return longest;
}

function isAnagram (subStr){
  let reversed = "";
  for(let i = subStr.length - 1; i >= 0; i --){
    reversed += subStr[i]
  }

  return reversed === subStr
}
// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;


//create a variable called count and set it = to 0
//create a variable called longest and set it equal to "";
//create a nested loop that returns a substring
  //create a conditional to see if the substring is an anagram by using the helper function.
    //created a helper function isAnagram?
    //create a variable called reversed and set it equal to an empty string
    //loop through the string backwards and += the letters into the reversed string
      //if the reversed word is = to the input string, return true, else false
  //if word is anagram (is true) && word.lengh > count
    //count = word.length
    //longest = word
//once we loop through all of the substrings, return longest

