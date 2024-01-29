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
