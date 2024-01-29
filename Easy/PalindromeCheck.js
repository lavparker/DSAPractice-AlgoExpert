// Palindrome Check
// Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome.
// A palindrome is defined as a string that's written the same forward and backward. Note that single-character strings are palindromes.

// Sample Input
// string = "abcdcba"
// Sample Output
// true // it's written the same forward and backward

function isPalindrome(string) {
  // Write your code here.

  let backwards = '';

  for(let i = string.length - 1; i >=0; i--){
    let letter = string[i];

    backwards += letter;
  }

  if(string === backwards){
    return true;
  }else{
    return false;
  }
}
//create an empty string
//iterate through string backwards and add each letter to the new string
//if string is equal to reversed string return true, else false
//this should be O(n)
// Do not edit the line below.
exports.isPalindrome = isPalindrome;
